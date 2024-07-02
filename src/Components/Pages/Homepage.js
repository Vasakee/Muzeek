import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Box, Text, Tab, Tabs, TabList, TabPanel, TabPanels } from '@chakra-ui/react'
import SignIn from '../Auth/SignIn'
import SignUp2 from '../Auth/SignUp2'


const HomePage = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('Detail'))
        if (user) {
            navigate("/chats")
        }
    }, [navigate])
    return (
        <Container>
            <Box display="flex"
                justifyContent="center"
                p={3}
                bg='gray.800'
                w="100%"
                color='white'
                m="40px 0 15px 0"
                borderRadius="lg"
                borderWidth="1px">
                <Text fontSize='x-large' fontStyle='italic' fontWeight="bold" >MUZEEK!</Text>
            </Box>
            <Box bg='white' w='100%' p={4} borderRadius='lg' borderWidth='1px'>
                <Tabs variant='soft-rounded' >
                    <TabList mb='1em'>
                        <Tab width='50%'>Sign in</Tab>
                        <Tab width='50%'>Sign Up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <div><SignIn /></div>
                        </TabPanel>
                        <TabPanel>
                            <div><SignUp2 /></div>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    )
}

export default HomePage