import { configureStore } from '@redux/toolkit';
import todos from '../modules/todos';

const store = configureStore({
    reducer: { todos: todos },
});

export default store;