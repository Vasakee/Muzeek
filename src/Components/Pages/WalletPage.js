import { Box, Container, Flex } from '@chakra-ui/layout'
import React from 'react'
import { useDisclosure } from '@chakra-ui/hooks';
import Navbar from '../Navbar'
import Sidebar2 from '../Sidebar2'

import FooterCard from '../FooterCard';
import ConnectWallet from '../ConnectWallet';

function WalletPage() {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Flex direction='column' minHeight='100vh' >
            <Flex direction='row' flex='1'>
                <Sidebar2 isOpen={isOpen} onToggle={onToggle} />
                <Flex direction='column' flex='1' mb={8} >
                    <Navbar onSideBarToggle={onToggle} />
                    <Box flex="1" p={4} mt={{ base: 0, md: 0 }} ml={{ base: 0, md: isOpen ? '250px' : '0' }} overflowX='hidden' transition="margin-left 0.3s">
                        <Container maxW="container.xl" overflowX='hidden' py={6} p={2} color='black'>
                            <ConnectWallet />
                        </Container>
                    </Box>
                    <Box position="relative" mb={10} width="100%" >
                        <FooterCard />
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default WalletPage
