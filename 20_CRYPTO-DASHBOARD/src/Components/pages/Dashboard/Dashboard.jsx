import React from 'react'
import DashboardLayout from './DashboardLayout'
import Portfoliosection from './Portfoliosection'
import CurrentPricing from './CurrentPricing'
import Recents from './Recents'
import Loans from './Loans'
import Contacts from './Contacts'

const Dashboard = () => {
    const title = "Dashboard"
    return (
        <div className='bg-[#f3f3f7]'>
            <DashboardLayout title={title}>
                <div className='mx-[2%] md:mx-[5%] py-[3%]  flex flex-col flex-wrap gap-4 '>
                    <div className='p-[20px] bg-white w-[100%]  font-medium rounded-lg'>
                        <Portfoliosection />
                    </div>
                    <div className=' flex justify-between md:gap-0 gap-5  flex-wrap'>
                        <div className='w-full md:w-[49%] bg-white p-[15px] rounded-lg'>
                            <CurrentPricing />
                        </div>
                        <div className='w-full md:w-[49%] bg-white p-[15px] rounded-lg'>
                            <Recents />
                        </div>
                    </div>
                    <div className='flex justify-between flex-wrap'>
                        <div className='w-[49%] bg-white p-[15px] rounded-lg'>
                            <Loans />
                        </div>
                        <div className='w-[49%]  p-[15px] rounded-lg bg-purple-700'>
                            <Contacts />
                        </div>


                    </div>
                </div>
            </DashboardLayout>

        </div>
    )
}

export default Dashboard