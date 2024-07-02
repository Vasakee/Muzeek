import { Box, Flex } from '@chakra-ui/layout'
import React from 'react'
import Navbar from '../Navbar'
import Sidebar2 from '../Sidebar2'
import Footer from '../Footer';
import { useDisclosure } from '@chakra-ui/hooks';
import FooterCard from '../FooterCard';
import SingerTable from '../Singer';

function ArtistPage
    () {
    const { isOpen, onToggle } = useDisclosure()
    return (
        <div>
            <Flex direction='column' minHeight='100vh'  >
                <Flex direction='row' flex='1'>
                    <Sidebar2 isOpen={isOpen} onToggle={onToggle} />
                    <Flex direction='column' flex='1' mb={8} >
                        <Navbar onSideBarToggle={onToggle} />
                        <Box alignItems='center' flex="1" p={4} mt={{ base: 0, md: 0 }} ml={{ base: 0, md: isOpen ? '250px' : '0' }} overflowX='hidden' transition="margin-left 0.3s">
                            <Box>
                                <SingerTable />
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

export default ArtistPage;

