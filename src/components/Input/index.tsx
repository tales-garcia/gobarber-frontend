import { Field } from 'formik';
import React, { InputHTMLAttributes, useCallback, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { InputBlock } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
    iconSize?: number;
}

const Input: React.FC<InputProps> = (props) => {
    return (
        <InputBlock>
            {props.icon && <props.icon size={props.iconSize} />}
            <Field {...props} />
        </InputBlock>
    )
}

export default Input;