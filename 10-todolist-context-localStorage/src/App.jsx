import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-slate-700 w-[100vw] h-[100vh] '>
    <h1 className="text-3xl text-gray-400 font-bold underline">
      Hello world!
    </h1>
    </div>
    </>
  )
}

export default App
