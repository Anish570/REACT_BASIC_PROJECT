import React, { useRef, useState } from 'react';
import { useStore } from '../store';

const TaskForm = ({ isOpen, onClose, state }) => {
    const isEdit = useStore((store) => store.useEdit.isEdit);
    const title = useStore((store) => store.useEdit.title);
    const setEdit = useStore((store) => store.useEdit.setEdit);
    const updateTask = useStore((store) => store.updateTask);

    // Initialize edit value state with the current task title when in edit mode
    const [editValue, setEditValue] = useState(title);

    const textRef = useRef();

    const handleSubmit = () => {
        const text = textRef.current.value;
        if (isEdit) {
            // Update task with the edited value
            updateTask(title, editValue);
            // Reset edit state after submitting
            setEdit("", false);
        } else {
            // Add new task
            addTask(text, state);
        }
        // Close the task form
        onClose();
    };

    return (
        <>
            {isOpen && (
                <>
                    <div className='p-[10px] absolute flex flex-col  top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[3] w-[250px] h-[150px] rounded-lg bg-gray-700 text-black '>
                        <h1 className='text-center text-white font-medium'>Task Box</h1>
                        {/* Display input field with edit value if in edit mode, otherwise use textRef */}
                        <input
                            onChange={(e) => setEditValue(e.target.value)}
                            value={isEdit ? editValue : ''}
                            type="text"
                            ref={isEdit ? null : textRef}
                            className='border rounded-lg bg-slate-400 text-black placeholder:text-black'
                            placeholder='Add Task'
                        />
                        <button
                            onClick={handleSubmit}
                            className='text-white self-end mt-[10%] py-[3px] px-[10px] hover:bg-blue-300 bg-gray-800'
                        >
                            Submit
                        </button>
                    </div>
                    <div onClick={onClose} className='absolute top-0 left-0 h-full w-full backdrop-blur'></div>
                </>
            )}
        </>
    );
};

export default TaskForm;
