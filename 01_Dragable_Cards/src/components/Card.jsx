import React from 'react'
import { motion } from "framer-motion"
import { IoMdCloseCircleOutline } from "react-icons/io";  //close icon
import { MdOutlineFileDownload } from "react-icons/md"; //download icon
import { FaRegFileAlt } from "react-icons/fa"; //file icon


function Card({refrence,data}) {
  return (
    <motion.div drag dragConstraints={refrence} whileDrag={{scale:1.1}} className='relative w-[220px] h-72 rounded-3xl bg-slate-500 px-3 pt-5 overflow-hidden'>
      <div>
        <FaRegFileAlt/>
        <h3 className='font-sembold leading-none py-1 mt-2'>{data.desc}</h3>
      </div>
      <div className='absolute footer left-0 bottom-0 w-full  h-[60px]'>
      <span className='flex items-center justify-between px-3'>
        <h1>{data.fileSize}</h1>
        {
          data.close ? <IoMdCloseCircleOutline/> : <MdOutlineFileDownload />
        }
      </span>
      {
        data.tag.isOpen ?( <span className={`flex items-center justify-center w-full  h-[40px] ${data.tag.tagColor === "green" ? "bg-green-400" :"bg-red-400"}`}>
        <h1 className='font-semibold '>{data.tag.tagTitle}</h1>
      </span>) : null
      }
      </div>
    </motion.div>
  )
}

export default Card