import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
       <header className='bg-slate-400 w-full h-[10%]'>
        <nav className='flex justify-between items-center'>
            <div>

            </div>
            <div className='w-1/2 leading-[80px]'>
                <ul className='flex items-center justify-evenly'>
                    <li>
                        <NavLink to="/" className={({isActive}) =>`text-3xl font-semibold hover:text-orange-700 ${isActive ? "text-orange-700" : "text-black-700"}`}> 
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" 
                        className={({isActive}) =>`text-3xl font-semibold hover:text-orange-700 ${isActive ? "text-orange-700" : "text-black-700"}`}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/github"
                        className={({isActive}) =>`text-3xl font-semibold hover:text-orange-700 ${isActive ? "text-orange-700" : "text-black-700"}`}>
                           Github
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
       </header>
    </>
  )
}

export default Header