import React from 'react';
import { Box, Flex, List, ListItem, Text } from '@chakra-ui/react';

const FooterCard = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box borderTop="1px" borderColor="gray.200" mb="8" p="4">
            <Flex
                direction={["column", "row"]}
                align="center"
                justify="space-between"
                gap={3}
            >
                <Box mb={10} ml={20}>
                    <List display="flex" flexWrap="wrap" gap={3} mb={3} textTransform="capitalize" p={0} m={0}>
                        <ListItem>about</ListItem>
                        <ListItem>|</ListItem>
                        <ListItem>terms of use</ListItem>
                        <ListItem>|</ListItem>
                        <ListItem>privacy policy</ListItem>
                        <ListItem>|</ListItem>
                        <ListItem>support</ListItem>
                        <ListItem>|</ListItem>
                        <ListItem>feedback</ListItem>
                        <ListItem>|</ListItem>
                    </List>
                    <Text fontSize="sm">
                        Copyright &copy; {currentYear}. Daniel Inyibor.
          </Text>
                </Box>
                <Box>
                    {/* Additional content can go here */}
                </Box>
            </Flex>
        </Box>
    );
};

export default FooterCard;