import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const MenuHamburger = () => {
    const [isMenuOpen,setIsMenuOpen] =useState(true)
    useEffect(()=>{
        
    },[isMenuOpen])
  return (
    <div className='transition-all' onClick={()=>setIsMenuOpen((prev)=> !prev)}>
     {isMenuOpen ? <GiHamburgerMenu className='text-3xl'/> : <IoClose className='text-3xl'/>}
    </div>
  )
}

export default MenuHamburger