import React from 'react';
import { ChakraProvider, Box, Flex, Heading, Text, Table, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';

const Billing = () => {
    return (
        <ChakraProvider>
            <Box className="content-inner container-fluid pb-0" id="page_layout">
                <Flex direction="column" className="row">
                    <Box className="col-lg-12">
                        <Box className="card rounded">
                            <Box className="card-body">
                                <Flex direction="column" className="row">
                                    <Box className="col-sm-12">
                                        <Heading as='h6' mb={3}>Billing #215462</Heading>
                                        <Heading as="h6" mb={5}>Basil Dayigil</Heading>
                                    </Box>
                                </Flex>
                                <Flex direction="row" className="row">
                                    <Box className="col-lg-4" mr={8}>
                                        <Text fontSize='larger' fontWeight='bold'>Bill to:</Text>
                                        <Text>Basil Dayigil</Text>
                                    </Box>
                                    <Box className="col-lg-3" mr={8} ml={8}>
                                        <Text fontSize='larger' fontWeight='bold'>Bill from:</Text>
                                        <Text fontSize='medium' fontStyle='italic' fontWeight="bold">Muzeek Ltd.</Text>
                                    </Box>
                                    <Box className="col-lg-3" mr={8} ml={8}>
                                        <Text fontSize='larger' fontWeight='bold'>Amount Due</Text>
                                        <Text fontSize='medium' fontWeight="bold">$14,010.00</Text>
                                    </Box>
                                    <Box className="col-lg-2 text-end" ml={8} mr={8}>
                                        <Text fontSize='larger' fontWeight='bold'>Invoice Date</Text>
                                        <Text>27 May 2021</Text>
                                    </Box>
                                </Flex>
                                <Flex direction="column" className="row">
                                    <Box className="col-sm-12 mt-4">
                                        <Box className="table-responsive-lg">
                                            <Table className="table billing">
                                                <Thead>
                                                    <Tr>
                                                        <Th>Description</Th>
                                                        <Th>Price</Th>
                                                        <Th>Quantity</Th>
                                                        <Th className="text-end">Sub-Total</Th>
                                                    </Tr>
                                                </Thead>
                                                <Tbody>
                                                    <Tr>
                                                        <Td>
                                                            <Text fontSize='large' fontWeight='bold' mb={0}>Item 1</Text>
                                                            <Text mb={0}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                                                        </Td>
                                                        <Td>$2,100</Td>
                                                        <Td>1</Td>
                                                        <Td className="text-end">$2,100</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>
                                                            <Text fontSize='large' fontWeight='bold' mb={0}>Item 2</Text>
                                                            <Text mb={0}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                                                        </Td>
                                                        <Td>$4,205</Td>
                                                        <Td>2</Td>
                                                        <Td className="text-end">$8,410</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>
                                                            <Text fontSize='large' fontWeight='bold' mb={0}>Item 3</Text>
                                                            <Text mb={0}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                                                        </Td>
                                                        <Td>$1,500</Td>
                                                        <Td>3</Td>
                                                        <Td className="text-end">$4,500</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td></Td>
                                                        <Td></Td>
                                                        <Td>
                                                            <Text fontSize='larger' fontWeight='bold' mb={0}>Total:</Text>
                                                        </Td>
                                                        <Td className="text-end">$15,010.00</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td></Td>
                                                        <Td></Td>
                                                        <Td>
                                                            <Text fontSize='larger' fontWeight='bold' mb={0}>Tax:</Text>
                                                        </Td>
                                                        <Td className="text-end">$1,500</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td></Td>
                                                        <Td></Td>
                                                        <Td>
                                                            <Text fontSize='larger' fontWeight='bold' mb={0}>Discount:</Text>
                                                        </Td>
                                                        <Td className="text-end">$2,500</Td>
                                                    </Tr>
                                                    <Tr>
                                                        <Td>
                                                            <Text fontSize='larger' fontWeight='bold' mb={0}><b>Net Amount</b></Text>
                                                        </Td>
                                                        <Td></Td>
                                                        <Td></Td>
                                                        <Td className="text-end"><b>$14,010.00</b></Td>
                                                    </Tr>
                                                </Tbody>
                                            </Table>
                                        </Box>
                                    </Box>
                                </Flex>
                                <Flex direction="column" className="row">
                                    <Box className="col-sm-12">
                                        <Text className="mb-0 mt-4">Please pay before the due date. Thank you.</Text>
                                        <Flex justify="center" mt={4}>
                                            <Button colorScheme="blue">Print</Button>
                                        </Flex>
                                    </Box>
                                </Flex>
                            </Box>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </ChakraProvider>
    );
};

export default Billing;