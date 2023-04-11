import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [
    {
      id: '1',
      title: '리액트',
      body: '리액트를 배워봅시다',
      isDone: false,
    },
  ],
  todo: {
    id: '0',
    title: '',
    body: '',
    isDone: false,
  },
}

const todos = createSlice({
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
          }
        } else {
          return todo
        }
      })
    },

    getTodoByID: (state, action) => {
      state.todo = state.todos.find((todo) => {
        return todo.id === action.payload
      })
    },
  },
})

export const { addTodo, deleteTodo, toggleStatusTodo, getTodoByID } = todos.actions
export default todos.reducer
