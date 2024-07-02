import React, { useEffect, useState } from 'react'
import { Box, Card, CardHeader, CardBody, Heading, Image, Text, Flex, Avatar, Stack, StackDivider, useBreakpointValue } from '@chakra-ui/react';
import { getAllReviewsWithSongs } from './fireBaseConfig'

function ReviewsCard() {
    const [reviews, setReviews] = useState([]);
    const cardSize = useBreakpointValue({ base: 'sm', md: 'lg', lg: 'xl' })



    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const fetchedReviews = await getAllReviewsWithSongs();
                setReviews(fetchedReviews);
            } catch (error) {
                console.error("Error fetching reviews: ", error);
            }
        };

        fetchReviews();
    }, []);

    return (
        <div>
            <Box className="reviews" size={{ lg: 'lg', md: 'md', base: 'sm' }} width={500} mb={10} >
                <Card>
                    <CardHeader size={cardSize} >
                        <Heading as="h4" size="md" textTransform="capitalize">Listeners' feedback</Heading>
                    </CardHeader>
                    <CardBody>
                        {/*<Stack divider={<StackDivider />} spacing='4' >*/}
                        <Box>
                            {reviews.length > 0 ? (
                                reviews.map(review => (
                                    <Box key={review.id} mb={4}>
                                        <Flex>
                                            {/*<Avatar src={review.imgSrc} id={review.id} name={review.userName} size="lg" mr={4} />*/}
                                            <Box shadow='md' borderRadius={5}>
                                                <Text textTransform="capitalize" mb={2} mr={10} ml={10}>{review.reviews}</Text>
                                                <Flex align="center" justify="space-between" wrap="wrap" mr={10} ml={10}>
                                                    <Text fontWeight={'bold'} textTransform="capitalize">{review.songName} by {review.songWriter}</Text>
                                                    {/*<Text textTransform="capitalize">{review.time}</Text>*/}
                                                </Flex>
                                            </Box>
                                        </Flex>
                                    </Box>
                                ))
                            ) : (
                                <Box>
                                    No reviews Available
                                </Box>
                            )}
                            <StackDivider />
                        </Box>
                        {/*</Stack>*/}
                    </CardBody>
                </Card>
            </Box>
        </div >
    )
}

export default ReviewsCard
