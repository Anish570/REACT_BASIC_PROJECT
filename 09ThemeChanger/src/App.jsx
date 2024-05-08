import { useEffect, useState } from "react"
import { ThemeProvider } from "./contexts/theme"
import ThemeBtn from "./components/ThemeBtn"
import Card from "./components/Card"

function App() {
  const [themeMode,setThemeMode] = useState("dark")
  const darkTheme = ()=>{
      setThemeMode("dark")
  }
  const lightTheme = ()=>{
      setThemeMode("light")
  }
useEffect(()=>{
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMode)
},[themeMode])
  return (
   <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
      
              <div className="flex flex-wrap min-h-screen items-center dark:bg-slate-700">
                <h2 className="font-semibold text-3xl dark:text-white absolute left-[50%] top-[6%] -translate-x-[50%]">Theme Changer Using Context</h2>
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      <Card/>
                    </div>
                </div>
            </div>

   </ThemeProvider>
  )
}

export default App
