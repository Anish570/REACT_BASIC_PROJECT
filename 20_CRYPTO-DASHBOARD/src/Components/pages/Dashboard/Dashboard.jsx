import React from 'react'
import DashboardLayout from './DashboardLayout'
import Portfoliosection from './Portfoliosection'

const Dashboard = () => {
    const title = "Dashboard"
    return (
        <div className='bg-[#f3f3f7]'>
            <DashboardLayout title={title}>
                <div className='m-[5%] '>
                    <Portfoliosection />
                </div>
            </DashboardLayout>

        </div>
    )
}

export default Dashboard