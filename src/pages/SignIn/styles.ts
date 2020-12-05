import styled from 'styled-components';
import { shade } from 'polished';

import background from '../../assets/background.png';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;
export const Content = styled.div`
    display: flex;
    place-content: center;
    flex-direction: column;
    align-items: center;

    width: 100%;
    max-width: 700px;

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;

        h1 {
            margin-bottom: 24px;
        }
        button {
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
        }
        input {
            background: #232129;
            color: #F4EDE8;
            border-radius: 10px;
            border: 2px solid #232129;
            padding: 16px;
            width: 100%;

            &::placeholder {
                color: #666360;
            }

            & + input {
                margin-top: 8px;
            }
        }

        a {
            color: #F4EDE8;
            display: block;
            text-decoration: none;
            margin-top: 24px;
            transition: color .2s;

            &:hover {
                color: ${shade(0.2, '#F4EDE8')}
            }
        }
    }

    > a {
        color: #ff9000;
        display: flex;

        align-items: center;

        text-decoration: none;
        margin-top: 24px;
        transition: color .2s;

        &:hover {
            color: ${shade(0.2, '#ff9000')}
        }

        svg {
            margin-right: 16px;
        }
    }
`;
export const Background = styled.div`
    flex: 1;
    background: url(${background}) no-repeat center;
    background-size: cover;
`;