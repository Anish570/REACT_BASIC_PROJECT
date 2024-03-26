import React from 'react'
import { GoDownload } from "react-icons/go";
const Downloadbtn = () => {
  return (
    <>
   <button className="flex items-center gap-[4px] bg-blue-600 border-black border-solid border-1 rounded-[10px] text-white text-[18px] font-semibold leading-[27px] py-[14px] px-[30px] capitalize">
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