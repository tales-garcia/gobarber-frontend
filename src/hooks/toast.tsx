import React, { createContext, useCallback, useContext, useState } from 'react';
import ToastContainer from '../components/ToastContainer';
import { uuid } from 'uuidv4';

interface ToastContextData {
    createToast(toastParams: Omit<ToastData, 'id'>): void;
    removeToast(id: string): void;
}

interface ToastData {
    id: string;
    type?: 'success' | 'info' | 'error';
    title: string;
    description?: string;
}

export const Toast = createContext<ToastContextData>({} as ToastContextData);

export const ToastProvider: React.FC = ({ children }) => {
    const [toasts, setToasts] = useState<ToastData[]>([]);

    const createToast = useCallback((toastParams: Omit<ToastData, 'id'>) => {
        const toast: ToastData = {
            id: uuid(),
            title: toastParams.title,
            description: toastParams.description,
            type: toastParams.type
        };

        setToasts(oldToasts => [toast, ...oldToasts]);
    }, []);

    const removeToast = useCallback((id: string) => {
        setToasts(oldToasts => oldToasts.filter(toast => toast.id !== id));
    }, []);

    return (
        <Toast.Provider value={{ removeToast, createToast }}>
            { children}
            <ToastContainer toasts={toasts} />
        </Toast.Provider>
    );
}

export function useToast() {
    const toastContext = useContext(Toast);

    if (!toastContext) throw new Error('useToast must be used within a ToastProvider');

    return toastContext;
}