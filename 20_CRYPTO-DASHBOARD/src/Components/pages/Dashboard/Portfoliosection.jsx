import React from 'react'
import { GoInfo } from "react-icons/go";
import { HiDownload } from "react-icons/hi";
import { HiUpload } from "react-icons/hi";
const Portfoliosection = () => {
    return (
        <div className='p-[24px] bg-white  font-medium flex flex-wrap justify-between '>
            <div className='flex flex-wrap sm:gap-[13%] w-[70%]'>
                <div className='flex  flex-col sm:gap-2'>
                    <div className='flex items-center gap-1 text-gray-700 text-[14px]'>
                        <h2>Total Portfolio Value </h2>
                        <GoInfo />
                    </div>
                    <div className='text-[24px]'>
                        Rs.2,00,034
                    </div>
                </div>
                <div className='flex flex-col sm:gap-2 my-[15px] sm:my-[0px]'>
                    <h2 className='text-[14px] text-gray-700'> Wallet Balances </h2>
                    <div className='flex flex-wrap sm:gap-4 text-[24px]'>
                        <h1 className='flex gap-3 items-center'> Rs.2,00,034
                            <span className='bg-gray-400 text-gray-500 rounded-lg text-[14px] px-[8px] py-[2px] font-light '>btc</span></h1>
                        <h1 className='flex gap-3 items-center'> Rs.2,00,034
                            <span className='bg-gray-400 text-gray-500 rounded-lg text-[14px] px-[8px] py-[2px] font-light '>npr</span></h1>
                    </div>
                </div>
            </div>

            <div className='flex items-center flex-wrap gap-4'>
                <div className='flex items-center gap-2 bg-purple-700 py-[5px] px-[10px] rounded-lg text-white'>
                    <HiDownload />
                    Deposit
                </div>
                <div className='flex items-center gap-2 bg-purple-700 py-[5px] px-[10px] rounded-lg text-white'>
                    <HiUpload />
                    Withdraw
                </div>
            </div>
        </div>
    )
}

export default Portfoliosection