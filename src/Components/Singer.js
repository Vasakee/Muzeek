import React, { useEffect, useState } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Avatar,
    Button,
    HStack,
    Box,
} from '@chakra-ui/react';
import { fetchUsers } from './fireBaseConfig'

const SingerTable = () => {
    const [singers, setSingers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const userList = await fetchUsers()
            const artistList = userList.filter(user => user.userCategory === 'artist');
            setSingers(artistList)
        }
        getUsers()
    }, [])
    /*const singers = [
        {
            id: 1,
            profile: 'path/to/profile1.png',
            name: 'Omah lay',
            email: 'Omah@demo.com',
            songs: 68,
            albums: 16,
            reviews: 12,
        },
        {
            id: 2,
            profile: 'path/to/profile2.png',
            name: 'Buju Bnxn',
            email: 'Bnxn@demo.com',
            songs: 68,
            albums: 16,
            reviews: 12,
        },
        {
            id: 3,
            profile: 'path/to/profile3.png',
            name: 'Burna Boy',
            email: 'Burna@demo.com',
            songs: 68,
            albums: 16,
            reviews: 12,
        },
    ];*/

    return (
        <Box padding="4" >
            <TableContainer>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>No.</Th>
                            <Th>Profile</Th>
                            <Th>Singer Name</Th>
                            <Th>Email</Th>
                            <Th>Songs</Th>
                            <Th>Reviews</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {singers.map((singer, index) => (
                            <Tr key={singer.id}>
                                <Td>{index + 1}</Td>
                                <Td>
                                    <Avatar src={singer.profilePic} name={singer.name} />
                                </Td>
                                <Td>{singer.name}</Td>
                                <Td>{singer.email}</Td>
                                <Td>{/*singer.songs*/ '68'}</Td>
                                <Td>{/*singer.reviews*/ '18'}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default SingerTable;