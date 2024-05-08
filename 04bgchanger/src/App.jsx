import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Texts from './components/Texts'
function App() {
  const [color, setColor] = useState("cloud wisp");
  const [fontcolor, setfontcolor] = useState("black");
  return (
    <>
    <div className='w-screen h-screen duration-200 m-0 p-0'
    style={{backgroundColor: color,color: fontcolor}}
    >
      <Texts />
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl'>
        <button
         className='outline-none px-3 py-1 rounded-3xl' 
         style={{backgroundColor: "red"}} onClick={() => {setColor("red")}}>
           Red
        </button>
        <button
         className='outline-none px-3 py-1 rounded-3xl' 
         style={{backgroundColor: "green"}} onClick={() => {setColor("green")}}>
           Green
        </button>
        <button
         className='outline-none px-3 py-1 rounded-3xl' 
         style={{backgroundColor: "yellow"}} onClick={() => {setColor("yellow")}}>
           Yellow
        </button>
        <button
         className='outline-none px-3 py-1 rounded-3xl' 
         style={{backgroundColor: "orange"}} onClick={() => {setColor("orange")}}>
           Orange
        </button>
        <button
         className='outline-none px-3 py-1 rounded-3xl' 
         style={{backgroundColor: "Blue"}}  onClick={() => {setColor("blue")}}>
           Blue
        </button>
        <button
         className='outline-none px-3 py-1 rounded-3xl' 
         style={{backgroundColor: "black",color: "white"}}  onClick={() => {setColor("white"); setfontcolor("black");}}>
           white
        </button>
        <button
         className='outline-none px-3 py-1 rounded-3xl' 
         style={{backgroundColor: "white", color: "black"}} 
         onClick={
          () => {
            setColor("black");
             setfontcolor("white");
             }}>
           Black
        </button>

        </div>
      </div>
    </div>
    </>
  )
}

export default App
