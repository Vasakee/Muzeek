import React, { useState } from 'react';
import {
    Box,
    Flex,
    IconButton,
    Collapse,
    useDisclosure,
    VStack,
    Tooltip,
    Icon,
    Text,
    Link,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom'
import { ChevronDownIcon, ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import { FiHome, FiUser, FiCreditCard, FiCircle, FiUnlock } from 'react-icons/fi';

const Sidebar2 = ({ isOpen, onToggle }) => {
    //const { isOpen: homeOpen, onToggle: toggleHome } = useDisclosure();
    // const { isOpen: adminOpen, onToggle: toggleAdmin } = useDisclosure();
    // const { isOpen: transactionsOpen, onToggle: toggleTransactions } = useDisclosure();

    const [OpenSection, setOpenSection] = useState(null)

    const toggleSection = (section) => {
        if (OpenSection === section) {
            setOpenSection(null)
        } else {
            setOpenSection(section)
        }
    }

    return (
        <Flex position='relative'>
            <IconButton
                aria-label="Toggle Sidebar"
                icon={isOpen ? <ChevronLeftIcon color={'white'} mr={10} /> : <ChevronRightIcon color={'white'} mr={10} />}
                onClick={onToggle}
                position='absolute'
                bg='black'
                top='4'
                left='4'
                zIndex='1'
                display={{ md: 'block', lg: 'Block' }}
                mb={4}
            />
            <Box
                as="aside"
                width={{ base: isOpen ? '60vw' : '0', md: isOpen ? '180px' : '0' }}
                display={{ md: 'Block', lg: 'Block' }}
                bg="gray.100"
                p={4}
                height="100%"
                overflowX="hidden"
                overflowY='auto'
                transition="width 0.3s"
                position="relative"
            >
                <Box mt={12} >
                    <Flex align='center' onClick={() => toggleSection('home')} cursor='pointer'>
                        <Tooltip label='Home' aria-label='Home tooltip'>
                            {<Icon as={FiHome} mr='2' />}
                        </Tooltip>
                        Home
                        {OpenSection === 'home' ? <ChevronDownIcon ml='auto' /> : <ChevronRightIcon ml='auto' />}
                    </Flex>
                    <Collapse in={OpenSection === 'home'} >
                        <VStack align="start" pl="6" mt="2" spacing="2">
                            <Flex align="center">
                                {<Icon as={FiCircle} mr="2" />}
                                <RouterLink color="blue.500" to='/Dashboard'>Dashboard</RouterLink>
                            </Flex>
                            <Flex align="center">
                                {<Icon as={FiCircle} mr="2" />}
                                <RouterLink color="blue.500" to='/Songs'>Songs</RouterLink>
                            </Flex>
                        </VStack>
                    </Collapse>
                </Box>
                <Box mt='4'>
                    <Flex align='center' onClick={() => toggleSection('admin')} cursor='pointer'>
                        <Tooltip label='Admin' aria-label='Admin tooltip'>
                            <Icon as={FiUser} mr='2' />
                        </Tooltip>
                        Admin
                      {OpenSection === 'admin' ? <ChevronDownIcon ml='auto' /> : <ChevronRightIcon ml='auto' />}
                    </Flex>
                    <Collapse in={OpenSection === 'admin'} >
                        <VStack align="start" pl="6" mt="2" spacing="2">
                            <Flex align="center">
                                {<Icon as={FiCircle} mr="2" />}
                                <RouterLink color="blue.500" to='/Artist'>Artist</RouterLink>
                            </Flex>
                            <Flex align="center">
                                {<Icon as={FiCircle} mr="2" />}
                                <RouterLink color="blue.500" to='/Overview'>Overview</RouterLink>
                            </Flex>
                        </VStack>
                    </Collapse>
                </Box>
                <Box mt="4">
                    <Flex align='center' onClick={() => toggleSection('transactions')} cursor='pointer'>
                        <Tooltip label='Transactions' aria-label='Transactions tooltip'>
                            <Icon as={FiCreditCard} mr='2' />
                        </Tooltip>
                        Transactions
                      {OpenSection === 'transactions' ? <ChevronDownIcon ml='auto' /> : <ChevronRightIcon ml='auto' />}
                    </Flex>
                    <Collapse in={OpenSection === 'transactions'} >
                        <VStack align="start" pl="6" mt="2" spacing="2">
                            <Flex align="center">
                                {<Icon as={FiCircle} mr="2" />}
                                <RouterLink color="blue.500" to='/Pricing'>Pricing</RouterLink>
                            </Flex>
                            <Flex align="center">
                                {<Icon as={FiCircle} mr="2" />}
                                <RouterLink color="blue.500" to='/ConnectWallet'>Connect Wallet</RouterLink>
                            </Flex>
                        </VStack>
                    </Collapse>
                </Box>
                <Box mt='4'>
                    <Flex align='center' onClick={() => toggleSection('auth')} cursor='pointer'>
                        <Tooltip label='Authentication' aria-label='Authentication tooltip'>
                            <Icon as={FiUnlock} mr='2' />
                        </Tooltip>
                        Auth
                        {OpenSection === 'auth' ? <ChevronDownIcon ml='auto' /> : <ChevronRightIcon ml='auto' />}
                    </Flex>
                    <Collapse in={OpenSection === 'auth'} >
                        <VStack align="start" pl="6" mt="2" spacing="2">
                            <Flex align="center">
                                {<Icon as={FiCircle} mr="2" />}
                                <RouterLink color="blue.500" to='/Deactivate'>Deactivate</RouterLink>
                            </Flex>
                        </VStack>
                    </Collapse>
                </Box>
            </Box>
        </Flex>
    );
};

export default Sidebar2;
