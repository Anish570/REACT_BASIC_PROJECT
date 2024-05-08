import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
} from '@chakra-ui/react'

import React from 'react'
import SideNav from './SideNav'

const SideBarDrawer = ({ isOpen, onClose }) => {

    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}

            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    {/* <DrawerHeader>Create your account</DrawerHeader> */}

                    <DrawerBody>
                        {/* <Input placeholder='Type here...' /> */}
                        <SideNav />
                    </DrawerBody>

                    <DrawerFooter>

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default SideBarDrawer