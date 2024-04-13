import React from 'react'
import Modal from "./Modal";
import {Formik,Form,Field} from 'formik'
import { addDoc, collection } from 'firebase/firestore';
import {db} from "../config/firebase"
const AddandUpdate = ({isOpen,onClose}) => {
    const addcontact =async (contact) =>{
            try {
                const contactRef = collection(db,"contact");
                await addDoc(contactRef,contact)
            } catch (error) {
                console.log(error)
            }
    }
  return (
    <>
    <Modal isOpen={isOpen} onClose={onClose}>
    <Formik 
        initialValues={{
            name:"",
            email:"",
        }}
        onSubmit={(values)=>{
            addcontact(values);
            console.log(values);
           
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
          <button type='submit' className='border font-medium px-3 py-1.5 bg-orange self-end'>Add Contact</button>
        </Form>
    </Formik>
    </Modal>
    </>
  )
}

export default AddandUpdate