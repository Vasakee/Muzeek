import React, { useEffect, useState } from 'react';
import { Box, Image, VStack, HStack, Text, Link, Icon, SimpleGrid } from '@chakra-ui/react';
import { FaHeadphones } from 'react-icons/fa';
import { fetchSongs } from './fireBaseConfig';

const Topss = ({ onSongSelect }) => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const getSongs = async () => {
            const songList = await fetchSongs();
            setSongs(songList);
            console.log(onSongSelect)
        };
        getSongs();
    }, []);
    /*const songs = [
        {
            id: 60,
            title: 'Soso',
            artist: 'Omah Lay',
            image: '../assets/images/dashboard/22.png',
            listens: '8.6k',
        },
        {
            id: 61,
            title: 'Bad since 97',
            artist: 'Bnxn',
            image: '../assets/images/dashboard/23.png',
            listens: '8.2k',
        },
        {
            id: 62,
            title: 'Crazy Things',
            artist: 'Tems',
            image: '../assets/images/dashboard/24.png',
            listens: '8.0k',
        },
        {
            id: 63,
            title: 'Commas',
            artist: 'Ayra Starr',
            image: '../assets/images/dashboard/25.png',
            listens: '7.6k',
        },
        {
            id: 64,
            title: 'Kubolor',
            artist: 'Odumodublvck',
            image: '../assets/images/dashboard/26.png',
            listens: '8.1k',
        },
        {
            id: 64,
            title: 'Kubolor',
            artist: 'Odumodublvck',
            image: '../assets/images/dashboard/26.png',
            listens: '8.1k',
        },
        {
            id: 64,
            title: 'Kubolor',
            artist: 'Odumodublvck',
            image: '../assets/images/dashboard/26.png',
            listens: '8.1k',
        },
        {
            id: 64,
            title: 'Kubolor',
            artist: 'Odumodublvck',
            image: '../assets/images/dashboard/26.png',
            listens: '8.1k',
        },
        // Add more songs here
    ];*/

    return (
        <Box>
            <Box mb={5} textAlign='left'>
                <Text fontSize="xl" fontWeight="bold" textTransform="capitalize">Our Top Listening Songs</Text>
            </Box>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={5}>
                {songs.map(song => (
                    <Box key={song.uid} p={3} borderWidth="1px" borderRadius="md" onClick={() => onSongSelect(song)}>
                        <HStack spacing={4}>
                            <Image src={song.picURL} alt="list-img" boxSize="55px" borderRadius="full" />
                            <VStack align="start" spacing={0}>
                                <Link href="music-player.html" textTransform="capitalize" fontSize="lg">{song.songName}</Link>
                                <Text textTransform="capitalize" fontSize="sm">{song.songWriter}</Text>
                                <HStack>
                                    <Icon as={FaHeadphones} w={4} h={4} />
                                    <Text>{'2.6k'/*song.listens*/}</Text>
                                </HStack>
                            </VStack>
                        </HStack>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default Topss;