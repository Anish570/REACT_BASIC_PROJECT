import React from 'react'

const Profile = () => {
  return (
    <div className=' flex items-center flex-col'>
      <img src="https://anishgtm.netlify.app/assets/profile-pic.png" alt="hello" className='m-2 w-[70px] h-[70px] md:w-[180px] md:h-[180px] border-[2px] border-black dark:border-gray-300 rounded-[12px]' />
      <p className="text-black dark:text-white inline font-roboto-slab text-[20px] font-medium place-self-auto leading-[30px] text-center capitalize">
        Anish Gtm
      </p>
      <p className="bg-[#f3f6f6] text-black dark:bg-gray-900 rounded-md dark:text-gray-400 inline-block text-[14px] font-medium place-self-auto leading-[28px] my-0 mb-15 px-[20px] py-[4px] text-center capitalize">
        Front-end Junior
      </p>

    </div>
  )
}

export default Profile