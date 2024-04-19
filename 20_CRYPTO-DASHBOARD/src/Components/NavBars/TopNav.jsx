import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { IoChevronDownCircleOutline } from 'react-icons/io5'
import { CgProfile } from "react-icons/cg";
const TopNav = () => {
    return (
        <div className="flex w-[70%] justify-between  ">
            <div>
                <h1 className="text-[24px] font-medium">Dashboard</h1>
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