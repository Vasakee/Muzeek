import { Box, Flex } from '@chakra-ui/layout'
import React from 'react'
import Navbar from '../Navbar'
import Sidebar2 from '../Sidebar2'
import Footer from '../Footer';
import { useDisclosure } from '@chakra-ui/hooks';
import FooterCard from '../FooterCard';
import DashboardStats from '../DashBoardStats';
import TotalReviewsCard from '../TotalReviewsCard';
import ReviewsCard from '../ReviewsCard';

function AdminPage
    () {
    const { isOpen, onToggle } = useDisclosure()
    return (
        <div>
            <Flex direction='column' minHeight='100vh' >
                <Flex direction='row' flex='1'>
                    <Sidebar2 isOpen={isOpen} onToggle={onToggle} />
                    <Flex direction='column' flex='1' mb={8} >
                        <Navbar onSideBarToggle={onToggle} />
                        <Box flex="1" p={4} mt={{ base: 0, md: 0 }} ml={{ base: 0, md: isOpen ? '250px' : '0' }} overflowX='hidden' transition="margin-left 0.3s">
                            <Box display={{ base: 'flex', md: 'flex' }} alignItems='center' flexDir={{ base: 'column', md: 'row' }}>
                                <ReviewsCard />
                                <TotalReviewsCard />
                            </Box>
                            <Box position="relative" mb={10} width="100%" >
                                <FooterCard />
                            </Box>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
        </div>

    )
}

export default AdminPage

