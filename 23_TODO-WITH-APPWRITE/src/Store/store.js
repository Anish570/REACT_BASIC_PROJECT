import { configureStore, createSlice } from "@reduxjs/toolkit";
import { database, account } from "../Appwrite/Config";
import { Query } from "appwrite";
export const dbId = import.meta.env.VITE_DATABASE_ID;
export const collectionId = import.meta.env.VITE_COLLECTION_ID;

export const addTodo = (email, todo) => async (dispatch) => {
  try {
    // Assuming dbId and collectionId are properly defined
    const response = await database.createDocument(
      dbId,
      collectionId,
      "unique()",
      {
        Email: email,
        Todo: todo,
      }
    );
  } catch (error) {
    console.error("Error adding todo:", error);
  }
};

export const updateTodo = async (id, todo) => {
  const todoToUpdate = state.todos.find((item) => item.id === id);
  if (todoToUpdate) {
    todoToUpdate.todo = todo;
  }
};

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    deleteTodo: (state, action) => {
      const idToDelete = action.payload;
      state.todos = state.todos.filter((item) => item.id !== idToDelete);
    },
  
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { deleteTodo, toggleComplete, setTodos } = todoSlice.actions;

export const selectTodos = (state) => state.todo.todos;

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

// Fetch todos from the database when the store is initialized
// store.dispatch(fetchTodos());
// Instead of logging the selectTodos function, log the todos from the store

export default store;
