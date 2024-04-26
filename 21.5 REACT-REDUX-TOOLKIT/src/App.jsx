import { useState } from 'react'
import Header from './Components/Header'
import DisplayNumber from './Components/DisplayNumber'
import Buttons from './Components/Buttons'
import PrivacyMsg from './Components/PrivacyMsg'
import { useSelector } from 'react-redux'

function App() {

  const Privacy = useSelector((state) => state.privacy)
  return (
    <>
      <div className='flex flex-col gap-4 items-center justify-center h-screen'>
        <Header />
        {
          Privacy ? <PrivacyMsg /> : <DisplayNumber />
        }
        <Buttons />

      </div>
    </>
  )
}

export default App
