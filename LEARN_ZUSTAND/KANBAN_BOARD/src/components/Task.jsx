import React, { useState } from 'react'
import './Task.css'
import { useStore } from '../store';
import { FaRegTrashCan } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";


const Task = ({ title, onOpen }) => {
    const setEdit = useStore((store) => store.useEdit.setEdit);
    const setDraggedTask = useStore((store) => store.setDraggedTask)
    const task = useStore((store) => store.tasks.find((task) => task.title === title));
    const deleteTask = useStore((store) => store.deleteTask);
    const status = task.state.toLowerCase();
    return (
        <div draggable onDragStart={() => { setDraggedTask(task.title) }}
            className='bg-white cursor-move  text-black min-h-[5rem] rounded-md p-[0.5rem] flex flex-col mb-[10px] justify-between '>
            <div>
                {title}
            </div>
            <div className='bottomWrapper flex justify-between items-center '>
                <div className='flex justify-center items-center gap-[14px]'>
                    <FaRegTrashCan onClick={() => { deleteTask(task.title) }} className='cursor-pointer' />
                    <FiEdit onClick={() => {
                        setEdit(task.title, true)
                        onOpen(task.state)
                    }}
                        className='cursor-pointer' />
                </div>
                <div className={`${status} p-[0.25rem] text-[12px] font-semibold  border-none rounded-lg capitalize`}>{status}</div>
            </div>
        </div>

    )
}

export default Task