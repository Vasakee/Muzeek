import React, { useState, useEffect } from 'react';
import { Box, Image, VStack, HStack, Text, Link, Icon, SimpleGrid } from '@chakra-ui/react';
import { FaHeadphones } from 'react-icons/fa';
import { fetchSongs } from './fireBaseConfig'; // Make sure this function fetches songs correctly from Firebase

const TopSongs = ({ onSongSelect, songs, setSongs }) => {
    //const [songs, setSongs] = useState([]);

    useEffect(() => {
        const getSongs = async () => {
            const songList = await fetchSongs();
            setSongs(songList);
            console.log(onSongSelect)
        };
        getSongs();
    }, []);

    return (
        <Box>
            <Box mb={5} textAlign='left'>
                <Text fontSize="xl" fontWeight="bold" textTransform="capitalize">Our Top Listening Songs</Text>
            </Box>
            <SimpleGrid columns={{ base: 2, md: 2, lg: 4 }} spacing={5}>
                {songs.map(song => (
                    <Box key={song.id} borderWidth="1px" borderRadius="md" cursor={'pointer'} onClick={() => onSongSelect(song)}>
                        <HStack spacing={4}>
                            <Image src={song.picURL} alt="list-img" boxSize="55px" borderRadius="full" />
                            <VStack align="start" spacing={0}>
                                <Link textTransform="capitalize" fontSize="lg">{song.songName}</Link>
                                <Text textTransform="capitalize" fontSize="sm">{song.songWriter}</Text>
                                <HStack>
                                    <Icon as={FaHeadphones} w={4} h={4} />
                                    <Text>{song.listens}</Text>
                                </HStack>
                            </VStack>
                        </HStack>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default TopSongs;