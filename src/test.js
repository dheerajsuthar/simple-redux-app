import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
} from './actions';
import store from './index.pureredux';

console.log(store.getState());

//log every change in state
const unsubscribe = store.subscribe(() => { console.log(store.getState()) });

//dispatch actions
store.dispatch(addTodo('Learn Redux'));
store.dispatch(addTodo('Learn about proxies'));
store.dispatch(addTodo('Make simple redux app'));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

unsubscribe();