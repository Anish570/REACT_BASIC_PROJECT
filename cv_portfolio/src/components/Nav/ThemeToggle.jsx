import React from 'react'
import { useEffect, useState } from 'react'
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const themeMode = localStorage.getItem("theme");
    return themeMode === "true"; // Parse the string as a boolean
  });
  
  useEffect(() => {
    const themeMode = localStorage.getItem("theme");
    if (themeMode) {
      setIsDarkMode(themeMode === "true");
    }
  }, []);
  
  useEffect(() => {
    if (isDarkMode) {
      document.querySelector('html').classList.add('dark');
      localStorage.setItem("theme", "true"); // Store as a string
    } else {
      document.querySelector('html').classList.remove('dark');
      localStorage.setItem("theme", "false"); // Store as a string
    }
  }, [isDarkMode]);
  
  return (
    <div className={`transition-all rounded-full ${isDarkMode ? "bg-black hover:bg-white" : "bg-white hover:bg-black"}  w-[40px] h-[40px]  flex items-center justify-center`} onClick={()=> setIsDarkMode((prev)=> !prev)}>
    {isDarkMode ? <FaMoon className='text-3xl text-white p-1 hover:text-black' />  : <IoSunnySharp className='text-3xl text-yellow-400 p-1 hover:text-white' />}
    </div>

  )
}

export default ThemeToggle