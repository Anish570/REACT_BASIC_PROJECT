import React from 'react'
import { HiCurrencyRupee } from "react-icons/hi";
const Recents = () => {
    const RecentTrans = [
        {
            icon: <HiCurrencyRupee className='w-[25px] h-[25px]' />,
            title: "NPR WITHDRAW",
            time: "2024-04-24 7:00 PM",
            amount: "- Rs. 20,000.13"
        },
        {
            icon: <HiCurrencyRupee className='w-[25px] h-[25px]' />,
            title: "BTC SELL",
            time: "2024-04-24 7:00 PM",
            amount: "- 200"
        },
        {
            icon: <HiCurrencyRupee className='w-[25px] h-[25px]' />,
            title: "NPR DEPOSIT",
            time: "2024-04-24 7:00 PM",
            amount: "+ Rs. 20,000.13"
        },

    ]
    return (
        <div className='w-full'>
            <h2 className='text-[14px] text-gray-700'>Recent Transactions</h2>
            <div>
                {
                    RecentTrans.map((item, index) => (
                        <div key={index} className='flex gap-2 sm:gap-4 items-center pt-[5px] sm:p-[5px]  '>
                            <div className='flex items-center justify-center rounded-full w-[35px] h-[35px] bg-gray-200'>

                                {item.icon}

                            </div>
                            <div className='flex flex-grow justify-between items-center pb-[7px] border-[0px] border-b-[0.2px] border-gray-700 '>
                                <div>
                                    <h2 className='font-medium text-[15px]'>{item.title}</h2>
                                    <p className='text-gray-500 text-[12px] font-[500px] '>{item.time}</p>
                                </div>
                                <div>
                                    <h2 className='font-medium text-[15px]'>{item.amount}</h2>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='mt-[10px] sm-mt-[0] flex items-center bg-slate-300 justify-center rounded-lg font-semibold'>
                <button className='py-[5px] '>View All</button>
            </div>
        </div>
    )
}

export default Recents