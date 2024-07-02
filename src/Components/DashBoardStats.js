import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid, Stat, StatLabel, StatNumber, Icon, chakra } from '@chakra-ui/react';
import { FaMusic, FaCompactDisc, FaChartLine, FaUsers, FaMicrophone, FaHeadphones } from 'react-icons/fa';
import TotalReviewsCard from './TotalReviewsCard';
import { getTotalSongs, getTotalUsers, getTotalListeners, getTotalArtists, getTotalPlayCount } from './fireBaseConfig'

const DashboardStats = () => {
    const [totalSongs, setTotalSongs] = useState(0)
    const [totalUsers, setTotalUsers] = useState(0)
    const [totalListeners, setTotalListeners] = useState(0);
    const [totalArtists, setTotalArtists] = useState(0);
    const [totalPlayCount, setTotalPlayCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const [songs, users, listeners, artists, playCount] = await Promise.all([
                    getTotalSongs(),
                    getTotalUsers(),
                    getTotalListeners(),
                    getTotalArtists(),
                    getTotalPlayCount()
                ]);
                setTotalSongs(songs);
                setTotalUsers(users);
                setTotalListeners(listeners);
                setTotalArtists(artists);
                setTotalPlayCount(playCount)
            } catch (err) {
                setError(err.message);
                console.log(err.message)
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    return (
        <SimpleGrid columns={{ base: 2, md: 3, lg: 5 }} spacing={10} mb={8}>
            <Box
                bg="red.50"
                p={4}
                borderRadius="lg"
                textAlign="center"
                boxShadow="md"
            >
                <Icon as={FaMicrophone} boxSize={8} color="red.500" />
                <Stat mt={4}>
                    <StatNumber>{totalArtists}</StatNumber>
                    <StatLabel> Total Music Artists</StatLabel>
                </Stat>
            </Box>
            <Box
                bg="yellow.50"
                p={4}
                borderRadius="lg"
                textAlign="center"
                boxShadow="md"
            >
                <Icon as={FaHeadphones} boxSize={8} color="yellow.500" />
                <Stat mt={4}>
                    <StatNumber>{totalListeners}</StatNumber>
                    <StatLabel> Total Music Listeners</StatLabel>
                </Stat>
            </Box>
            <Box
                bg="blue.50"
                p={4}
                borderRadius="lg"
                textAlign="center"
                boxShadow="md"
            >
                <Icon as={FaMusic} boxSize={8} color="blue.500" />
                <Stat mt={4}>
                    <StatNumber>{totalSongs}</StatNumber>
                    <StatLabel>Total Songs</StatLabel>
                </Stat>
            </Box>
            <Box
                bg="green.50"
                p={4}
                borderRadius="lg"
                textAlign="center"
                boxShadow="md"
            >
                <Icon as={FaChartLine} boxSize={8} color="green.500" />
                <Stat mt={4}>
                    <StatNumber>{totalPlayCount}</StatNumber>
                    <StatLabel>Total Streams</StatLabel>
                </Stat>
            </Box>
            <Box
                bg="green.50"
                p={4}
                borderRadius="lg"
                textAlign="center"
                boxShadow="md"
            >
                <Icon as={FaUsers} boxSize={8} color="purple.500" />
                <Stat mt={4}>
                    <StatNumber>{totalUsers}</StatNumber>
                    <StatLabel>Total Users</StatLabel>
                </Stat>
            </Box>
        </SimpleGrid>
    );
};

export default DashboardStats;