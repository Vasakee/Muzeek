import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, database } from '../fireBaseConfig';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        // Load user details from local storage on mount
        const storedUserDetails = localStorage.getItem('userDetails');
        if (storedUserDetails) {
            setUserDetails(JSON.parse(storedUserDetails));
        }

        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                const userDoc = await getDoc(doc(database, 'Users', currentUser.uid));
                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    setUserDetails(userData);
                    // Save user details to local storage
                    localStorage.setItem('userDetails', JSON.stringify(userData));
                }
            } else {
                // Clear user details from state and local storage when logged out
                setUserDetails(null);
                localStorage.removeItem('userDetails');
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, userDetails, setUserDetails }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);