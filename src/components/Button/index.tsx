import { useFormikContext } from 'formik';
import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button : React.FC<ButtonProps> = ({children, ...rest}) => {
    const { isSubmitting } = useFormikContext();
    return (<Container type="button" {...rest}>{isSubmitting ? 'Enviando...' : children}</Container>)
};

export default Button;