import React from 'react'
import Modal from "./Modal";
import {Formik,Form} from 'formik'
const AddandUpdate = ({isOpen,onClose}) => {
  return (
    <>
    <Modal isOpen={isOpen} onClose={onClose}>
    <Formik>
        <Form>
            F
        </Form>
    </Formik>
    </Modal>
    </>
  )
}

export default AddandUpdate