import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [action.payload, ...state.todos];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter !== action.payload;
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (action.payload.id === todo.id) {
          todo.title = action.payload.title;
          todo.done = action.payload.done;
        }
      });
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todos.actions;
export default todos.reducer;
