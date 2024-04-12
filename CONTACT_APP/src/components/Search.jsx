import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { AiFillPlusCircle } from "react-icons/ai";

const Search = () => {
  return (
    <div className="relative flex items-center">
    <IoSearchSharp className="absolute text-2xl ml-2 "/>
    <input type="text " className="bg-transparent flex-grow border border-white pl-10 rounded-lg h-[40px] " />
    <AiFillPlusCircle className="p-1 text-[45px] cursor-pointer"/>
     </div>
   
  )
}

export default Search