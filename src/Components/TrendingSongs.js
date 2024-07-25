import React, { useEffect } from 'react';
import {
    Box,
    Container,
    Flex,
    SimpleGrid,
    Text,
    Image,
    Heading,
    Link,
    List,
    ListItem
} from '@chakra-ui/react';
import { fetchSongs } from './fireBaseConfig'

const TrendingSongs = ({ onSongSelect, songs, setSongs }) => {
    /*const songs = [
        { id: '05', imgSrc: '../assets/images/dashboard/05.png', title: 'the girl', artist: 'snoods smith Jonas' },
        { id: '06', imgSrc: '../assets/images/dashboard/06.png', title: 'masinc party album', artist: 'kerana euc veena' },
        { id: '07', imgSrc: '../assets/images/dashboard/07.png', title: 'the silent one', artist: 'Alex Williams' },
        { id: '08', imgSrc: '../assets/images/dashboard/08.png', title: 'just perfect', artist: 'karuna truss' },
        { id: '09', imgSrc: '../assets/images/dashboard/09.png', title: 'everything i want', artist: 'Neha arena' },
        { id: '10', imgSrc: '../assets/images/dashboard/10.png', title: 'infinity', artist: 'nil ana meet nagak' },
    ];*/

    useEffect(() => {
        const getSongs = async () => {
            const songList = await fetchSongs();
            setSongs(songList);
            console.log(onSongSelect)
        };
        getSongs();
    }, []);

    return (
        <Container maxW="container.xl" py={4}>
            <Box className="row mb-4">
                <Box className="card-header" mb={3}>
                    <Flex className="header-title" alignItems="center" justifyContent="space-between">
                        <Heading as="h4" size="md" className="card-title text-capitalize">Trending songs</Heading>
                        
                    </Flex>
                </Box>
            </Box>
            <SimpleGrid columns={{ base: 2, md: 4, lg: 6 }} spacing={2} className="list-unstyled mb-0">
                {songs.map((song) => (
                    <Box key={song.id} className="col" >
                        <Box className="card">
                            <Box className="card-body" cursor={'pointer'} onClick={() => onSongSelect(song)}>
                                <Image src={song.picURL} id={song.id} borderRadius={8} className="songImage" objectFit='cover'
                                    boxSize={{ base: '100px', md: '150px', lg: '180px' }} alt="song-img" />
                                <Link className="songName">{song.songName}</Link>
                                <Text fontSize="sm" className="fw-normal text-capitalize line-count-1">by {song.songWriter}</Text>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </SimpleGrid>
        </Container>
    );
};

export default TrendingSongs;