import { animated } from 'react-spring';
import styled, { css } from 'styled-components';

interface ToastProps {
    type?: 'error' | 'info' | 'success';
    hasDescription: boolean;
}

const typesVariant = {
    error: css`
        color: #c53030;
        background: #fddede;
    `,
    info: css`
        color: #317bb7;
        background: #ebf8ff;
    `,
    success: css`
        color: #2e656a;
        background: #e6fffa;
    `
};

export const Container = styled(animated.div)<ToastProps>`
    width: 360px;

    position: relative;

    padding: 16px 30px 16px 16px;
    border-radius: 10px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

    display: flex;

    & + div {
        margin-top: 8px;
    }
    
    ${props => typesVariant[props.type || 'info']}

    > svg {
        margin: 4px 12px 0 0;
    }

    div {
        flex: 1;

        p {
            margin-top: 4px;
            font-size: 14px;
            opacity: 0.8;
            line-height: 20px;
        }
    }

    button {
        position: absolute;
        right: 16px;
        top: 19px;
        opacity: 0.8;
        border: 0;
        background: transparent;
        color: inherit;
    }

    ${props => !props.hasDescription &&
        css`
        align-items: center;

        svg {
            margin-top: 0;
        }
    `
    }
`;