import React from 'react'
import { HiOutlineUserCircle } from "react-icons/hi2";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const Contacts = ({data}) => {
    console.log("props received: ",data)
  return (
    <div className='flex gap-2 p-2 items-center bg-yellow rounded-lg text-black'>
        <HiOutlineUserCircle className='text-4xl text-orange'/>
        <div className='ml-2 flex flex-col flex-grow gap-0'>
           <h2 className='font-medium'> {data.name}</h2>
           <p> {data.email}</p>
        </div>
        <div className='text-2xl flex items-center'>
            <FaEdit/>
            <MdDelete/>
        </div>
    </div>
  )
}

export default Contacts