import { useState,useCallback , useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [includenumber,setIncludeNumber] = useState(true);
  const [includechar,setIncludeChar] = useState(true);
  const [password,setPassword] = useState("");
  
  const passwordref = useRef(null);

  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(includenumber) str+= "0123456789"
    if(includechar) str+= "@#$%&*()!"

    for(let i = 1 ;i <= length; i++){
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
    }
      setPassword(pass)
  },[length,includenumber,includechar,setPassword])

const copypassword = useCallback(()=>{
    window.navigator.clipboard.writeText(password);
},[password]);

  useEffect(()=>{passwordGenerator()},[includechar,includenumber,length,setPassword])

  return (
    <>
       <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-4 bg-gray-400'>
        <h1>Password Generator</h1>
            <div>
                <input type="text"
                       value={password}
                       className='bg-gray-300 mt-1 mb-2 rounded'
                       placeholder='Your_Password'
                       readOnly
                       ref={passwordref}
                />
                <button 
                onClick={copypassword}
                className='btn'>
                  Copy
                </button>
            </div>

          <div className='flex text-sm gap-x-2'>
                <div className='flex items-center gap-x-1'>
                  <input
                   type="range"
                    name="length" 
                    value={length}
                    min={6}
                    max={16}
                    className='cursor-pointer text-black'
                    onChange={(e)=>{setLength(e.target.value)} }
                    id="" />
                    <label htmlFor="">Length: {length}</label>
                </div>

                <div>
                  <input 
                  type="checkbox" 
                  defaultChecked={includenumber}
                  onChange={
                    ()=>{
                      setIncludeNumber((prev) => !prev)
                    }
                  }
                  />
                  <label htmlFor="">Numbers</label>
                </div>

                <div>
                  <input 
                  type="checkbox" 
                  defaultChecked={includechar}
                  onChange={
                    ()=>{
                      setIncludeChar((prev) => !prev)
                    }
                  }
                  />
                  <label htmlFor="">Characters</label>
                </div>
          </div>

       </div>
    </>
  )
}

export default App
