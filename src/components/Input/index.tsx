import { Field, useField } from 'formik';
import React, { InputHTMLAttributes, useCallback, useRef, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { InputBlock, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    Icon?: React.ComponentType<IconBaseProps>;
    iconSize?: number;
}

const Input: React.FC<InputProps> = ({ Icon, style, iconSize, name, ...rest }) => {
    let inputRef = useRef<HTMLInputElement>(null);
    const [, { error, touched }] = useField(name);

    const [isFilled, setIsFilled] = useState(false);
    const hasError = !!error && !!touched;

    const handleInputBlur = useCallback(() => {
        setIsFilled(!!inputRef.current?.value);
    }, []);

    return (
        <InputBlock style={style} hasError={hasError} isFilled={isFilled}>
            {Icon && <Icon size={iconSize || 16} />}
            <Field
                innerRef={inputRef}
                name={name}
                {...rest}
                onBlur={handleInputBlur}
            />
            {hasError && (
                <Error title={error || ''}>
                    <FiAlertCircle color="#c53030" size={20} />
                </Error>
            )}
        </InputBlock>
    )
}

export default Input;