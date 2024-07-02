import './App.css';

import Navbar from './Components/Navbar';
import { Box, Container, Flex, Grid, GridItem, SimpleGrid } from '@chakra-ui/layout';
import { useDisclosure } from '@chakra-ui/hooks';
import AdminPage from './Components/Pages/AdminPage';
//import Navbar2 from './Components/Navbar2';
import Sidebar2 from './Components/Sidebar2';
import Deactivate from './Components/Auth/Deactivate'
import { Switch } from '@chakra-ui/switch';
import { Route, Routes } from 'react-router';
import Footer from './Components/Footer';
import PricingCard from './Components/PricingCard';
import PricingTable from './Components/PricingTable';
import FooterCard from './Components/FooterCard';
import PlaylistByArtist from './Components/PlayListByArtist';
import TrendingSongs from './Components/TrendingSongs';
//import TopGenres from './Components/TopGenres';
//import TopArtists from './Components/TopArtists';
import Albums from './Components/Albums';
import TopSongs from './Components/TopSongs';
import Billing from './Components/Billing';
import SongPage from './Components/SongPage';
import AddSong from './Components/AddSong';
import HomePage from './Components/Pages/Homepage';
import DashBoard from './Components/Pages/DashBoard';
import BillPage from './Components/Pages/BillPage';
import PricePage from './Components/Pages/PricePage';
import Releasepage from './Components/Pages/Releasepage';
import AuthPage from './Components/Pages/AuthPage';
import SingerTable from './Components/Singer';


function Overview() {
    const { isOpen, onToggle } = useDisclosure()
    return (
        <div className="Overview">
            <Box>
                <Flex direction='column' minHeight='100vh' >
                    <Flex direction='row' flex='1'>
                        <Sidebar2 isOpen={isOpen} onToggle={onToggle} />
                        <Flex direction='column' flex='1' mb={8} >
                            <Navbar onSideBarToggle={onToggle} />
                            <Box flex="1" p={4} mt={{ base: 0, md: 0 }} ml={{ base: 0, md: isOpen ? '250px' : '0' }} overflowX='hidden' transition="margin-left 0.3s">
                                {/*<Box display={{ base: 'flex', md: 'flex' }} alignItems='center' flexDir={{ base: 'column', md: 'row' }}>*/}
                                <Routes>
                                    <Route path='/' Component={HomePage} exact />
                                    <Route path='/Admin' Component={AdminPage} isOpen={isOpen} onToggle={onToggle} />
                                    <Route path='/Album' Component={Albums} />
                                    <Route path='/Deactivate' Component={Deactivate} />
                                    <Route path='/Pricing' Component={PricePage} />
                                    <Route path='/Billing' Component={BillPage} />
                                    <Route path='/Bill' Component={BillPage} isOpen={isOpen} onToggle={onToggle} />
                                    <Route path='/Dashboard' Component={DashBoard} isOpen={isOpen} onToggle={onToggle} />
                                    <Route path='/Price' Component={PricePage} isOpen={isOpen} onToggle={onToggle} />
                                    <Route path='/Release' Component={Releasepage} isOpen={isOpen} onToggle={onToggle} />
                                    <Route path='/Artist' Component={SingerTable} isOpen={isOpen} onToggle={onToggle} />
                                    <Route path='##' Component={Sidebar2} isOpen={isOpen} onToggle={onToggle} />
                                </Routes>
                            </Box>
                            <Box position="relative" mb={10} width="100%" >
                                <FooterCard />
                            </Box>
                            <Footer />
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        </div>
    );
}

export default Overview;
