import React, { useCallback, useState } from 'react';
import { createContext } from "react";
import api from '../services/api';


interface SignInCredentials {
    email: string;
    password: string;
}

interface AuthContextData {
    name: string;
    signIn(credentials: SignInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider : React.FC = ({ children }) => {

    const signIn = useCallback(async ({ email, password } : SignInCredentials) => {
        const res = await api.post('sessions', {
            email,
            password
        });

        const { user, token } = res.data;

        localStorage.setItem('@gobarber:token', token);
        localStorage.setItem('@gobarber:user', JSON.stringify(user));

    }, []);

    return (
        <AuthContext.Provider  value={{ name: 'Tales', signIn }}>
            { children }
        </AuthContext.Provider>
    );
}