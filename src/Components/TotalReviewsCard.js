import React from 'react';
import { Box, Card, CardHeader, CardBody, Heading, Flex, Progress, Icon, Text } from '@chakra-ui/react';
import { BsMusicNoteBeamed, BsRecordCircle, BsStack, } from 'react-icons/bs';
import ReviewsCard from './ReviewsCard';

const TotalReviewsCard = () => {
    return (
        <Box width={{ lg: '33.333%', sm: '100%' }} mt={5} ml={5} mr={5} mb={10}>
            <Card>
                <CardHeader>
                    <Heading size="md" textTransform="capitalize">Total Reviews</Heading>
                </CardHeader>
                <CardBody pt={0}>
                    <Box id="chart-01" className="chart-01" mb={5}></Box>
                    <Flex alignItems="center" mb={5}>
                        <Icon as={BsMusicNoteBeamed} boxSize={6} mr={4} color="blue.500" />
                        <Box width="100%">
                            <Flex justifyContent="space-between">
                                <Text>Songs</Text>
                                <Text>5,674</Text>
                            </Flex>
                            <Progress colorScheme="blue" size="sm" value={23} transition="width 2s ease 0s" />
                        </Box>
                    </Flex>
                    <Flex alignItems="center" mb={5}>
                        <Icon as={BsRecordCircle} boxSize={8} mr={4} color="yellow.400" />
                        <Box width="100%">
                            <Flex justifyContent="space-between">
                                <Text>Albums</Text>
                                <Text>1,624</Text>
                            </Flex>
                            <Progress colorScheme="yellow" size="sm" value={23} transition="width 2s ease 0s" />
                        </Box>
                    </Flex>
                    <Flex alignItems="center">
                        <Icon as={BsStack} boxSize={8} mr={4} color="green.400" />
                        <Box width="100%">
                            <Flex justifyContent="space-between">
                                <Text>Playlist</Text>
                                <Text>5,515</Text>
                            </Flex>
                            <Progress colorScheme="green" size="sm" value={23} transition="width 2s ease 0s" />
                        </Box>
                    </Flex>
                </CardBody>
            </Card>
        </Box>
    );
};

export default TotalReviewsCard;