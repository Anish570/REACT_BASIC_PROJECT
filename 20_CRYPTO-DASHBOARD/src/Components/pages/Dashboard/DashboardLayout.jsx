import React from 'react'
import SideNav from '../../NavBars/SideNav'
import TopNav from '../../NavBars/TopNav'
import { useDisclosure } from '@chakra-ui/react'
import SideBarDrawer from '../../NavBars/SideBarDrawer'

const DashboardLayout = ({ title, children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <div className="flex ">
                <div className="sm:w-[18%] h-screen hidden sm:block">
                    <SideNav />
                    <SideBarDrawer isOpen={isOpen} onClose={onClose} />
                </div>
                <div className="grow  ">
                    <div className="w-[100%] flex justify-center items-center bg-white h-[10vh] sm:h-[10%]">
                        <TopNav title={title} onOpen={onOpen} />
                    </div >
                    <div className="">{children}</div>
                </div>
            </div>
        </>

    )
}

export default DashboardLayout