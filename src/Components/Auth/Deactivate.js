import React, { useState } from 'react';
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Grid,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Text,
    useToast,
} from '@chakra-ui/react';
import { signInWithEmailAndPassword, deleteUser } from 'firebase/auth'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { auth } from '../fireBaseConfig'
import { useNavigate } from 'react-router';

const Deactivate = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)


    const Notify = useToast()
    const Navigate = useNavigate()

    const handleClick = () => setShow(!show)

    const handleDeactivate = async (e) => {
        e.preventDefault();
        try {
            // Sign in the user
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Delete the user's account
            await deleteUser(user);
            Notify({
                title: 'Account has been successfully deactivated',
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: 'top-right'
            })
            setLoading(false)
            Navigate('/')
        } catch (error) {
            console.error('Error deactivating account:', error);
            Notify({
                title: error.message,
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'top-right'
            })
        }
    };

    return (
        <Flex justify="center" align="center" height="100vh" bg="gray.100">
            <Box bg="white" p={8} rounded="lg" shadow="md" width="100%" maxW="lg">
                <Heading as="h2" size="lg" textAlign="center" mb={2}>
                    Account Deactivate
        </Heading>
                <Text textAlign="center" mb={4}>
                    Enter your Details to de-activate your account
        </Text>
                <form>
                    <Grid templateColumns={{ base: '1fr', md: '1fr' }} gap={4}>
                        <FormControl id="email" isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" value={email} placeholder="Enter email here" onChange={(e) => setEmail(e.target.value)} />
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input placeholder='Enter password here' value={password} type={show ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)} />
                                <InputRightElement width={'4.5rem'} >
                                    <Button h='1.75rem' size={'sm'} onClick={handleClick}>
                                        {show ? <IconButton
                                            icon={<FaEye />}
                                            aria-label="Eye"
                                            variant="outline"
                                            m={2}
                                        /> : <IconButton
                                            icon={<FaEyeSlash />}
                                            aria-label="EyeSlash"
                                            variant="outline"
                                            m={2}
                                        />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                    </Grid>
                    <Stack mt={4} align="center">
                        <Button colorScheme="red" isLoading={loading} type="submit" onClick={handleDeactivate} width="full">
                            De-activate
            </Button>
                    </Stack>
                </form>
            </Box>
        </Flex>
    );
};

export default Deactivate;