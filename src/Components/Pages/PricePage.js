import { Box, Container, Flex, SimpleGrid } from '@chakra-ui/layout'
import React from 'react'
import Footer from '../Footer'
import FooterCard from '../FooterCard'
import Navbar from '../Navbar'
import PricingCard from '../PricingCard'
import PricingTable from '../PricingTable'
import Sidebar2 from '../Sidebar2'
import { useDisclosure } from '@chakra-ui/hooks';

function PricePage() {
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
                                <Box color='black' alignItems='center'>
                                    <Container maxW="container.xl" ml={10} >
                                        <SimpleGrid columns={{ base: 2, md: 2, lg: 4 }} spacing={10} ml={10} textAlign="center">
                                            <PricingCard
                                                title="Free"
                                                price="$0"
                                                period="/Month"
                                                features={['1 user included', '2 GB of storage', 'Email support', 'Help center access']}
                                            />
                                            <PricingCard
                                                title="Pro"
                                                price="$15"
                                                period="/Month"
                                                features={['4 users included', '8GB of storage', 'Priority Email support', 'Help center access']}
                                            />
                                            <PricingCard
                                                title="Exclusive"
                                                price="$29"
                                                period="/Month"
                                                features={['8 users included', '15 GB of storage', 'Call and email support', 'Help center access']}
                                            />
                                            <PricingCard
                                                title="Premium"
                                                price="$49"
                                                period="/Month"
                                                features={['12 users included', '25 GB of storage', '24 x 7 call support', 'Help center access']}
                                            />
                                        </SimpleGrid>
                                        <PricingTable />
                                    </Container>
                                </Box>
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

export default PricePage
