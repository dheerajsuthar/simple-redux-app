import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters,
    addTodo,
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
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, { todos: todos(state.todos, action) });
        case TOGGLE_TODO:
            return Object.assign({}, state, { todos: todos(state.todos, action) });

        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, { filter: visibilityFilter(state.filter, action) });
    }
}