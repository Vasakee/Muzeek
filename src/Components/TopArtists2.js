import React, { useEffect, useState } from 'react';
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
    ListItem,
    VStack
} from '@chakra-ui/react';
import { fetchUsers } from './fireBaseConfig'

const TopArtist2 = () => {
    const [artists, setArtists] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const userList = await fetchUsers()
            const artistList = userList.filter(user => user.userCategory === 'artist');
            setArtists(artistList)
        }
        getUsers()
    }, [])

    return (
        <Container maxW="container.xl" py={4}>
            <Box className="row mb-4">
                <Box className="card-header" mb={3}>
                    <Flex className="header-title" alignItems="center" justifyContent="space-between">
                        <Heading as="h4" size="md" className="card-title text-capitalize" mb={3}>Top Artists</Heading>
                    </Flex>
                </Box>
            </Box>
            <SimpleGrid columns={{ base: 2, md: 4, lg: 4 }} spacing={2} className="list-unstyled mb-0">
                {artists.map((artist) => (
                    <Box key={artist.id} className="col">
                        <Box className="card">
                            <VStack mb={3} spacing={3} alignItems="center">
                                <Image src={artist.profilePic} id={artist.id} className="img-fluid rounded-3" borderRadius={8}
                                    objectFit='cover' boxSize={{ base: '100px', md: '150px', lg: '200px' }} alt="song-img" borderRadius={10} />
                                <Text as="a" href="music-player.html" className="text-capitalize line-count-1 h5 d-block">{artist.name}</Text>
                            </VStack>
                        </Box>
                    </Box>
                ))}
            </SimpleGrid>
        </Container>
    );
};

export default TopArtist2;