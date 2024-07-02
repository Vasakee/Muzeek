import React, { useState } from 'react';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input, InputGroup } from '@chakra-ui/input';
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/layout';
import { Select } from '@chakra-ui/select';
import { Button, useToast } from '@chakra-ui/react';
import { storage, database } from './fireBaseConfig';
import { ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection, doc, updateDoc, increment, arrayUnion } from "firebase/firestore";

function AddSong() {
    const [songName, setSongName] = useState('');
    const [songCategory, setSongCategory] = useState('');
    const [songWriter, setSongWriter] = useState('');
    const [audioFile, setAudioFile] = useState();
    const [profilePic, setProfilePic] = useState();
    const [loading, setLoading] = useState(false);
    const Notify = useToast()

    const handleFileChange = (event) => {
        setAudioFile(event.target.files[0]);
    };

    const handleCategoryChange = (event) => {
        setSongCategory(event.target.value);
    };

    const handlePicChange = (event) => {
        setProfilePic(event.target.files[0]);
    };

    const submitForm = async (event) => {
        event.preventDefault();
        setLoading(true);

        if (audioFile) {
            try {
                // Replace spaces in filenames to avoid URL encoding issues
                const audioFileName = audioFile.name.replace(/\s+/g, '_');
                const picFileName = profilePic.name.replace(/\s+/g, '_');

                const audioRef = ref(storage, `audios / ${audioFileName}`);
                const picRef = ref(storage, `images / ${picFileName}`);

                const audioUploadTask = uploadBytesResumable(audioRef, audioFile);
                const picUploadTask = uploadBytesResumable(picRef, profilePic);

                audioUploadTask.on('state_changed', null, (error) => {
                    console.error("Error uploading audio: ", error);
                    setLoading(false);
                });

                picUploadTask.on('state_changed', null, (error) => {
                    console.error("Error uploading image: ", error);
                    setLoading(false);
                });

                await audioUploadTask.then();
                await picUploadTask.then();

                const audioURL = await getDownloadURL(audioRef);
                const picURL = await getDownloadURL(picRef);

                console.log(audioURL)
                console.log(picURL)
                await addDoc(collection(database, "songs"), {
                    songName,
                    songCategory,
                    songWriter,
                    audioURL,
                    picURL,
                    playCount: 0,
                    reviews: [],
                    createdAt: new Date()
                });
                Notify({
                    title: 'Song uploaded successfully',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: 'top-right'
                })
                setSongName('');
                setSongCategory('');
                setSongWriter('');
                setAudioFile();
                setProfilePic();
                setLoading(false);
            } catch (error) {
                console.error("Error uploading to Firebase: ", error);
                setLoading(false);
            }
        } else {
            Notify({
                title: 'Please select an audio file and a cover photo',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: 'top-right'
            })
            alert("Please select an audio file and a cover photo");
            setLoading(false);
        }
    };

    const incrementPlayCount = async (songId) => {
        const songDocRef = doc(database, "songs", songId);
        await updateDoc(songDocRef, {
            playCount: increment(1)
        });
    };

    const addReview = async (songId, review) => {
        const songDocRef = doc(database, "songs", songId);
        await updateDoc(songDocRef, {
            reviews: arrayUnion(review)
        });
    };

    return (
        <Flex justify="center" align="center" height="100vh" bg="gray.100" mt={4}>
            <Box bg="white" p={8} rounded="lg" shadow="md" width="100%" maxW="lg">

                <Text textAlign="center" fon fontSize="lg" mb={4}>
                    Upload your music
                </Text>
                <form onSubmit={submitForm}>
                    <FormControl id="song-name" mb={4} isRequired>
                        <FormLabel>Song Name</FormLabel>
                        <Input placeholder="Song Name" value={songName} onChange={(e) => setSongName(e.target.value)} />
                    </FormControl>
                    <FormControl id="song-category" mb={4} isRequired>
                        <FormLabel>Song Category</FormLabel>
                        <Select
                            value={songCategory}
                            onChange={handleCategoryChange}
                            placeholder="--Select Category--"
                            focusBorderColor="brand.400"
                            shadow="sm"
                            size="sm"
                            w="full"
                            rounded="md"
                        >
                            <option value="Afrobeats">Afrobeats</option>
                            <option value="Reggae">Reggae</option>
                            <option value="Gospel">Gospel</option>
                            <option value="Hip-hop">Hip-hop</option>
                            <option value="Rock">Rock</option>
                            <option value="Jazz">Jazz</option>
                            <option value="other">Other</option>
                        </Select>
                    </FormControl>
                    <FormControl id="song-writer" mb={4} isRequired>
                        <FormLabel>Song Writer</FormLabel>
                        <Input placeholder="Daniel" value={songWriter} onChange={(e) => setSongWriter(e.target.value)} />
                    </FormControl>
                    <FormControl id="audio-file" mb={4} isRequired>
                        <FormLabel>Upload Audio</FormLabel>
                        <Input type="file" p={1.5} accept="audio/*" onChange={handleFileChange} />
                    </FormControl>
                    <FormControl id="cover-photo" mb={4} >
                        <FormLabel>Upload Cover Photo</FormLabel>
                        <InputGroup>
                            <Input type="file" p={1.5} accept="image/*" onChange={handlePicChange} />
                        </InputGroup>
                    </FormControl>
                    <Button
                        type="submit"
                        w="7rem"
                        mt={4}
                        colorScheme="red"
                        variant="solid"
                        isLoading={loading}
                    >
                        Upload
                    </Button>
                </form>
            </Box>
        </Flex>
    );
}

export default AddSong;