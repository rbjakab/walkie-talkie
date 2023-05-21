'use client';
import React, { ReactNode } from 'react';
import { onAuthStateChanged, getAuth, User } from 'firebase/auth';
import firebase_app from '@/firebase/config';

const auth = getAuth(firebase_app);

interface AuthContextProviderProps {
    children: ReactNode;
}

interface AuthContextValue {
    user: null | User;
}

export const AuthContext = React.createContext<AuthContextValue>({ user: null });

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [user, setUser] = React.useState<null | User>(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {loading ? <div>Loading...</div> : children}
        </AuthContext.Provider>
    );
};
