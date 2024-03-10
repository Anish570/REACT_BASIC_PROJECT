import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter, setcounter] = useState(15);

const addvalue = ()=>{
  console.log("value + clicked");
  counter = counter+1;
  setcounter(counter);
}
const subvalue = ()=>{
  console.log("value + clicked");
  counter = counter-1;
  setcounter(counter);
}
  return (
    <>
    <h2>Chai Aur Code: 02 level</h2>
    <h2>Counter : {counter}</h2>
    <button onClick={addvalue}>Value + </button>
    <button onClick={subvalue}>Value - </button>
    </>
  )
}

export default App
