import React from 'react'
import { HiCurrencyRupee } from "react-icons/hi";
const Recents = () => {
    return (
        <div className='w-full'>
            <h2 className='text-[14px] text-gray-700'>Recent Transactions</h2>
            <div className='flex gap-2 sm:gap-4 items-center pt-[5px] sm:p-[10px]  '>
                <div className='flex items-center justify-center rounded-full w-[40px] h-[40px] bg-gray-200'>
                    <HiCurrencyRupee className='w-[25px] h-[25px] ' />
                </div>
                <div className='flex flex-grow justify-between items-center pb-[10px] border-[0px] border-b-[0.2px] border-gray-700 '>
                    <div>
                        <h2 className='font-semibold'>INR DEPOSIT</h2>
                        <p className='text-gray-500 text-[12px] font-[500px] '>2024-04-23 7:06 PM</p>
                    </div>
                    <div>
                        <h2 className='font-semibold '>+Rs.20,000.10</h2>
                    </div>
                </div>
            </div>
            <div className='flex gap-2 sm:gap-4 items-center pt-[5px] sm:p-[10px]  '>
                <div className='flex items-center justify-center rounded-full w-[40px] h-[40px] bg-gray-200'>
                    <HiCurrencyRupee className='w-[25px] h-[25px] ' />
                </div>
                <div className='flex flex-grow justify-between items-center pb-[10px] border-[0px] border-b-[0.2px] border-gray-700 '>
                    <div>
                        <h2 className='font-semibold'>INR DEPOSIT</h2>
                        <p className='text-gray-500 text-[12px] font-[500px] '>2024-04-23 7:06 PM</p>
                    </div>
                    <div>
                        <h2 className='font-semibold '>+Rs.20,000.10</h2>
                    </div>
                </div>
            </div>
            <div className='flex gap-2 sm:gap-4 items-center pt-[5px] sm:p-[10px]  '>
                <div className='flex items-center justify-center rounded-full w-[40px] h-[40px] bg-gray-200'>
                    <HiCurrencyRupee className='w-[25px] h-[25px] ' />
                </div>
                <div className='flex flex-grow justify-between items-center pb-[10px] border-[0px] border-b-[0.2px] border-gray-700 '>
                    <div>
                        <h2 className='font-semibold'>INR DEPOSIT</h2>
                        <p className='text-gray-500 text-[12px] font-[500px] '>2024-04-23 7:06 PM</p>
                    </div>
                    <div>
                        <h2 className='font-semibold '>+Rs.20,000.10</h2>
                    </div>
                </div>
            </div>
            <div className='mt-[10px] sm-mt-[0] flex items-center bg-slate-300 justify-center rounded-lg font-semibold'>
                <button className='py-[5px] '>View All</button>
            </div>
        </div>
    )
}

export default Recents