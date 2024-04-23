import React from 'react'
import { BsFillInfoCircleFill } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { HiUpload } from "react-icons/hi";
import Cryptogif from './assets/icons8-crypto.gif'
import Cryptoimg from './assets/icons8-crypto-256.png'

const Portfoliosection = () => {
    return (
        <div className=' flex flex-wrap justify-between '>
            <div className='flex flex-wrap sm:gap-[13%] w-[70%]'>
                <div className='flex  flex-col sm:gap-2'>
                    <div className='flex items-center gap-1 text-gray-700 text-[14px]'>
                        <h2>Total Portfolio Value </h2>
                        <BsFillInfoCircleFill />
                    </div>
                    <div className='text-[24px]'>
                        Rs.2,00,034
                    </div>
                </div>
                <div className='flex flex-col sm:gap-2 my-[15px] sm:my-[0px]'>
                    <h2 className='text-[14px] text-gray-700'> Wallet Balances </h2>
                    <div className='flex flex-wrap sm:gap-5 text-[24px]'>
                        <h1 className='flex items-center'>
                            <span >
                                {/* <img className='w-[30px]' src={Cryptogif} alt="" /> */}
                                <img className='w-[30px]' src={Cryptoimg} alt="" />
                            </span>
                            200
                            <span className='bg-gray-400 ml-[10px] text-gray-500 rounded-lg text-[14px] px-[8px] py-[2px] font-light '>btc</span></h1>
                        <h1 className='flex gap-2 items-center'> Rs.2,00,034
                            <span className='bg-gray-400 text-gray-500 rounded-lg text-[14px] px-[8px] py-[2px] font-light '>npr</span></h1>
                    </div>
                </div>
            </div>

            <div className='w-[30%] flex items-center flex-wrap gap-4'>
                <div className='flex items-center gap-2 bg-purple-800 hover:bg-purple-600 py-[5px] px-[10px] rounded-lg text-white'>
                    <HiDownload />
                    Deposit
                </div>
                <div className='flex items-center gap-2 bg-purple-800 hover:bg-purple-600 py-[5px] px-[10px] rounded-lg text-white'>
                    <HiUpload />
                    <div>
                        Withdraw
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Portfoliosection