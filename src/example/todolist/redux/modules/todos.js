// // Action value
// const ADD_TODO = "ADD_TODO";
// const GET_TODO_BY_ID = "GET_TODO_BY_ID";
// const DELETE_TODO = "DELETE_TODO";
// const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";

// // Action Creator
// // Todo를 추가하는 action creator
// export const addTodo = (payload) => {
//   return {
//     type: ADD_TODO,
//     payload,
//   };
// };

// // Todo를 지우는 action creator
// export const deleteTodo = (payload) => {
//   return {
//     type: DELETE_TODO,
//     payload,
//   };
// };

// // Todo를 isDone를 변경하는 action creator
// export const toggleStatusTodo = (payload) => {
//   return {
//     type: TOGGLE_STATUS_TODO,
//     payload,
//   };
// };

// // 상세 페이지에서 특정 Todo만 조회하는 action creator
// export const getTodoByID = (payload) => {
//   return {
//     type: GET_TODO_BY_ID,
//     payload,
//   };
// };

// // initial state
// const initialState = {
//   todos: [
//     {
//       id: "1",
//       title: "리액트",
//       body: "리액트를 배워봅시다",
//       isDone: false,
//     },
//   ],
//   todo: {
//     id: "0",
//     title: "",
//     body: "",
//     isDone: false,
//   },
// };

// const todos = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: [...state.todos, action.payload],
//       };

//     case DELETE_TODO:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.payload),
//       };

//     case TOGGLE_STATUS_TODO:
//       return {
//         ...state,
//         todos: state.todos.map((todo) => {
//           if (todo.id === action.payload) {
//             return {
//               ...todo,
//               isDone: !todo.isDone,
//             };
//           } else {
//             return todo;
//           }
//         }),
//       };

//     case GET_TODO_BY_ID:
//       return {
//         ...state,
//         todo: state.todos.find((todo) => {
//           return todo.id === action.payload;
//         }),
//       };
//     default:
//       return state;
//   }
// };

// export default todos;

// -------------------------------------------------------------------------------------

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [
    {
      id: "1",
      title: "리액트",
      body: "리액트를 배워봅시다",
      isDone: false,
    },
  ],
  todo: {
    id: "0",
    title: "",
    body: "",
    isDone: false,
  },
};

export const __getTodos = createAsyncThunk(
    'todos/getTodos',
    async (payload, thunkAPI) => {
        try {
            const data = await axios.get('http://localhost:3000');
            return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const todos = createSlice({
    name: 'TEST',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos = [...state.todos, action.payload]
        },

        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        toggleStatusTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        isDone: !todo.isDone,
                    };
                } else {
                    return todo;
                }
            });
        },

        getTodoByID: (state, action) => {
            state.todo = state.todos.find((todo) => {
                return todo.id === action.payload;
            });
        },
        
    },
    extraReducers: {
        [__getTodos.pending]: (state) => {
            state.isLoading = true;
        },
        [__getTodos.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.todos = action.payload;
        },
        [__getTodos.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { addTodo, deleteTodo, toggleStatusTodo, getTodoByID } = todos.actions;
export default todos.reducer;

// -------------------------------------------------------------------------------------

//     case GET_TODO_BY_ID:
//       return {
//         ...state,
//         todo: state.todos.find((todo) => {
//           return todo.id === action.payload;
//         }),
//       };
//     default:
//       return state;
//   }
// };
