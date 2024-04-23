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
                <div className='mx-[5%] py-[3%]  flex flex-col gap-4 '>
                    <div className='p-[20px] bg-white w-[100%]  font-medium rounded-lg'>
                        <Portfoliosection />
                    </div>
                    <div className='flex justify-between'>
                        <div className='w-[49%] bg-white p-[15px] rounded-lg'>
                            <CurrentPricing />
                        </div>
                        <div className='w-[49%] bg-white rounded-lg'>
                            <Recents />
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='w-[49%] bg-white p-[15px] rounded-lg'>
                            <Loans />
                        </div>
                        <div className='w-[49%] bg-white p-[15px] rounded-lg'>
                            <Contacts />
                        </div>


                    </div>
                </div>
            </DashboardLayout>

        </div>
    )
}

export default Dashboard