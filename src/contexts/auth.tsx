import React, { useCallback } from 'react';
import { createContext } from "react";


interface AuthContextData {
    name: string;
    signIn(): void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider : React.FC = ({ children }) => {
    const signIn = useCallback(() => {
        console.log('signin')
    }, []);

    return (
        <AuthContext.Provider  value={{ name: 'Tales', signIn }}>
            { children }
        </AuthContext.Provider>
    );
}