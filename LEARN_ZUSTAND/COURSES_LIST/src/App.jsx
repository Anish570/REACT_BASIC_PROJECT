import { useState } from 'react'
import './App.css'
import CourseForm from './components/CourseForm'

function App() {


  return (
    <>
      <div className="main-container">
        <h1 style={{
          fontSize: "2.5rem",
          marginBottom: "2rem"
        }}>My Course List</h1>
        <CourseForm />
      </div>
    </>
  )
}

export default App
