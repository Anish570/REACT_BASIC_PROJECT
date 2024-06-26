import React from 'react'
import SideNav from '../../NavBars/SideNav'
import TopNav from '../../NavBars/TopNav'
import { useDisclosure } from '@chakra-ui/react'
import SideBarDrawer from '../../NavBars/SideBarDrawer'

const DashboardLayout = ({ title, children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <div className="flex h-full ">
                <div className="md:w-[18%]  hidden sm:hidden md:block">
                    <SideNav />
                    <SideBarDrawer isOpen={isOpen} onClose={onClose} />
                </div>
                <div className="grow  ">
                    <div className="w-[100%] flex justify-center items-center bg-white h-[10vh] md:h-[8%]">
                        <TopNav title={title} onOpen={onOpen} />
                    </div >
                    <div className="">{children}</div>
                </div>
            </div>
        </>

    )
}

export default DashboardLayout