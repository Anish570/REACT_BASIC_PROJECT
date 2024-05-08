import { useState } from 'react'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  // const myobj=
  // {
  //   name:"Anish",
  //    age:21
  // }
  return (
    <>
     <h1 className='bg-red-400 font-light'>hello world</h1>
     <Card userName="Anish" btntext="click"/>
     <Card userName="Avatar" btntext="Watch Now"/>
    </>
  )
}

export default App
