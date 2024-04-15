import { useState } from 'react'
import Columns from './components/Columns'
import TaskForm from './components/TaskForm'

function App() {
  const states = [
    { state: "planned" }, { state: "ongoing" }, { state: "done" }
  ]

  const [isOpen, setIsOpen] = useState(null)

  const onOpen = (state) => {
    setIsOpen(state)
  }

  const onClose = () => {
    setIsOpen(null)
  }

  return (

    <div className='bg-[#333333] relative w-screen  h-screen overflow-hidden pt-[5%] flex justify-center items-start'>
      {
        states.map((states, index) => (
          <Columns key={index} state={states.state} isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
        ))
      }

    </div>


  )
}

export default App
