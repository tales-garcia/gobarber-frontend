import styled from 'styled-components';

export const InputBlock = styled.div`
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

    svg {
        margin-right: 16px;
        color: #666360;
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