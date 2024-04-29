import { configureStore, createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [
      {
        id: 1,
        todo: "A message",
        completed: false,
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    updateTodo: (state, action) => {
      const { id, todo } = action.payload;
      const todoToUpdate = state.todos.find((item) => item.id === id);
      if (todoToUpdate) {
        todoToUpdate.todo = todo;
      }
    },
    deleteTodo: (state, action) => {
      const idToDelete = action.payload;
      state.todos = state.todos.filter((item) => item.id !== idToDelete);
    },
    toggleComplete: (state, action) => {
      const idToToggle = action.payload;
      const todoToToggle = state.todos.find((item) => item.id === idToToggle);
      if (todoToToggle) {
        todoToToggle.completed = !todoToToggle.completed;
      }
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, toggleComplete } =
  todoSlice.actions;

const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

export default store;
