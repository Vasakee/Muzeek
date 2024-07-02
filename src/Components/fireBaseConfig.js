import { initializeApp } from 'firebase/app'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBSEqOOUNQJ9laNrNuC-fYCXZFXmCz917w",
    authDomain: "musikk-e80a3.firebaseapp.com",
    projectId: "musikk-e80a3",
    storageBucket: "musikk-e80a3.appspot.com",
    messagingSenderId: "1097338822868",
    appId: "1:1097338822868:web:52f6a46922c0eee7fd9b41",
    measurementId: "G-E8SEHZ3YJW"
};

const app = initializeApp(firebaseConfig)
export const database = getFirestore(app)
export const auth = getAuth()
export const storage = getStorage(app)

export const fetchSongs = async () => {
    const songsCol = collection(database, 'songs');
    const songSnapshot = await getDocs(songsCol);
    const songList = songSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return songList;
};

export const fetchUsers = async () => {
    const usersCol = collection(database, 'Users');
    const userSnapshot = await getDocs(usersCol)
    const userList = userSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    return userList;
}

export const getTotalSongs = async () => {
    const songs = await fetchSongs();
    return songs.length;
};

export const getTotalUsers = async () => {
    const users = await fetchUsers();
    return users.length;
};

export const getTotalListeners = async () => {
    const users = await fetchUsers();
    const listeners = users.filter(user => user.userCategory === 'listener');
    return listeners.length;
};

export const getTotalArtists = async () => {
    const users = await fetchUsers();
    const artists = users.filter(user => user.userCategory === 'artist');
    return artists.length;
};

export const getTotalPlayCount = async () => {
    try {
        const songs = await fetchSongs();
        const totalPlayCount = songs.reduce((sum, song) => sum + (song.playCount || 0), 0);
        return totalPlayCount;
    } catch (error) {
        console.error("Error fetching total play count:", error);
        throw error;
    }
};

export const getAllReviewsWithSongs = async () => {
    const songs = await fetchSongs();
    return songs
        .filter(song => song.reviews && song.reviews.length > 0)
        .map(song => ({
            id: song.id,
            songName: song.songName,
            reviews: song.reviews,
            songWriter: song.songWriter
        }));
};
export default app