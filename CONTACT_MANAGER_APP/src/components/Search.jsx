import React from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { AiFillPlusCircle } from "react-icons/ai";


const Search = ({ onOpen, filter }) => {
  const handleInputChange = (e) => {
    const value = e.target.value;
    filter(value);
  };

  return (
    <div className="relative flex items-center mb-2">
      <IoSearchSharp className="absolute text-2xl ml-2" />
      <input onChange={handleInputChange} type="text" placeholder='Search Contact' className="bg-transparent flex-grow border border-white pl-10 rounded-lg h-[40px]" />
      <AiFillPlusCircle onClick={onOpen} className="p-1 text-[45px] cursor-pointer" />
    </div>
  );
}

export default Search;
