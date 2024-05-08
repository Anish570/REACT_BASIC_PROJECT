import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const MenuHamburger = ({showMenu}) => {
    const [isMenuOpen,setIsMenuOpen] =useState(true)
    const handleClick = ()=>{
      setIsMenuOpen((prev)=> !prev)
      showMenu(isMenuOpen);
    }
    useEffect(()=>{
  
    },[isMenuOpen])
    console.log("Is menu open or not",isMenuOpen)
  return (
    <div className='transition-all' onClick={handleClick}>
     {isMenuOpen ? <GiHamburgerMenu className='text-3xl'/> : <IoClose className='text-3xl'/>}
    </div>
  )
}

export default MenuHamburger


