import { Box, Container, Flex } from '@chakra-ui/layout'
import React from 'react'
import { useDisclosure } from '@chakra-ui/hooks';
import Navbar from '../Navbar'
import Sidebar2 from '../Sidebar2'
//import TopArtists from '../TopArtists'
//import TopGenres from '../TopGenres'
import TrendingSongs from '../TrendingSongs'
import Footer from '../Footer';
import FooterCard from '../FooterCard';
import TopSongs from '../TopSongs';
import TopGenres2 from '../TopGenres2';
import TopArtist2 from '../TopArtists2';
import Topss from '../Topss';

function DashBoard({ onSongSelect, songs, setSongs }) {
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
                                <Container maxW="container.xl" overflowX='hidden' py={6} p={4} color='black'>
                                    <TopGenres2 />
                                    <TopArtist2 />
                                    <TrendingSongs onSongSelect={onSongSelect} songs={songs} setSongs={setSongs} />
                                    <TopSongs onSongSelect={onSongSelect} songs={songs} setSongs={setSongs} />
                                </Container>
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

export default DashBoard
