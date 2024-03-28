import React from 'react'
import ThemeToggle from './ThemeToggle'
import MenuHamburger from './MenuHamburger'

const Navbar = ({className,showMenu}) => {
  return (
    <div className={` flex items-center justify-between  ${className}`}>
        <div>
            <h1 className='font-bold text-3xl pl-6 text-black dark:text-white '>Anish</h1>
        </div>
       <div className={`w-[20%] flex items-center justify-around`}>
       <ThemeToggle/>
        <MenuHamburger showMenu={showMenu}/>
      {
          console.log("what's in onclick props",showMenu)
      }
       </div>
    </div>
  )
}

export default Navbar