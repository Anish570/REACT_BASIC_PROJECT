import React, { useState } from 'react'


function TodoForm({ email, addTodo }) {

    const [todo, setTodo] = useState("")

    const add = (e) => {
        e.preventDefault()
        if (!todo) return
        addTodo(email, todo)
        console.log("add called with email and msg", email, todo)
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

