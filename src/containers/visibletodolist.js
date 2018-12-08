import { connect } from 'react-redux';
import TodoList from '../components/todolist';
import { toggleTodo, VisibilityFilters } from '../actions';

const getVisibleTodos = (todos, filter) => {
    console.log('in getvisible');
    console.log(todos);

    switch (filter) {

        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
        default:
            throw new Error('Unknown filter: ' + filter)
    }
};

const mapStateToProps = state => {
    console.log('in v: state');
    console.log(state);
    
    
    return {
        todos: getVisibleTodos(state.todos, state.filter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => { dispatch(toggleTodo(id)) }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;