import React from 'react'
import Profile from './Profile'
import Info from './Info'
import Social from './Social'
import Downloadbtn from './Downloadbtn'

const Sidebar = () => {
  return (
    <div className={`flex flex-col items-center justify-start px-[10px] w-[25%] bg-gray-300 text-black overflow-hidden dark:text-white dark:bg-black h-screen rounded-[14px] `}>
    <Profile/>
    <Social/>
    <Info/>
    <Downloadbtn/>
    </div>
  )
}

export default Sidebar