import React from 'react';
import { Container } from './styles';
import Toast from './Toast';

interface ToastData {
    id: string;
    type?: 'success' | 'info' | 'error';
    title: string;
    description?: string;
}

interface ToastContainerProps {
    toasts: ToastData[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts }) => {
    return (
        <Container>
            {toasts.map(toast => (
                <Toast key={toast.id} toast={toast} />
            ))}
        </Container>
    )
}

export default ToastContainer;