import React from 'react'
import { GoDownload } from "react-icons/go";
const Downloadbtn = () => {
  return (
    <>
   {/* <button className="flex items-center gap-[4px] bg-blue-600 border-black border-solid border-1 rounded-[10px] text-white text-[18px] font-semibold leading-[27px] py-[14px] px-[30px] capitalize"> */}
   <button className="flex items-center gap-3 bg-blue-500 border hover:bg-white hover:text-black
    dark:hover:bg-[#1d1d1d] dark:hover:text-white
    border-blue-500 rounded-lg text-white text-[18px] font-medium leading-[27px] px-[30px] py-[14px] text-center capitalize">
        <span>
            <GoDownload/>
        </span>
        <p>
        Download CV
        </p>
    </button>
    </>
  )
}

export default Downloadbtn