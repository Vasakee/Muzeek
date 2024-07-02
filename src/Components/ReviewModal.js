import React, { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Textarea,
    useToast
} from '@chakra-ui/react';

const ReviewModal = ({ isOpen, onClose, song, addReview }) => {
    const [review, setReview] = useState('');
    const toast = useToast();

    const handleAddReview = () => {
        if (review.trim()) {
            addReview(song.id, review);
            setReview('');
            onClose();
            toast({
                title: "Review added.",
                description: "Your review has been successfully added.",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: 'top-right'
            });
        } else {
            toast({
                title: "Empty review.",
                description: "Please write a review before submitting.",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: 'top-right'
            });
        }
    };

    return (
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add a Review for {song.songName}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Textarea
                        placeholder="Write your review..."
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={handleAddReview}>
                        Submit Review
                    </Button>
                    <Button variant="ghost" onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default ReviewModal;