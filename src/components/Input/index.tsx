import { Field, FormikErrors, FormikTouched } from 'formik';
import React, { InputHTMLAttributes, useCallback, useRef, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { InputBlock, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    Icon?: React.ComponentType<IconBaseProps>;
    iconSize?: number;
    errors: FormikErrors<{
        [key: string]: string;
    }>;
    touched: FormikTouched<{
        [key: string]: string;
    }>;
}

const Input: React.FC<InputProps> = ({ Icon, iconSize, errors, touched, name, ...rest }) => {
    let inputRef = useRef<HTMLInputElement>(null);

    const [isFilled, setIsFilled] = useState(false);
    const hasError = !!errors[name] && !!touched[name];

    const handleInputBlur = useCallback(() => {
        setIsFilled(!!inputRef.current?.value);
    }, []);

    return (
        <InputBlock hasError={hasError} isFilled={isFilled}>
            {Icon && <Icon size={iconSize || 16} />}
            <Field
                innerRef={inputRef}
                name={name}
                {...rest}
                onBlur={handleInputBlur}
            />
            {hasError && (
                <Error title={errors[name] || ''}>
                    <FiAlertCircle color="#c53030" size={20} />
                </Error>
            )}
        </InputBlock>
    )
}

export default Input;