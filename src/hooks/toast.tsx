import React, { createContext, useCallback, useContext } from 'react';
import ToastContainer from '../components/ToastContainer';

interface ToastContextData {
    createToast(): void;
    removeToast(): void;
}

export const Toast = createContext<ToastContextData>({} as ToastContextData);

export const ToastProvider: React.FC = ({ children }) => {

    const createToast = useCallback(() => {

    }, []);

    const removeToast = useCallback(() => {

    }, []);

    return (
        <Toast.Provider value={{ removeToast, createToast }}>
            { children}
            <ToastContainer />
        </Toast.Provider>
    );
}

export function useToast() {
    const toastContext = useContext(Toast);

    if (!toastContext) throw new Error('useToast must be used within a ToastProvider');

    return toastContext;
}