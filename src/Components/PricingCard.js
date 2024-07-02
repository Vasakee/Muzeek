import React from 'react';
import { Box, Heading, Button, VStack, Text } from '@chakra-ui/react';

const PricingCard = ({ title, price, period, features }) => {
    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" mb={3} ml={10}>
            <Box bg="gray.100" p={4}>
                <Heading as="h4" size="md" mb={3}>{title}</Heading>
                <Heading as="h1" size="xl" mb={3}>
                    <b>{price}</b>
                    <br />
                    {period}
                </Heading>
                <Button colorScheme="blue" mb={5}>Get started</Button>
            </Box>
            <Box p={4}>
                <VStack spacing={2} align="stretch">
                    {features.map((feature, index) => (
                        <Text key={index}>{feature}</Text>
                    ))}
                </VStack>
            </Box>
        </Box>
    );
};

export default PricingCard;