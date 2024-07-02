import React from 'react';
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
import AfroBeats from './Images/AfroBeats.png'


const TopGenres2 = () => {
    const songs = [
        { id: 23, src: 'https://firebasestorage.googleapis.com/v0/b/musikk-e80a3.appspot.com/o/images%20%2FScreen%20Shot%202024-06-30%20at%201.54.29%20PM.png?alt=media&token=14766f2d-6e7b-4a84-94f3-4605746d07d3', title: 'Afrobeats', description: 'top 12 songs from travels and' },
        { id: 24, src: 'https://firebasestorage.googleapis.com/v0/b/musikk-e80a3.appspot.com/o/images%20%2FScreen%20Shot%202024-06-30%20at%207.09.19%20PM.png?alt=media&token=2026c870-6c1a-4f67-a087-93f7bfe284cf', title: 'Reggae', description: 'top 12 songs from travels and' },
        { id: 25, src: 'https://firebasestorage.googleapis.com/v0/b/musikk-e80a3.appspot.com/o/images%20%2FScreen%20Shot%202024-06-30%20at%207.12.06%20PM.png?alt=media&token=fdba52db-315b-425f-ab9e-f70ac6791e6c', title: 'Gospel', description: 'top 12 songs from travels and' },
        { id: 26, src: 'https://firebasestorage.googleapis.com/v0/b/musikk-e80a3.appspot.com/o/images%20%2FScreen%20Shot%202024-06-30%20at%207.15.42%20PM.png?alt=media&token=8b0ca82b-cbe1-41bc-a8b7-7b5fb795c65b', title: 'hip hop', description: 'top 12 songs from travels and' },
        { id: 27, src: 'https://firebasestorage.googleapis.com/v0/b/musikk-e80a3.appspot.com/o/images%20%2FScreen%20Shot%202024-07-01%20at%201.31.56%20AM.png?alt=media&token=14e5e727-caac-4326-9109-ff9ce9fa4e36', title: 'Rock', description: 'top 12 songs from travels and' },
        { id: 29, src: 'https://firebasestorage.googleapis.com/v0/b/musikk-e80a3.appspot.com/o/images%20%2FScreen%20Shot%202024-07-01%20at%201.35.15%20AM.png?alt=media&token=976ee896-4179-4a0d-9a8a-725ce5500930', title: 'Jazz', description: 'top 12 songs from travels and' }
    ];

    return (
        <Container maxW="container.xl" py={4}>
            <Box className="row mb-4">
                <Box className="card-header" mb={3}>
                    <Flex className="header-title" alignItems="center" justifyContent="space-between">
                        <Heading as="h4" size="md" className="card-title text-capitalize" mb={3}>Top Genres</Heading>
                        {/*<Link href="release.html" fontSize="sm" color="black" mb={3} display="flex" alignItems="center">
                            View All
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none" ml={2}>
                                <path
                                    d="M10.9375 4V9.6875C10.9375 9.80353 10.8914 9.91481 10.8094 9.99686C10.7273 10.0789 10.616 10.125 10.5 10.125C10.384 10.125 10.2727 10.0789 10.1906 9.99686C10.1086 9.91481 10.0625 9.80353 10.0625 9.6875V5.05602L3.80953 11.3095C3.72744 11.3916 3.6161 11.4377 3.5 11.4377C3.3839 11.4377 3.27256 11.3916 3.19047 11.3095C3.10838 11.2274 3.06226 11.1161 3.06226 11C3.06226 10.8839 3.10838 10.7726 3.19047 10.6905L9.44398 4.4375H4.8125C4.69647 4.4375 4.58519 4.39141 4.50314 4.30936C4.42109 4.22731 4.375 4.11603 4.375 4C4.375 3.88397 4.42109 3.77269 4.50314 3.69064C4.58519 3.60859 4.69647 3.5625 4.8125 3.5625H10.5C10.616 3.5625 10.7273 3.60859 10.8094 3.69064C10.8914 3.77269 10.9375 3.88397 10.9375 4Z"
                                    fill="#4A525F"
                                />
                            </svg>
                        </Link>*/}
                    </Flex>
                </Box>
            </Box>
            <SimpleGrid columns={{ base: 2, md: 4, lg: 4 }} spacing={2} className="list-unstyled mb-0">
                {songs.map((song) => (
                    <Box key={song.id} className="col">
                        <Box className="card">
                            <Box className="card-body">
                                <Image src={song.src} id={song.id} borderRadius={8} objectFit='cover'
                                    boxSize={{ base: '100px', md: '150px', lg: '200px' }} className="img" alt="song-img" />
                                <Text href="music-player.html" className=" text-capitalize line-count-1 h5 d-block">{song.title}</Text>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </SimpleGrid>
        </Container>
    );
};

export default TopGenres2;