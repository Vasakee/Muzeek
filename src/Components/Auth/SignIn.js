import React, { useState } from 'react';
import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Grid,
    Heading,
    Input,
    Stack,
    Text,
    Link,
    VStack,
    IconButton,
    useToast,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link as RouterLink } from 'react-router-dom'
import { FaGoogle, FaFacebookF, FaInstagram, FaLinkedinIn, FaEye, FaEyeSlash } from 'react-icons/fa'
import { auth, database } from '../fireBaseConfig'
import { getDoc, doc } from 'firebase/firestore'

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleClick = () => setShow(!show)
    const Notify = useToast()
    const Navigate = useNavigate()
    const { setUserDetails } = useAuth()

    const SignIn = async (e) => {
        e.preventDefault()
        setLoading(true)
        if (!email || !password) {
            Notify({
                title: 'Please fill in all the required fields',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: 'top-right'
            })
            setLoading(false)
            return
        } else {
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                const userDoc = await getDoc(doc(database, 'Users', user.uid));
                if (userDoc.exists()) {
                    setUserDetails(userDoc.data());
                    Notify({
                        title: 'Login succesful',
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                        position: 'top-right'
                    })
                    setLoading(false)
                    Navigate('/Dashboard')
                }

            } catch (error) {
                console.log(error.message)
                if (error.message.includes('wrong-password')) {
                    Notify({
                        title: 'wrong password',
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                        position: 'top-right'
                    })
                }
                if (error.message.includes('user-not-found')) {
                    Notify({
                        title: 'User not found',
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                        position: 'top-right'
                    })
                }
                if (error.message.includes('email-already-in-use')) {
                    Notify({
                        title: 'This email has already been used',
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                        position: 'top-right'
                    })
                }
                if (error.message.includes('network-request-failed')) {
                    Notify({
                        title: 'Check your Network connection',
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                        position: 'top-right'
                    })
                }
                if (error.message.includes('auth/invalid-credential')) {
                    Notify({
                        title: 'invalid Credentials',
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                        position: 'top-right'
                    })
                }
                setLoading(false)
                return
            }
        }
    }
    return (
            <Box bg="white" p={8} rounded="lg" shadow="md" width="100%" maxW="lg">
                <Heading as="h2" size="lg" textAlign="center" mb={2}>
                    Sign In
        </Heading>
                <Text textAlign="center" mb={4}>
                    Login to stay connected.
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
                        <Checkbox id="customCheck1">
                            Remember me 
                        </Checkbox>
                        <Button colorScheme="blue" onClick={SignIn} type="submit" width="full" isLoading={loading}>
                            Sign In
            </Button>
                        {/* <Text textAlign="center" my={3}>
                            or sign in with other accounts?
            </Text> */}
                        {/* <Flex justify="center" spacing={4}>
                            <IconButton
                                as={Link}
                                href="#"
                                icon={<FaGoogle />}
                                aria-label="Google"
                                variant="outline"
                                m={2}
                            />
                            <IconButton
                                as={Link}
                                href="#"
                                icon={<FaFacebookF />}
                                aria-label="Facebook"
                                variant="outline"
                                m={2}
                            />
                            <IconButton
                                as={Link}
                                href="#"
                                icon={<FaInstagram />}
                                aria-label="Instagram"
                                variant="outline"
                                m={2}
                            />
                            <IconButton
                                as={Link}
                                href="#"
                                icon={<FaLinkedinIn />}
                                aria-label="LinkedIn"
                                variant="outline"
                                m={2}
                            />
                        </Flex> */}
                        {/*<Text mt={3} textAlign="center">
                            Don't have an Account? <RouterLink color="blue.500" to='/signup'>Sign Up</RouterLink>
                                        </Text>*/}
                    </Stack>
                </form>
            </Box>
    );
};

export default SignIn;
