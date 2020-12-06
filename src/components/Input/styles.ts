import styled from 'styled-components';

interface InputBlockProps {
    isFilled: boolean;
}

export const InputBlock = styled.div<InputBlockProps>`
    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;

    display: flex;
    align-items: center;

    & + div {
        margin-top: 8px;
    }

    &:focus-within {
        border: 2px solid #ff9000;

        svg {
            color: #ff9000;
        }
    }

    svg {
        margin-right: 16px;
        color: ${props => props.isFilled ? '#ff9000' : '#666360'};
    }

    input {
        color: #F4EDE8;
        border: 0;
        flex: 1;
        background: transparent;

        &::placeholder {
            color: #666360;
        }
    }
`;