import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id:1,
            todo: "Todo message",
            completed: false,
        },
        {
            id:2,
            todo: "Todo message",
            completed: false,
        },
        {
            id:3,
            todo: "Todo message",
            completed: false,
        },
        {
            id:4,
            todo: "Todo message",
            completed: false,
        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id, todo) =>{},
    deleteTodo: (id) => {},
    toggleComplete: (id) =>{}
})

export const useTodo = ()=>{
   return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider