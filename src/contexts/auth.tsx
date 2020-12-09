import React, { useCallback, useContext, useState } from 'react';
import { createContext } from "react";
import api from '../services/api';


interface SignInCredentials {
    email: string;
    password: string;
}

interface AuthState {
    token: string;
    user: object;
}

interface AuthContextData {
    user: object;
    signIn(credentials: SignInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function useAuth() {
    const authContext = useContext(AuthContext);

    if(!authContext) throw new Error('useAuth must be used within an AuthProvider');

    return authContext;
}

export const AuthProvider : React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>(() => {
        const user = localStorage.getItem('@gobarber:user');
        const token = localStorage.getItem('@gobarber:token');

        if(!user || !token) return {} as AuthState;

        const parsedUser = JSON.parse(user) as object;

        return { user: parsedUser, token };
    });

    const signIn = useCallback(async ({ email, password } : SignInCredentials) => {
        const res = await api.post('sessions', {
            email,
            password
        });

        const { user, token } = res.data;

        localStorage.setItem('@gobarber:token', token);
        localStorage.setItem('@gobarber:user', JSON.stringify(user));

        setData({ user, token });
    }, []);

    return (
        <AuthContext.Provider value={{ user: data.user, signIn }}>
            { children }
        </AuthContext.Provider>
    );
}