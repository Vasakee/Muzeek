import { ViewIcon } from '@chakra-ui/icons'
import {
    IconButton, useDisclosure, Modal, ModalContent, ModalHeader,
    ModalCloseButton, ModalBody, ModalFooter, Text, Button, ModalOverlay, Image,
    Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, useBreakpointValue
} from '@chakra-ui/react'
import React from 'react'
import AddSong from './AddSong'


const ProfileModal = ({ name, email, category, children, profilePic }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen: isDrawerOpen,
        onOpen: onDrawerOpen,
        onClose: onDrawerClose
    } = useDisclosure()
    const modalSize = useBreakpointValue({ base: 'xs', md: 'lg' });

    return (
        <>
            {children ? (
                <span onClick={onOpen}>
                    {children}
                </span>) : (
                <IconButton display={{ base: 'flex' }}
                    icon={<ViewIcon />} onClick={onOpen} />
            )
            }
            <Modal isCentered size={modalSize} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader display={'flex'} fontFamily='heading' justifyContent={'center'} fontSize='40px'>
                        {name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody display={'flex'} flexDirection='column' alignItems={'center'} justifyContent='space-between'>
                        <Image src={profilePic} alt={name} borderRadius='full' boxSize='150px' />
                        <Text fontSize={{ base: '28px', md: '30px' }} fontFamily='serif'>
                            <b>Email:</b> {email}
                        </Text>
                        <Text fontSize={{ base: '28px', md: '30px' }} fontFamily='serif'>
                            <b>Category:</b> {category}
                        </Text>
                        {category.toLowerCase() === 'artist' && (
                            <Button
                                mt={4}
                                colorScheme='teal'
                                onClick={onDrawerOpen}
                            >
                                Add Song
                            </Button>
                        )}
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose} bg='blue.500'>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Drawer placement='right' onClose={onDrawerClose} isOpen={isDrawerOpen} >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader >Upload Music</DrawerHeader>
                    <DrawerBody>
                        <AddSong />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default ProfileModal