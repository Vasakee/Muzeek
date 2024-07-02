import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, database } from '../fireBaseConfig';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                const userDoc = await getDoc(doc(database, 'Users', currentUser.uid));
                if (userDoc.exists()) {
                    setUserDetails(userDoc.data());
                }
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