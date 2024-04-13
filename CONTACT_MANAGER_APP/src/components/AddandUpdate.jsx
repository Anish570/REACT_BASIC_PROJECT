import React from 'react'
import Modal from "./Modal";
import {Formik,Form,Field} from 'formik'
import { addDoc, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import {db} from "../config/firebase"
import { toast } from 'react-toastify';

const AddandUpdate = ({isOpen,onClose,isUpdate,contactdata}) => {
    const addcontact =async (contact) =>{
            try {
                const contactRef = collection(db,"contact");
                await addDoc(contactRef,contact)
                onClose();
                toast.success('Contact Added Successfully');
            } catch (error) {
                console.log(error)
            }
    }

    const updatecontact =async (contact,id) =>{
        try {
            const contactRef = doc(db,"contact",id);
            await updateDoc(contactRef,contact)
            onClose();
            toast.success('Contact Updated Successfully');
        } catch (error) {
            console.log(error)
        }
}

  return (
    <>
    <Modal isOpen={isOpen} onClose={onClose}>
    <Formik 
        initialValues={isUpdate ? {
            name:contactdata.name,
            email:contactdata.email,
        }:
        {
            name:"",
            email:"",
        }}
        onSubmit={(values)=>{
            isUpdate?updatecontact(values,contactdata.id): addcontact(values);
           
        }}
    >
        <Form className='space-y-2 flex flex-col'>
          <div className='flex flex-col gap-1'>
          <label htmlFor="name">Name</label>
            <Field name="name" className="h-10 border" />
          </div>
          <div className='flex flex-col gap-1'>
          <label htmlFor="email">Email</label>
            <Field name="email" className="h-10 border" />
          </div>
          <button type='submit' className='border font-medium px-3 py-1.5 bg-orange self-end'>
           {isUpdate? "Update":"Add Contact"}
            </button>
        </Form>
    </Formik>
    </Modal>
    </>
  )
}

export default AddandUpdate