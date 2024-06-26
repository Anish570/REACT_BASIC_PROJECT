import React, { useState } from 'react';
import { database } from '../Appwrite/Config';

const dbId = import.meta.env.VITE_DATABASE_ID;
const collectionId = import.meta.env.VITE_COLLECTION_ID;

function TodoItem({ todo, setTodos }) {

    const [editMode, setEditMode] = useState(false); // Added state to track edit mode
    const [isCompleted, setIsCompleted] = useState(todo.Completed)
    const [todoMsg, setTodoMsg] = useState(todo.Todo);

    const editTodo = async (id, todo) => {
        setTodos((prev) => prev.map((prevtodo) => (
            prevtodo.$id === id ? { ...prevtodo, Todo: todo } : prevtodo
        )))
        try {
            await database.updateDocument(dbId, collectionId, id, {
                Todo: todo
            });
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    };

    const handleToggleCompleted = async (id) => {
        setIsCompleted(!todo.Completed)
        try {
            await database.updateDocument(dbId, collectionId, id, {
                Completed: !todo.Completed
            });
        } catch (error) {
            console.error('Error toggling completed status:', error);
        }
    };
    const handledeltete = async (id) => {
        setTodos((prev) => prev.filter((todo) => todo.$id !== id))
        await database.deleteDocument(dbId, collectionId, id)

    }
    return (
        <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${isCompleted ? 'bg-[#c6e9a7]' : 'bg-[#ccbed7]'}`}>
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={isCompleted}
                onChange={() => handleToggleCompleted(todo.$id)}
            />
            {editMode ? (
                <input
                    type="text"
                    className={`border items-center outline-none border-gray-400 bg-transparent w-full rounded-lg  `}
                    value={todoMsg}
                    onChange={(e) => setTodoMsg(e.target.value)}
                />
            ) : (
                <div
                    className={`flex items-center outline-none w-full bg-transparent rounded-lg ${isCompleted ? 'line-through' : ''}`}
                >
                    {todo.Todo}
                </div>
            )}
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (editMode) {
                        editTodo(todo.$id, todoMsg); // Call editTodo function when saving changes
                    }
                    setEditMode((prev) => !prev); // Toggle edit mode
                }}
                disabled={isCompleted}
            >
                {editMode ? "📁" : '✏️'}
            </button>

            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => { handledeltete(todo.$id) }}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
