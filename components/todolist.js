import Todo from './todo';
const TodoList = ({ todos, onTodoClick }) => (
    <ul>
        {todos.map((todo, index) => (<Todo {...todos} onClick={() => { onTodoClick(index) }} />))}
    </ul>
);

export default TodoList;