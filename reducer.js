import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters,
    setVisibilityFilter
} from './actions';
function todoApp(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            }
            );
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.map((todo, index) => {
                    if (action.index === index) {
                        return Object.assign({}, todo, { completed: !todo.completed });
                    }
                    return todo;
                })
            });

        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, { filter: action.filter });
    }
}