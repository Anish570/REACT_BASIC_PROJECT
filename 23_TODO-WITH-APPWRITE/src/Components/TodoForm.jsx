import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../Store/store';
// import { useTodo } from '../contexts';

function TodoForm() {
    const dispatch = useDispatch()
    const [todos, setTodos] = useState([])
    //     const addTodo = (todo) => {
    //         console.log("This is a Add todo")
    //         setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
    //     }
    //     const updateTodo = (id, todo) => {
    //         setTodos((prev) => prev.map((prevtodo) => (
    //             prevtodo.id === id ? todo : prevtodo
    //         )))
    //     }
    //     const deleteTodo = (id) => {
    //         setTodos((prev) => prev.filter((todo) => todo.id !== id))
    //     }
    //     const toggleComplete = (id) => {
    //         setTodos((prev) => prev.map((prevtodo) => (
    //             prevtodo.id === id ? { ...prevtodo, completed: !prevtodo.completed } : prevtodo
    //         )))
    //     }
    const [todo, setTodo] = useState("")
    //     const { addTodo } = useTodo()
    const add = (e) => {
        e.preventDefault()
        if (!todo) return
        dispatch(addTodo({ id: Date.now(), todo: todo, completed: false }))
        setTodo("")
    }


    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

