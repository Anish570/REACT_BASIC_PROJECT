import { child } from 'firebase/database';
import React from 'react'
import { createPortal } from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'

const Modal = ({isOpen,onClose,children}) => {
  return createPortal(
   <>
    {
        isOpen && (
            <>
            <div className='z-[999] absolute top-[30%] left-[50%] -translate-x-[50%] min-h-[220px] min-w-[300px] bg-slate-300 p-4'>
                        <div className='flex justify-end'>
                            <AiOutlineClose onClick={onClose} 
                            className='text-black text-2xl'/>
                        </div>
                       <div className='text-black' >
                        {children}
                       </div>
                </div>
                <div onClick={onClose}  className='absolute top-0 left-0 h-screen w-screen backdrop-blur'>

                </div>
            </>
    )}
 </>
 ,document.getElementById('modal-root')
);
}

export default Modal