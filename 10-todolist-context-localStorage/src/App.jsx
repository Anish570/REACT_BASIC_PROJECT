import { useEffect, useState } from 'react'
import {TodoContext,TodoProvider,useTodo} from './contexts/index'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos, setTodos] = useState([])
  const addTodo = (todo) =>{
    console.log("This is a Add todo")
    setTodos((prev) =>  [{id: Date.now(),...todo},...prev] )
  }
   const updateTodo = (id,todo)=>{
        setTodos((prev)=> prev.map((prevtodo)=>(
          prevtodo.id === id ? todo : prevtodo
        )))
   }
   const deleteTodo = (id)=>{
      setTodos((prev)=> prev.filter((todo)=> todo.id !== id))
   }
   const toggleComplete = (id)=>{
    setTodos((prev)=> prev.map((prevtodo)=>(
      prevtodo.id === id ? {...prevtodo, completed: !prevtodo.completed} : prevtodo
    )))}
 
    useEffect(()=>{
      console.log("This is a GEt Item ")
        const todos = JSON.parse(localStorage.getItem("todos"))
        if(todos && todos.length > 0){
          setTodos(todos)
        }
    },[])

    useEffect(()=>{
       console.log("This is a Set Item ")
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])

  return (
  <TodoProvider value={{ todos,addTodo,deleteTodo,updateTodo,toggleComplete}}>
   <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                    <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
           
            {/* <TodoItem/> */}
            </TodoProvider>
  )
}

export default App
