import React, { useEffect, useState } from 'react'
import { Box, Card, CardHeader, CardBody, Heading, Text, useBreakpointValue, Button } from '@chakra-ui/react';

function ConnectWallet() {
    const cardSize = useBreakpointValue({ base: 'sm', md: 'lg', lg: 'xl' })

    return (
        <div>
            <Box className="connect" size={{ lg: 'lg', md: 'md', base: 'sm' }} width={500} mb={10} >
                <Card>
                    <CardHeader size={cardSize} >
                        <Heading as="h4" size="md" textTransform="capitalize">Connect to your crypto wallet</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text><b>NOTE!</b> Payments are to be made in ETH</Text>
                        <w3m-button />
                    </CardBody>
                </Card>
            </Box>
        </div >
    )
}

export default ConnectWallet
