// import { createStore } from 'redux';
// import { combineReducers } from 'redux';
// import todos from '../modules/todos';

// const rootReducer = combineReducers({
//     todos,
// });
// const store = createStore(rootReducer);

// export default store;

// --------------------------------------------------------

import { configureStore } from '@reduxjs/toolkit';
import todos from '../modules/todos';

const store = configureStore({
    reducer: { todos: todos },
});

export default store;