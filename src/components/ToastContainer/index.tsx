import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { useToast } from '../../hooks/toast';
import { Container, Toast } from './styles';

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
    const { removeToast } = useToast();

    return (
        <Container>
            {toasts.map(toast => (
                <Toast key={toast.id} hasDescription={!!toast.description} type={toast.type}>
                    <FiAlertCircle size={20} />

                    <div>
                        <strong>{toast.title}</strong>
                        {toast.description && <p>{toast.description}</p>}
                    </div>

                    <button onClick={() => removeToast(toast.id)} type="button">
                        <FiXCircle size={18} />
                    </button>
                </Toast>
            ))}
        </Container>
    )
}

export default ToastContainer;