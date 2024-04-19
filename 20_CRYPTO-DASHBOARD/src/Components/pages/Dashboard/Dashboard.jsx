import React from 'react'
import SideNav from '../../NavBars/SideNav'
import TopNav from '../../NavBars/TopNav'

const Dashboard = () => {
    return (
        <>
            <div className="flex ">
                <div className="sm:w-[18%] h-screen ">
                    <SideNav />
                </div>
                <div className="grow  ">
                    <div className="w-[100%] flex justify-center items-center shadow-lg h-[10%]">
                        <TopNav />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Dashboard