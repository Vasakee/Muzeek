import React, { useState, useEffect } from 'react';
import { Box, Table, Tbody, Tr, Td, Image, Button, IconButton, Th, Thead, HStack, Heading, Drawer, useDisclosure, DrawerHeader, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton } from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import AddSong from './AddSong';
import { doc, updateDoc, arrayUnion, increment } from "firebase/firestore";
import { database, fetchSongs } from './fireBaseConfig'
import ReviewModal from './ReviewModal';

const Song = ({ onSongSelect, songs, setSongs }) => {
    const [currentSong, setCurrentSong] = useState(null);
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);



    useEffect(() => {
        const getSongs = async () => {
            const songList = await fetchSongs();
            setSongs(songList);
            console.log(onSongSelect)
        };
        getSongs();
    }, [setSongs]);

    const openReviewModal = (song) => {
        setCurrentSong(song);
        setIsReviewModalOpen(true);
    };

    const closeReviewModal = () => {
        setIsReviewModalOpen(false);
        setCurrentSong(null);
    };

    //const addReview = async (songId, review) => {
    //    const songDocRef = doc(database, "songs", songId);
    //    await updateDoc(songDocRef, {
    //        reviews: arrayUnion(review)
    //    });
    //    setReview('');
    //};
    const addReview = async (songId, review) => {
        const songDocRef = doc(database, "songs", songId);
        await updateDoc(songDocRef, {
            reviews: arrayUnion(review)
        });
        // Fetch updated songs list
        const songList = await fetchSongs();
        setSongs(songList);
    };


    return (
        <div>
            <Box overflowX="auto" >
                <HStack mb={10} mt={10} mr={4}>
                    <Heading>
                        Music List
                </Heading>
                </HStack>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Image</Th>
                            <Th>Song Name</Th>
                            <Th>Genres</Th>
                            <Th>Singer</Th>
                            <Th>Streams</Th>
                            <Th>Reviews</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {songs.map((item) => (
                            <Tr key={item.id}>
                                <Td>
                                    <Image src={item.picURL} alt="song-image" boxSize="50px" cursor={'pointer'}
                                        onClick={() => onSongSelect(item)} borderRadius="lg" />
                                </Td>
                                <Td onClick={() => onSongSelect(item)} cursor={'pointer'} > {item.songName}</Td>
                                <Td>{item.songCategory}</Td>
                                <Td>{item.songWriter}</Td>
                                <Td>{item.playCount}</Td>
                                <Td>{item.reviews ? item.reviews.length : 'No reviews'}</Td>
                                <Td>
                                    <Box display="flex" alignItems="center" gap={3}>
                                        <IconButton
                                            icon={<EditIcon />}
                                            size="sm"
                                            variant="outline"
                                            aria-label="Edit"
                                            onClick={() => openReviewModal(item)}
                                        />
                                    </Box>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
            {currentSong && (
                <ReviewModal
                    isOpen={isReviewModalOpen}
                    onClose={closeReviewModal}
                    song={currentSong}
                    addReview={addReview}
                />
            )}
        </div>
    );
};

export default Song;