import React, { useEffect } from 'react';
import { FiAlertCircle, FiCheckCircle, FiInfo, FiXCircle } from 'react-icons/fi';
import { useToast } from '../../../hooks/toast';
import { Container } from './styles';

interface ToastData {
    id: string;
    type?: 'success' | 'info' | 'error';
    title: string;
    description?: string;
}

interface ToastProps {
    toast: ToastData;
}

const Icons = {
    info: <FiInfo size={24} />,
    error: <FiAlertCircle size={24} />,
    success: <FiCheckCircle size={24} />
};

const Toast: React.FC<ToastProps> = ({ toast }) => {
    const { removeToast } = useToast();

    useEffect(() => {
        const timer = setTimeout(() => removeToast(toast.id), 4000);

        return () => clearTimeout(timer);
    }, [removeToast, toast.id]);

    return (
        <Container key={toast.id} hasDescription={!!toast.description} type={toast.type}>
            {Icons[toast.type || 'info']}

            <div>
                <strong>{toast.title}</strong>
                {toast.description && <p>{toast.description}</p>}
            </div>

            <button onClick={() => removeToast(toast.id)} type="button">
                <FiXCircle size={18} />
            </button>
        </Container>
    );
};

export default Toast;