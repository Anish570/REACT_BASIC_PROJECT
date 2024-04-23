import React from 'react'
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";
import { MdOutlineArrowOutward } from "react-icons/md";
import graph from './assets/graph.jpg'

const CurrentPricing = () => {
    return (
        <div className='flex flex-col'>
            <div className='font-medium flex justify-between'>
                <div className='flex flex-wrap justify-between'>
                    <div className='flex flex-col sm:gap-1 my-[15px] sm:my-[0px]'>
                        <h2 className='text-[14px] text-gray-700'> Current Price </h2>
                        <div className='flex flex-wrap sm:gap-5 text-[24px]'>
                            <h1 className='flex items-center'>
                                Rs. 200
                                <span className=' ml-[5px] text-green-800 flex items-center text-[14px]  font-semibold '> <MdOutlineArrowOutward className='text-2xl' /> 4.0% </span></h1>
                        </div>
                    </div>
                </div>

                <div className='w-[40%] flex items-center  gap-4'>
                    <div className='flex items-center gap-2 bg-purple-800 hover:bg-purple-600 py-[5px] px-[10px] rounded-lg text-white'>
                        <BsFillPlusCircleFill />
                        Buy
                    </div>
                    <div className='flex items-center gap-2 bg-purple-800 hover:bg-purple-600 py-[5px] px-[10px] rounded-lg text-white'>
                        <AiFillMinusCircle />
                        <div>
                            Sell
                        </div>

                    </div>
                </div>
            </div>



            <div className=' w-[40%] self-end'>
                hello
            </div>
            <div className='w-full  '>
                <img src={graph} alt="" />
            </div>
            <div className=''>
                hellos
            </div>
        </div>
    )
}

export default CurrentPricing