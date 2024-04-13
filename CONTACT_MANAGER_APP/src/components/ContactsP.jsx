import React from 'react'
import { HiOutlineUserCircle } from "react-icons/hi2";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';


const ContactsP = ({data}) => {
   const deleteContact = async(id) =>{
    try {
      await deleteDoc(doc(db,"contact",id))
    } catch (error) {
      console.log(error)
    }
   }
  return (
    <div className='flex gap-2 p-2 items-center bg-yellow rounded-lg text-black mb-[15px] '>
        <HiOutlineUserCircle className='text-4xl text-orange'/>
        <div className='ml-2 flex flex-col flex-grow gap-0'>
           <h2 className='font-medium '> {data.name}</h2>
           <p className='text-sm '> {data.email}</p>
        </div>
        <div className='text-2xl flex items-center'>
            <FaEdit/>
            <MdDelete onClick={()=>{deleteContact(data.id)}} className='text-red-700'/>
        </div>
    </div>
  )
}

export default ContactsP