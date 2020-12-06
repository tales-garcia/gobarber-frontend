import { Field } from 'formik';
import React, { InputHTMLAttributes, useCallback, useRef, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { InputBlock } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    Icon?: React.ComponentType<IconBaseProps>;
    iconSize?: number;
}

const Input: React.FC<InputProps> = ({ Icon, iconSize, ...rest }) => {
    let inputRef = useRef<HTMLInputElement>(null);

    const [isFilled, setIsFilled] = useState(false);

    const handleInputBlur = useCallback(() => {
        setIsFilled(!!inputRef.current?.value);
    }, []);

    return (
        <InputBlock isFilled={isFilled}>
            {Icon && <Icon size={iconSize || 16} />}
            <Field
                innerRef={inputRef}
                {...rest}
                onBlur={handleInputBlur}
            />
        </InputBlock>
    )
}

export default Input;