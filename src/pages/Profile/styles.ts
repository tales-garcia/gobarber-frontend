import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    height: 100vh;


    > header {
        width: 100%;
        height: 144px;
        background: #28262e;

        display: flex;
        align-items: center;

        div {
            width: 100%;
            max-width: 1120px;
            margin: 0 auto;

            svg {
                color: #999591;
                width: 24px;
                height: 24px;
            }
        }
    }
`;

export const Content = styled.div`
    display: flex;
    place-content: center;
    flex-direction: column;
    align-items: center;

    width: 100%;
    max-width: 700px;
    margin: -174px auto 0;

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;

        h1 {
            margin-bottom: 24px;
            font-size: 20px;
            text-align: left;
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

export const AvatarInput = styled.div`
    margin-bottom: 32px;
    position: relative;
    width: 186px;
    margin: 0 auto;

    img {
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }
    label {
        position: absolute;
        width: 48px;
        height: 48px;
        background: #ff9000;
        border-radius: 50%;
        right: 6px;
        bottom: 6px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background .3s;
        color: #28262e;
        cursor: pointer;

        svg {
            width: 20px;
            height: 20px;
        }

        &:hover {
            background: ${shade(0.2, '#ff9000')};
        }

        > input {
            display: none;
        }
    }
`;