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

const NewRelease = () => {
    const songs = [
        { id: '01', src: '../assets/images/dashboard/17.png', title: 'Peace of mind', artist: 'Rema' },
        { id: '02', src: '../assets/images/dashboard/18.png', title: 'Hello Everybody', artist: 'Daniel' },
        { id: '03', src: '../assets/images/dashboard/19.png', title: 'Understand', artist: 'Omahlay' },
        { id: '04', src: '../assets/images/dashboard/20.png', title: 'Bad since 97', artist: 'Bnxn' },
        { id: '05', imgSrc: '../assets/images/dashboard/05.png', title: 'the girl', artist: 'snoods smith Jonas' },
        { id: '06', imgSrc: '../assets/images/dashboard/06.png', title: 'masinc party album', artist: 'kerana euc veena' },
        { id: '07', imgSrc: '../assets/images/dashboard/07.png', title: 'the silent one', artist: 'Alex Williams' },
        { id: '08', imgSrc: '../assets/images/dashboard/08.png', title: 'just perfect', artist: 'karuna truss' },
        { id: '09', imgSrc: '../assets/images/dashboard/09.png', title: 'everything i want', artist: 'Neha arena' },
        { id: '10', imgSrc: '../assets/images/dashboard/10.png', title: 'infinity', artist: 'nil ana meet nagak' },
    ];

    return (
        <Container maxW="container.xl" py={4}>
            <Box className="row mb-4">
                <Box className="card-header" mb={3}>
                    <Flex className="header-title" alignItems="center" justifyContent="space-between">
                        <Heading as="h4" size="md" className="card-title text-capitalize">Newly Released</Heading>
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

export default NewRelease;