import React from 'react';
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Text, Center, Tfoot, Button } from '@chakra-ui/react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const PricingTable = () => {
    const pricingData = [
        {
            title: 'Free',
            price: '$0',
            period: '/ month',
            recommended: false,
            features: [true, false, false, false],
            purchases: 'free'
        },
        {
            title: 'Pro',
            price: '$15',
            period: '/ month',
            recommended: false,
            features: [true, false, true, true],
            purchases: 'Purchase'
        },
        {
            title: 'Enterprise',
            price: '$29',
            period: '/ month',
            recommended: true,
            features: [true, true, true, true],
            purchases: 'Purchase'
        },
        {
            title: 'Premium',
            price: '$49',
            period: '/ month',
            recommended: false,
            features: [true, true, true, true],
            purchases: 'Purchase'
        },
    ];

    const featuresList = ['Unlimited streams', 'Download Songs', 'Offline Plays', 'Multiple users'];

    //const purchases = ['Free', 'Purchase', 'Purchase', 'Purchase']

    return (
        <Box borderWidth="1px" borderRadius="lg" overflow={{ base: 'auto', lg: 'hidden' }} mb={4} ml={10}>
            <Box p={4}>
                {/*<Heading as="h3" size="lg" mb={4}>Pricing 1</Heading>
                <Box overflow={{ base: 'auto', lg: 'hidden' }}>*/}
                <Table variant="simple" minWidth={{ base: '600px', lg: '100%' }}>
                    <Thead>
                        <Tr>
                            <Th></Th>
                            {pricingData.map((plan, index) => (
                                <Th key={index} textAlign="center">
                                    <Box p={2} bg="gray.100" borderRadius="md">
                                        <Text fontSize="lg">{plan.title}</Text>
                                        <Text fontSize="2xl" fontWeight="bold">{plan.price}</Text>
                                        <Text>{plan.period}</Text>
                                        {plan.recommended && <Text fontSize="sm" color="green.500">Recommended</Text>}
                                    </Box>
                                </Th>
                            ))}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {featuresList.map((feature, rowIndex) => (
                            <Tr key={rowIndex}>
                                <Th>{feature}</Th>
                                {pricingData.map((plan, colIndex) => (
                                    <Td key={colIndex} textAlign="center">
                                        <Center>
                                            {plan.features[rowIndex] ? (
                                                <FaCheck color="green" />
                                            ) : (
                                                <FaTimes color="red" />
                                            )}
                                        </Center>
                                    </Td>
                                ))}
                            </Tr>
                        ))}
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th></Th>
                            {pricingData.map((plan, index) => (
                                <Td key={index} textAlign="center">
                                    <Button colorScheme="teal" variant="solid" size='md' mt={4}>
                                        {plan.purchases}
                                    </Button>
                                </Td>
                            ))}
                        </Tr>
                    </Tfoot>
                </Table>
                {/*</Box>*/}
            </Box>
        </Box>
    );
};

export default PricingTable;