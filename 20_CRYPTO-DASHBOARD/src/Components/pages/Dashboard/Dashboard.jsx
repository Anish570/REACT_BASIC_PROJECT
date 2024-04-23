import React from 'react'
import DashboardLayout from './DashboardLayout'
import Portfoliosection from './Portfoliosection'
import CurrentPricing from './CurrentPricing'

const Dashboard = () => {
    const title = "Dashboard"
    return (
        <div className='bg-[#f3f3f7]'>
            <DashboardLayout title={title}>
                <div className='m-[5%] '>
                    <Portfoliosection />
                    <CurrentPricing />
                </div>
            </DashboardLayout>

        </div>
    )
}

export default Dashboard