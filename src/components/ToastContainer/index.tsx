import React from 'react';
import { useTransition } from 'react-spring';
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
    const transitionedToasts = useTransition(toasts, toast => toast.id, {
        from: {
            right: '-120%',
            opacity: 0
        },
        enter: {
            right: '0%',
            opacity: 1
        },
        leave: {
            right: '-120%',
            opacity: 0
        }
    });

    return (
        <Container>
            {transitionedToasts.map(({ item, key, props }) => (
                <Toast key={key} style={props} toast={item} />
            ))}
        </Container>
    )
}

export default ToastContainer;