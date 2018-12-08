import Footer from './footer';
import VisibleTodoList from '../containers/visibletodolist';
import AddTodo from '../containers/addtodo';

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default App;