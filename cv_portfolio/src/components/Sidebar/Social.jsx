import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandLinkedin } from "react-icons/tb";


const Social = () => {
  const socialdata= [
    {
      icon: <FaFacebookF/>,
      link:"www.facebook.com",
      class:"text-blue-500"
    },
    {
      icon: <FaXTwitter/>,
      link:"www.twitter.com",
      class:"text-black dark:text-white "
    },
    {
      icon: <FaInstagram/>,
      link:"www.instagram.com",
      class:"text-pink-600"
    },
    {
      icon: <TbBrandLinkedin/>,
      link:"www.linkedin.com",
      class:"text-blue-500"
    },
  ]
  return (
    <div className='my-3  w-full flex items-center gap-3 justify-center'>
      {
        socialdata.map((item,index)=>(
            <div className={`bg-[#f3f6f6] dark:bg-[#1d1d1d] ${item.class} hover:text-white text-[18px] rounded-lg p-2 hover:bg-blue-600 dark:hover:bg-blue-600` } key={index}> {item.icon} </div>
        ))
      }
    </div>
  )
}

export default Social