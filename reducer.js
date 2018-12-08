import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters,
} from './actions';
import { stat } from 'fs';
const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (action.index === index) {
                    return Object.assign({}, todo, { completed: !todo.completed });
                }
                return todo;
            });
        default:
            return state;
    }
}

export default function todoApp(state = {}, action) {
    return {
        todos: todos(state.todos, action),
        filter: visibilityFilter(state.filter, action)
    }
}