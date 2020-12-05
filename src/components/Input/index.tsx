import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { InputBlock } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
    iconProps?: IconBaseProps;
}

const Input : React.FC<InputProps> = (props) => (
        <InputBlock>
            {props.icon && <props.icon {...props.iconProps} />}
            <input {...props} />
        </InputBlock>
)

export default Input;