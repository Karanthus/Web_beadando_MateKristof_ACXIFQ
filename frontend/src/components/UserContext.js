// src/components/UserContext.js
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const defaultUser = { username: 'Guest' }; // Default guest user

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(defaultUser); // Initialize with default guest user

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider'); // Error handling
    }
    return context; // Return the context if it's defined
};
