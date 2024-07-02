import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Flex,
    IconButton,
    Link,
    HStack,
    useDisclosure,
    VStack,
    Stack,
    MenuButton,
    Menu,
    Avatar,
    MenuItem,
    MenuDivider,
    MenuList,
    useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'
import { auth, database } from './fireBaseConfig.js'
import { setDoc, doc, getDoc } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import { Link as RouterLink } from 'react-router-dom'
import { HamburgerIcon, CloseIcon, SearchIcon, ChevronDownIcon } from '@chakra-ui/icons';
import ProfileModal from './ProfileModal';
import { useAuth } from './Context/AuthContext'

const Navbar = ({ onSidebarToggle }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    //const [userDetails, setuserDetails] = useState(null)
    const [loading, setLoading] = useState(false)

    const { userDetails } = useAuth();

    const Navigate = useNavigate()
    const Notify = useToast()

    /*const FetchUserData = async () => {
        onAuthStateChanged(async (user) => {
            console.log(user.data);
            const docRef = doc(database, "Users", user.uid)
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                setuserDetails(docSnap.data())
                console.log(docSnap.data())
            } else {
                console.log('User not Found')
            }
        })
    }

    useEffect(() => {
        FetchUserData()
    }, [])*/

    const logoutHandler = async () => {
        setLoading(true)
        try {
            await auth.signOut()
            Notify({
                title: 'Log Out succesful',
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: 'top-right'
            })
            setLoading(false)
            Navigate('/')

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Box bg="gray.800" px={4} width="100%" zIndex="1" color='white'>
            <Flex h={16} alignItems="center" justifyContent="space-between">
                <HStack spacing={8} alignItems="center">
                    <IconButton
                        size="md"
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label="Toggle Menu"
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <Box color="white" fontSize='x-large' fontStyle='italic' fontWeight="bold" display={{ base: 'block', md: 'block' }}>Muzeek</Box>
                </HStack>
                <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
                    <RouterLink px={2} py={1} to='/Dashboard' rounded={'md'} _hover={{ textDecoration: 'none', bg: 'gray.700' }} bg='white' color="white" >
                        Dashboard
          </RouterLink>
                    <RouterLink px={2} py={1} to='/Songs' rounded={'md'} _hover={{ textDecoration: 'none', bg: 'gray.700' }} bg='white' color="white" >
                        Songs
          </RouterLink>
                </HStack>
                <Box display={{ base: 'block', md: 'block' }} ml={4} color='black'>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            <Avatar size={'sm'} cursor='pointer' name={userDetails.name} src={userDetails.profilePic} />
                        </MenuButton>
                        <MenuList>
                            <ProfileModal name={userDetails.name} email={userDetails.email}
                                category={userDetails.userCategory} profilePic={userDetails.profilePic}>
                                <MenuItem>My Profile</MenuItem>
                            </ProfileModal>
                            <MenuDivider />
                            <MenuItem onClick={logoutHandler} isLoading={loading}>Logout</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Flex>

            {
                isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as="nav" spacing={4}>
                            <RouterLink px={2} py={1} to='/Dashboard' rounded={'md'} _hover={{ textDecoration: 'none', bg: 'gray.700' }} bg='white' color="white" >
                                Dashboard
          </RouterLink>
                            <RouterLink px={2} py={1} to='/Songs' rounded={'md'} _hover={{ textDecoration: 'none', bg: 'gray.700' }} bg='white' color="white" >
                                Songs
          </RouterLink>
                        </Stack>
                    </Box>
                ) : null
            }
        </Box >
    );
};

export default Navbar;