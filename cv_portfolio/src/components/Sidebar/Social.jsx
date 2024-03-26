import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandLinkedin } from "react-icons/tb";


const Social = () => {
  const socialdata= [
    {
      icon: <FaFacebookF/>,
      link:"www.facebook.com"
    },
    {
      icon: <FaXTwitter/>,
      link:"www.twitter.com"
    },
    {
      icon: <FaInstagram/>,
      link:"www.instagram.com"
    },
    {
      icon: <TbBrandLinkedin/>,
      link:"www.linkedin.com"
    },
  ]
  return (
    <div className='my-3 w-full flex items-center gap-3 justify-center'>
      {
        socialdata.map((item,index)=>(
            <div className='border-[1px] text-[18px] rounded-lg border-white p-2 hover:bg-blue-600' key={index}> {item.icon} </div>
        ))
      }
    </div>
  )
}

export default Social