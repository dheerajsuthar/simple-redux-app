import { connect } from 'react-redux';
import TodoList from '../components/todolist';
import { toggleTodo, VisibilityFilters } from '../actions';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todo.filter(todo => !todo.completed);
    }
};

const mapStateToProps = state => {
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