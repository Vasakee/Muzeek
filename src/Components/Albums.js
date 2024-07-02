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

const Albums = () => {
    const songs = [
        { id: '05', imgSrc: '../assets/images/dashboard/05.png', title: 'Boy alone', artist: 'Omah lay' },
        { id: '06', imgSrc: '../assets/images/dashboard/06.png', title: 'Sincerely Benson', artist: 'Benson' },
        { id: '07', imgSrc: '../assets/images/dashboard/07.png', title: 'Eziokwu', artist: 'Odumodublvck' },
        { id: '08', imgSrc: '../assets/images/dashboard/08.png', title: 'Shakespopi', artist: 'Shallipopi' },
        { id: '09', imgSrc: '../assets/images/dashboard/09.png', title: 'Timeless', artist: 'Davido' },
        { id: '10', imgSrc: '../assets/images/dashboard/10.png', title: 'I Told Them', artist: 'Burna Boy' },
        { id: '11', imgSrc: '../assets/images/dashboard/10.png', title: 'The year I turned 21', artist: 'Ayra Starr' },
        { id: '12', imgSrc: '../assets/images/dashboard/10.png', title: 'Born on the wild', artist: 'Tems' }
    ];

    return (
        <Container maxW="container.xl" py={4}>
            <Box className="row mb-4">
                <Box className="card-header mb-3" mb={3}>
                    <Flex className="header-title" alignItems="center" justifyContent="space-between">
                        <Heading as="h4" size="md" className="card-title text-capitalize">Albums</Heading>
                        <Link href="release.html" fontSize="sm" color="black" display="flex" alignItems="center">
                            View All
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none" ml={2}>
                                <path
                                    d="M10.9375 4V9.6875C10.9375 9.80353 10.8914 9.91481 10.8094 9.99686C10.7273 10.0789 10.616 10.125 10.5 10.125C10.384 10.125 10.2727 10.0789 10.1906 9.99686C10.1086 9.91481 10.0625 9.80353 10.0625 9.6875V5.05602L3.80953 11.3095C3.72744 11.3916 3.6161 11.4377 3.5 11.4377C3.3839 11.4377 3.27256 11.3916 3.19047 11.3095C3.10838 11.2274 3.06226 11.1161 3.06226 11C3.06226 10.8839 3.10838 10.7726 3.19047 10.6905L9.44398 4.4375H4.8125C4.69647 4.4375 4.58519 4.39141 4.50314 4.30936C4.42109 4.22731 4.375 4.11603 4.375 4C4.375 3.88397 4.42109 3.77269 4.50314 3.69064C4.58519 3.60859 4.69647 3.5625 4.8125 3.5625H10.5C10.616 3.5625 10.7273 3.60859 10.8094 3.69064C10.8914 3.77269 10.9375 3.88397 10.9375 4Z"
                                    fill="#4A525F"
                                />
                            </svg>
                        </Link>
                    </Flex>
                </Box>
            </Box>
            <SimpleGrid columns={{ base: 2, md: 4, lg: 6 }} spacing={2} className="list-unstyled mb-0">
                {songs.map((song) => (
                    <Box key={song.id} className="col">
                        <Box className="card" mb={8}>
                            <Box className="card-body">
                                <Image src={song.imgSrc} id={song.id} className="mb-3 img-fluid rounded-3" alt="song-img" />
                                <Link href="music-player.html" className=" text-capitalize line-count-1 h5 d-block">{song.title}</Link>
                                <Text fontSize="sm" className="fw-normal text-capitalize line-count-1">by {song.artist}</Text>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </SimpleGrid>
        </Container>
    );
};

export default Albums;