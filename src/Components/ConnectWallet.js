import React, { useEffect, useState } from 'react'
import { Box, Card, CardHeader, CardBody, Heading, Text, useBreakpointValue, Button } from '@chakra-ui/react';

function ConnectWallet() {
    const cardSize = useBreakpointValue({ base: 'sm', md: 'lg', lg: 'xl' })


    return (
        <div>
            <Box className="reviews" size={{ lg: 'lg', md: 'md', base: 'sm' }} width={500} mb={10} >
                <Card>
                    <CardHeader size={cardSize} >
                        <Heading as="h4" size="md" textTransform="capitalize">Connect to your crypto wallet</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text><b>NOTE!</b> Payments are to be made in USDT</Text>
                        <Button
                            type="submit"
                            w="7rem"
                            mt={4}
                            colorScheme="blue"
                            variant="solid"
                        //isLoading={loading}
                        >
                            Connect
                    </Button>
                    </CardBody>
                </Card>
            </Box>
        </div >
    )
}

export default ConnectWallet
