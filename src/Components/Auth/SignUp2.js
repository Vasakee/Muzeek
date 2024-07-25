import {
    Button, Checkbox, FormControl, FormLabel, Text, Flex, IconButton, Link,
    Input, InputGroup, InputRightElement, GridItem, Stack, Select, VStack
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useAuth } from '../Context/AuthContext'
import { auth, database } from '../fireBaseConfig.js'
import { setDoc, doc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom'
import { ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../fireBaseConfig'
import { FaGoogle, FaFacebookF, FaInstagram, FaLinkedinIn, FaEye, FaEyeSlash } from 'react-icons/fa';


const SignUp2 = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [userCategory, setuserCategory] = useState('')
    const [profilePic, setProfilePic] = useState();
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const Notify = useToast()
    const Navigate = useNavigate()
    const { setUserDetails } = useAuth()

    const handleClick = () => setShow(!show)
    const handleClick2 = () => setShow2(!show2)

    const handleCategory = (e) => {
        const selectedCategory = e.target.value
        setuserCategory(selectedCategory)
    }

    const handlePicChange = (event) => {
        setProfilePic(event.target.files[0]);
    };

    const uploadProfilePicture = async (file) => {
        if (!file) return 'https://firebasestorage.googleapis.com/v0/b/musikk-e80a3.appspot.com/o/images%20%2F%20Anon.png?alt=media&token=a7d242ab-eeb2-4f4a-aaeb-037038e6910b'
        const storageRef = ref(storage, `profilePictures / ${file.name}`)
        await uploadBytes(storageRef, file)
        const downloadURL = await getDownloadURL(storageRef)
        return downloadURL
    }


    const SignUp = async (e) => {
        e.preventDefault()
        setLoading(true)
        if (!name || !email || !userCategory || !password || !confirmPassword) {
            Notify({
                title: 'Please fill all the fields',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: 'top-right'
            })
            setLoading(false)
            return
        }
        if (password !== confirmPassword) {
            Notify({
                title: 'Passwords do not match',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: 'top-right'
            })
            setLoading(false)
            return
        } else {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                const profilePicURL = await uploadProfilePicture(profilePic)

                await setDoc(doc(database, 'Users', user.uid), { name: name, email: email, phoneNumber: phone, userCategory: userCategory, profilePic: profilePicURL });
                setUserDetails({ name: name, email: email, phoneNumber: user.phone, userCategory: userCategory, profilePic: profilePicURL });
                Notify({
                    title: 'user registered successfully',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: 'top-right'
                })
                setLoading(false)
                Navigate('/Dashboard')
                return
            } catch (error) {
                console.log(error.message)
                Notify({
                    title: 'an error occured',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                    position: 'top-right'
                })
                setLoading(false)
                return
            }
        }
    }


    return (
        <VStack spacing='5px'>
            <FormControl id='first-Name' isRequired>
                <FormLabel>Name</FormLabel>
                <Input placeholder='Enter Name here' type='text' value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl id='Email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input placeholder='Enter email here' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="phone" isRequired>
                <FormLabel>Phone No.</FormLabel>
                <Input placeholder="Enter phone no here" type='number' value={phone} onChange={(e) => setPhone(e.target.value)} />
            </FormControl>
            <FormControl id='Password' isRequired>
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
            <FormControl id='confirmPassword' isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                    <Input placeholder='Enter password here' value={confirmPassword} type={show2 ? 'text' : 'password'} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <InputRightElement width={'4.5rem'} >
                        <Button onClick={handleClick2}>
                            {show2 ? <IconButton
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
            <FormControl id="profilePic">
                <FormLabel>Profile Picture</FormLabel>
                <Input
                    type="file"
                    accept="image/*"
                    onChange={handlePicChange}
                />
            </FormControl>
            <FormControl as={GridItem} id='category' colSpan={[6, 3]} isRequired>
                <FormLabel>Sign Up as</FormLabel>
                <Select
                    id="User Category"
                    name="User Category"
                    //autoComplete="country"
                    value={userCategory}
                    onChange={handleCategory}
                    placeholder="-- Category --"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md">
                    <option key='artist' value='artist' >Artist</option>
                    <option key='Listener' value='listener' >Listener</option>
                    {/* {States.map((state) => (
                                    <option key={state.id} value={state.id}>{state.name}</option>
                                ))}*/}
                </Select>
            </FormControl>
            <Stack mt={4} align="center">
                <Checkbox id="customCheck1">
                    I agree with the terms of use
            </Checkbox>
                <Button colorScheme="blue" type="submit" isLoading={loading} onClick={SignUp} width="full">
                    Sign Up
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
                    Already have an Account? <RouterLink color="blue" to='/signin'>Sign In</RouterLink>
                            </Text>*/}
            </Stack>
        </VStack>
    )
}

export default SignUp2