import React, { useEffect, useState, useRef } from 'react';
import {
    Box,
    Container,
    VStack,
    HStack,
    IconButton,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Text,
    Flex,
    Icon,
    useBreakpointValue
} from '@chakra-ui/react';
import {
    FaHeart, FaPlay, FaPause, FaStepBackward, FaStepForward,
    FaRandom, FaRedo, FaVolumeUp, FaVolumeDown, FaVolumeMute
} from 'react-icons/fa';
import { database } from './fireBaseConfig'
import { doc, updateDoc, arrayUnion, increment } from "firebase/firestore";


const Footer = ({ songs, currentSong, isPlaying, togglePlayPause, setIsPlaying, setCurrentSong }) => {
    const audioRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.5); // Initialize volume to 50%
    const [isRepeat, setIsRepeat] = useState(false);

    useEffect(() => {
        if (audioRef.current) {
            const audio = audioRef.current;

            const updateTime = () => {
                setCurrentTime(audio.currentTime);
            };

            const setAudioData = () => {
                setDuration(audio.duration);
                setCurrentTime(audio.currentTime);
            };

            audio.addEventListener('timeupdate', updateTime);
            audio.addEventListener('loadedmetadata', setAudioData);
            audio.volume = volume; // Set initial volume

            if (isPlaying) {
                audio.play();
                incrementPlayCount(currentSong.id);
            } else {
                audio.pause();
            }

            return () => {
                audio.removeEventListener('timeupdate', updateTime);
                audio.removeEventListener('loadedmetadata', setAudioData);
            };
        }
    }, [isPlaying, currentSong, volume]);

    const handleSliderChange = (value) => {
        if (audioRef.current) {
            audioRef.current.currentTime = value;
            setCurrentTime(value);
        }
    };

    const handleVolumeChange = (value) => {
        setVolume(value / 100);
        if (audioRef.current) {
            audioRef.current.volume = value / 100;
        }
    };

    const playNextSong = () => {
        if(!currentSong) return;
        const currentIndex = songs.findIndex(song => song.id === currentSong.id);
        const nextIndex = (currentIndex + 1) % songs.length;
        setCurrentSong(songs[nextIndex]);
        setIsPlaying(true);
    };

    const playPreviousSong = () => {
        if(!currentSong) return;
        const currentIndex = songs.findIndex(song => song.id === currentSong.id);
        const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
        setCurrentSong(songs[prevIndex]);
        setIsPlaying(true);
    };


    const repeatSong = () => {
        setIsRepeat(!isRepeat);
    };

    const getVolumeIcon = () => {
        if (volume === 0) {
            return FaVolumeMute;
        } else if (volume <= 0.5) {
            return FaVolumeDown;
        } else {
            return FaVolumeUp;
        }
    };
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.loop = isRepeat;
        }
    }, [isRepeat]);

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
        // setReview('');
    };

    const iconSize = useBreakpointValue({ base: 'md', md: 'lg', lg: 'lg' })

    return (
        <Box
            as="footer"
            bg="gray.800"
            color="white"
            py={4}
            position="fixed"
            bottom={0}
            width="100%"
            zIndex={10}
        >
            <audio ref={audioRef} src={currentSong?.audioURL} onEnded={playNextSong} />
            <Slider aria-label="seek-slider" defaultValue={0} value={currentTime}
                min={0}
                max={duration}
                onChange={handleSliderChange} colorScheme='blue' mx={{ base: 2, md: 4, lg: 6 }}>
                <SliderTrack bg="gray.700">
                    <SliderFilledTrack bg="blue.500" />
                </SliderTrack>
                <SliderThumb boxSize={4} />
            </Slider>
            <Container maxW="container.xl" py={4}>
                <VStack spacing={{ base: 1, md: 2, lg: 4 }}>
                    <HStack spacing={{ base: 2, md: 3, lg: 4 }} w="full" justify="space-between" flexWrap='wrap'>
                        <Flex align="center" flexWrap='wrap'>
                            <Box w="50px" h="50px" bg="gray.700" bgImage={currentSong?.picURL} />
                            <Box ml={3}>
                                <Text fontSize="md">{currentSong?.songName || "Track Name"}</Text>
                                <Text fontSize="sm">{currentSong?.songWriter || "Track Artist"}</Text>
                            </Box>
                            <IconButton
                                aria-label="Like"
                                icon={<FaHeart />}
                                variant="ghost"
                                colorScheme="whiteAlpha"
                                ml={{ base: 1, lg: 2 }}
                            />
                        </Flex>
                        <HStack spacing={{ base: 1, md: 2, lg: 4 }}>
                            {/*<IconButton
                                aria-label="Shuffle"
                                icon={<FaRandom />}
                                variant="ghost"
                                colorScheme="whiteAlpha"
                                size={iconSize}
                            />*/}
                            <IconButton
                                aria-label="Previous"
                                icon={<FaStepBackward />}
                                variant="ghost"
                                colorScheme="whiteAlpha"
                                onClick={playPreviousSong}
                                size={iconSize}
                            />
                            <IconButton
                                aria-label="Play/Pause"
                                icon={isPlaying ? <FaPause /> : <FaPlay />}
                                onClick={togglePlayPause}
                                colorScheme="blue"
                                borderRadius="full"
                                size="lg"
                                size={iconSize}
                            />
                            <IconButton
                                aria-label="Next"
                                icon={<FaStepForward />}
                                variant="ghost"
                                colorScheme="whiteAlpha"
                                onClick={playNextSong}
                                size={iconSize}
                            />
                            <IconButton
                                aria-label="Repeat"
                                icon={<FaRedo />}
                                variant={isRepeat ? "solid" : "ghost"}
                                colorScheme="whiteAlpha"
                                onClick={repeatSong}
                                size={iconSize}
                            />
                        </HStack>
                        <Box flex="1" mb={{ base: 4, md: 0 }}>
                            <Flex align="center" justify={{ base: "center", md: "flex-end" }}>
                                <Icon as={getVolumeIcon()} color="white" boxSize={6} />
                                <Slider aria-label="volume-slider" value={volume * 100}
                                    min={0}
                                    max={100}
                                    onChange={handleVolumeChange} w="full" mx={3}>
                                    <SliderTrack bg="gray.700">
                                        <SliderFilledTrack bg="blue.500" />
                                    </SliderTrack>
                                    <SliderThumb boxSize={4} />
                                </Slider>
                            </Flex>
                        </Box>
                    </HStack>
                </VStack>
            </Container>
        </Box>
    );
};

export default Footer;