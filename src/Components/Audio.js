import React, { useState } from 'react';
import { ChakraProvider, Box, Button, Input, FormControl, FormLabel, useToast } from '@chakra-ui/react';

const AudioUploadForm = () => {
    const [audioFile, setAudioFile] = useState(null);
    const toast = useToast();

    const handleFileChange = (event) => {
        setAudioFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!audioFile) {
            toast({
                title: "No file selected",
                description: "Please select an audio file to upload.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        // You can handle the file upload logic here
        // For now, we'll just log the file to the console
        console.log(audioFile);

        toast({
            title: "File uploaded",
            description: ${ audioFile.name } has been uploaded successfully.,
            status: "success",
            duration: 3000,
            isClosable: true,
    });

    // Reset the form
    setAudioFile(null);
    event.target.reset();
};

return (
    <ChakraProvider>
        <Box maxWidth="400px" mx="auto" mt="20">
            <form onSubmit={handleSubmit}>
                <FormControl id="audio-upload" isRequired>
                    <FormLabel>Upload Audio File</FormLabel>
                    <Input type="file" accept="audio/*" onChange={handleFileChange} />
                </FormControl>
                <Button mt="4" colorScheme="teal" type="submit">
                    Submit
          </Button>
            </form>
        </Box>
    </ChakraProvider>
);
};

<Routes>
    <Route path='/' Component={HomePage} exact />
    <Route path='/Admin' Component={AdminPage} isOpen={isOpen} onToggle={onToggle} />
    <Route path='/Songs' Component={SongPage} isOpen={isOpen} onToggle={onToggle} />
    <Route path='/Sing' Component={Song} />
    <Route path='/Album' Component={Albums} />
    <Route path='/Deactivate' Component={DeactivatePage} />
    <Route path='/AuthPage' Component={AuthPage} />
    <Route path='/Pricing' Component={PricePage} />
    <Route path='/Billing' Component={BillPage} />
    <Route path='/Artist' Component={ArtistPage} isOpen={isOpen} onToggle={onToggle} />
    <Route path='/Bill' Component={BillPage} isOpen={isOpen} onToggle={onToggle} />
    <Route path='/Dashboard' Component={DashBoard} isOpen={isOpen} onToggle={onToggle} />
    <Route path='/Price' Component={PricePage} isOpen={isOpen} onToggle={onToggle} />
    <Route path='/Release' Component={Releasepage} isOpen={isOpen} onToggle={onToggle} />
    <Route path='/Singertable' Component={SingerTable} />
    <Route path='/ssssss' Component={TopSongs} onSongSelect={onSongSelect} />
    <Route path='##' Component={Sidebar2} isOpen={isOpen} onToggle={onToggle} />
    <Route path='**' Component={Navbar} isOpen={isOpen} onToggle={onToggle} />
    <Route path='fffff' Component={Footer} currentSong={currentSong} isPlaying={isPlaying}
        togglePlayPause={togglePlayPause} setIsPlaying={setIsPlaying} />
</Routes>

https://firebasestorage.googleapis.com/v0/b/musikk-e80a3.appspot.com/o/images%20%2F%20Anon.png?alt=media&token=a7d242ab-eeb2-4f4a-aaeb-037038e6910b

export default AudioUploadForm;