import React from 'react'

const Profile = () => {
  return (
    <div className=' flex items-center flex-col'>
      <img src="https://anishgtm.netlify.app/assets/profile-pic.png" alt="hello" className='m-2 w-[70px] h-[70px] md:w-[150px] md:h-[150px] border-[2px] border-black dark:border-gray-300 rounded-[12px]' />
      <h1>Anish Gtm</h1>
      <h5>Front-end Developer</h5>
    </div>
  )
}

export default Profile