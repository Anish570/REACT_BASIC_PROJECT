import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
     <footer className='absolute bottom-0 flex w-full h-[10%] justify-between bg-pink-300'>
     <div className='flex flex-col justify-start w-1/2 bg-red-400'>
            <h3>@c copyright 2024</h3>
       </div>
       <div className='w-1/2 bg-blue-400 '>
        <ul className='flex flex-col justify-start '>
            <li>
                <NavLink to="">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/about">
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to="/github">
                    Github
                </NavLink>
            </li>
        </ul>
       </div>
     </footer>
    </>
  )
}

export default Footer