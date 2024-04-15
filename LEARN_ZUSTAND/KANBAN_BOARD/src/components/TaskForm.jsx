import React, { useRef } from 'react'
import { useStore } from '../store'

const TaskForm = ({ isOpen, onClose, state }) => {
    const addTask = useStore((store) => store.addTask);
    const textRef = useRef();
    const handleSubmit = () => {
        const text = textRef.current.value;
        addTask(text, state)
        onClose();
    }

    return (
        <>
            {
                isOpen && (
                    <>
                        <div className='p-[10px] absolute flex flex-col  top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[3] w-[250px] h-[150px] rounded-lg bg-gray-700 text-black '>
                            <h1 className='text-center text-white font-medium'>Task Box</h1>
                            <input ref={textRef} type="text" className='border rounded-lg bg-slate-400 text-black placeholder:text-black' placeholder='Add Task' />
                            {/* <input placeholder={state} type="text" className='border rounded-lg bg-slate-400 text-black placeholder:text-black' /> */}
                            <button onClick={handleSubmit} className='text-white self-end mt-[10%] py-[3px] px-[10px] hover:bg-blue-300  bg-gray-800'>Submit</button>

                        </div >
                        <div onClick={onClose} className='absolute top-0 left-0 h-full w-full backdrop-blur'></div>
                    </>
                )
            }


        </>
    )
}

export default TaskForm