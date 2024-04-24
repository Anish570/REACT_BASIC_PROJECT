import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { IoChevronDownCircleOutline } from 'react-icons/io5'
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
const TopNav = ({ title, onOpen }) => {
    return (
        <div className="flex w-[100%] md:w-[80%] justify-between px-[10px] ">
            <div className='flex items-center justify-between gap-6'>
                <GiHamburgerMenu onClick={onOpen} className='block sm:hidden text-2xl' />
                <h1 className="text-[24px] font-medium">{title}</h1>
            </div>
            <div>
                <Menu>
                    <MenuButton >
                        <CgProfile className="text-3xl" />
                        {/* <IoChevronDownCircleOutline /> */}
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Logout</MenuItem>
                        <MenuItem>Support</MenuItem>

                    </MenuList>
                </Menu>
            </div>

        </div>
    )
}

export default TopNav