import React from 'react'
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";
import { MdOutlineArrowOutward } from "react-icons/md";
import graph1 from './assets/graph.jpg'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex } from '@chakra-ui/react'
const CurrentPricing = () => {
    const Weeks = [
        {
            title: "1H",
        },
        {
            title: "1D",
            isActive: true,
        },
        {
            title: "1W",
        },
        {
            title: "1M",
        },
    ]
    const Paneldata = [
        {
            image: graph1,
            timestamp: ["2:12 PM", "2:24 PM", "2:36 PM", "2:48 PM", "3:00 PM"],
        },
        {
            image: graph1,
            timestamp: ["10:00 PM", "12:00 PM", "2:15 PM", "4:00 PM", "5:15 PM"]
        },
        {
            image: graph1,
            timestamp: ["Sun", "Mon", "Tue", "Wed", "Thu"]
        },
        {
            image: graph1,
            timestamp: ["Apr 19", "Apr 20", "Apr 21", "Apr 22", "Apr 23",]
        },
    ]
    return (
        <div className='flex flex-col'>
            <div className='font-medium flex justify-between'>
                <div className='flex flex-wrap justify-between'>
                    <div className='flex flex-col sm:gap-1 my-[15px] sm:my-[0px]'>
                        <h2 className='text-[14px] text-gray-700'> Current Price </h2>
                        <div className='flex flex-wrap sm:gap-5 text-[24px]'>
                            <h2 className='flex items-center text-[20px]'>
                                Rs. 200
                                <span className=' ml-[5px] text-green-800 flex items-center text-[14px]  font-semibold '> <MdOutlineArrowOutward className='text-2xl' /> 4.0% </span></h2>
                        </div>
                    </div>
                </div>

                <div className='w-[50%] flex items-center justify-end  gap-2 sm:gap-4'>
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



            <div className=''>
                {/* {
                    Weeks.map((item, index) => (
                        <button key={index} className={`${item.isActive ? "bg-white" : ""} hover:bg-white text-[12px] font-medium flex items-center justify-center rounded-lg py-[2px] px-[7px]`}>{item.title}</button>
                    ))
                } */}
                <Tabs>
                    <Flex justify="end">
                        <TabList className='bg-gray-300 rounded-lg p-[2px]'>
                            {
                                Weeks.map((item, index) => (
                                    <Tab fontSize="10px" key={index} _selected={{ color: 'black', bg: 'white' }} className={`font-medium flex items-center justify-center rounded-lg`}>{item.title}</Tab>
                                ))
                            }
                        </TabList>
                    </Flex>
                    <TabPanels>
                        {
                            Paneldata.map((item, index) => (
                                <TabPanel key={index}>
                                    <img src={item.image} className='w-full' alt="" />
                                    <div className='flex justify-around items-center  text-gray-700 text-[12px]'>
                                        {
                                            item.timestamp.map((time, idx) => (
                                                <p key={idx}>{time}</p>
                                            ))
                                        }
                                    </div>
                                </TabPanel>
                            ))
                        }

                    </TabPanels>
                </Tabs>



            </div>

        </div>
    )
}

export default CurrentPricing