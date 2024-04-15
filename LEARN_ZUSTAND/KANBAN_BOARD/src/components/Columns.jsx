import React, { useState } from 'react'
import Task from './Task'
import { useStore } from '../store'
import TaskForm from './TaskForm'


const Columns = ({ state, onOpen, isOpen, onClose }) => {
    const [latestState, setLatestState] = useState("");
    const tasks = useStore((store) => store.tasks.filter((task) => task.state === state));
    const setDraggedTask = useStore((store) => store.setDraggedTask)
    const draggedTask = useStore((store) => store.draggedTask)
    const moveTask = useStore((store) => store.moveTask)
    const addState = () => {
        // Set the latest state
        setLatestState(state);

        // Open the form
        // onClose(); // Close any open forms in other columns
        onOpen(state); // Open the form only for the corresponding column
    };

    return (
        <>
            <div onDragOver={(e) => { e.preventDefault() }}
                onDrop={(e) => {
                    moveTask(draggedTask, state)
                    setDraggedTask(null)

                }}
                className='min-h-[15rem] bg-gray-800 w-[33%] max-w-[15rem] mx-[0.5rem] p-[0.5rem] rounded-md '>
                <div className='flex justify-between items-center mb-[16px]'>
                    <p className='uppercase'>{state}</p>
                    <button onClick={() => addState()} className='bg-gray-200 hover:bg-gray-500 text-black px-[10px] rounded-md'>ADD</button>
                </div>
                {
                    tasks.map((task) => (<Task title={task.title} key={task.title} />))
                }
                <TaskForm isOpen={isOpen === state} onClose={onClose} state={latestState} />
            </div>

        </>
    )
}

export default Columns