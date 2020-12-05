import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
    background: #ff9000;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #312e38;
    width: 100%;
    font-weight: bold;
    margin-top: 16px;
    transition: background .2s;

    &:hover {
        background: ${shade(0.2, '#ff9000')}
    }
`;