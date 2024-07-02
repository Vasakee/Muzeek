import React from 'react';
import { Box, Container, Flex, Grid, Heading, Image, Link, Text } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icon';
import { FaPlay } from 'react-icons/fa';

const PlaylistCard = ({ imageSrc, tracks, title, description, bgColor, iconColor }) => (
    <Box bg={bgColor} position="relative" rounded="lg" p="4" mb="3" className="card-box">
        <Image src={imageSrc} alt="play-img" className="img-fluid mx-auto d-block" />
        <Flex align="center" className="play-list-icon">
            <Icon as={FaPlay} color={iconColor} boxSize="6" />
            <Text ml="2" fontWeight="semibold" textTransform="capitalize">
                {tracks} tracks
      </Text>
        </Flex>
        <Link href="music-player.html" textTransform="capitalize" fontSize="lg">
            {title}
        </Link>
        <Text fontSize="sm" className="line-count-1" textTransform="capitalize">
            {description}
        </Text>
    </Box>
);

const PlaylistByArtist = () => (
    <Container maxW="container.xl" py="6">
        <Flex direction="column" mb="5" textAlign='left'>
            <Heading as="h4" size="md" textTransform="capitalize" mb="3">
                Playlist by Artist
      </Heading>
        </Flex>
        <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap="2">
            <PlaylistCard
                imageSrc="./Anon.png"
                tracks="12"
                title="Eliana d’cruz playlist"
                description="top 12 songs from Eliana and all type of songs."
                bgColor="red.50"
                iconColor="red.500"
            />
            <PlaylistCard
                imageSrc="../assets/images/dashboard/02.png"
                tracks="18"
                title="omen smith playlist"
                description="top 18 songs from omen and mainly party song."
                bgColor="yellow.50"
                iconColor="yellow.500"
            />
            <PlaylistCard
                imageSrc="../assets/images/dashboard/03.png"
                tracks="16"
                title="Alexa Jonas"
                description="top 16 songs from Alexa and most of the relax songs."
                bgColor="blue.50"
                iconColor="blue.500"
            />
            <PlaylistCard
                imageSrc="../assets/images/dashboard/03.png"
                tracks="16"
                title="Alexa Jonas"
                description="top 16 songs from Alexa and most of the relax songs."
                bgColor="blue.50"
                iconColor="blue.500"
            />
        </Grid>
    </Container>
);

export default PlaylistByArtist;