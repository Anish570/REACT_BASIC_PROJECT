import { useState } from 'react'
import Header from './Components/Header'
import DisplayNumber from './Components/DisplayNumber'
import Buttons from './Components/Buttons'

function App() {


  return (
    <>
      <div className='flex flex-col gap-4 items-center justify-center h-screen'>
        <Header />
        <DisplayNumber />
        <Buttons />

      </div>
    </>
  )
}

export default App
