
import React, { useState } from 'react';
import { Box, useDisclosure } from '@chakra-ui/react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Footer from './Components/Footer';
import TopSongs from './Components/TopSongs';
import HomePage from './Components/Pages/Homepage';
import AdminPage from './Components/Pages/AdminPage';
import SongPage from './Components/Pages/SongPage';
import AuthPage from './Components/Pages/AuthPage';
import PricePage from './Components/Pages/PricePage';
import BillPage from './Components/Pages/BillPage';
import Releasepage from './Components/Pages/Releasepage';
import ArtistPage from './Components/Pages/ArtistPage';
import DeactivatePage from './Components/Pages/DeactivatePage';
import DashBoard from './Components/Pages/DashBoard';
import WalletPage from './Components/Pages/WalletPage'
import { AuthProvider } from './Components/Context/AuthContext';
import Song from './Components/Song';
import Albums from './Components/Albums';
import SingerTable from './Components/Singer';

function App() {
  const { isOpen, onToggle } = useDisclosure()
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songs, setSongs] = useState([]);
  const location = useLocation()

  const onSongSelect = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
    console.log('song about to play')
  };

  const togglePlayPause = () => {
    if(!currentSong) return;
    setIsPlaying(!isPlaying);
  };


  return (
    <div className="App">
      <AuthProvider>
        <Box>
          <Routes>
            <Route path='/' element={<HomePage />} exact />
            <Route path='/Admin' element={<AdminPage />} />
            <Route path='/Songs' element={<SongPage onSongSelect={onSongSelect} songs={songs} setSongs={setSongs} />} />
            <Route path='/AuthPage' element={<AuthPage />} />
            <Route path='/Pricing' element={<PricePage />} />
            <Route path='/ConnectWallet' element={<WalletPage />} />
            <Route path='/Artist' element={<ArtistPage />} />
            <Route path='/Deactivate' element={<DeactivatePage />} />
            <Route path='/Overview' element={<Releasepage />} onSongSelect={onSongSelect} songs={songs} setSongs={setSongs} />
            <Route path='/Dashboard' element={< DashBoard onSongSelect={onSongSelect} songs={songs} setSongs={setSongs} />} />
            <Route path='/TopSongs' element={<TopSongs />} />
            <Route path='/Sing' element={<Song />} />
            <Route path='/Album' element={<Albums />} />
            <Route path='/Singertable' element={<SingerTable />} />
          </Routes>
        </Box>
        {location.pathname !== '/' && (
          <Footer
            currentSong={currentSong}
            isPlaying={isPlaying}
            togglePlayPause={togglePlayPause}
            setIsPlaying={setIsPlaying}
            songs={songs}
            setSongs={setSongs}
            setCurrentSong={setCurrentSong}
          />
        )}
      </AuthProvider>
    </div>
  );
}

export default App;

