import Contact_img from '../assets/Contact.png'
import firebase_img from '../assets/logos_firebase.svg'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='flex items-center gap-2 justify-center text-[20px] font-medium bg-[#FFFFFF] h-[60px] rounded-lg my-4 '>
                    <img src={firebase_img} alt="" />
                    <h1 className='text-black'>Firebase Contact App</h1>
        </div>
    </div>
  )
}

export default Navbar