import styled from 'styled-components';

export const Container = styled.div`

`;

export const Content = styled.main`
    max-width: 1120px;
    margin: 64px auto;
    display: flex;
`;

export const Schedule = styled.div`
    flex: 1;
    margin-right: 120px;

    h1 {
        font-size: 36px;
    }

    p {
        margin-top: 8px;
        color: #ff9000;
        display: flex;
        align-items: center;
        font-weight: 500;

        span {
            display: flex;
            align-items: center;
        }

        span + span::before {
            content: "";
            width: 1px;
            height: 12px;
            background: #ff9000;
            margin: 0 8px;
        }
    }
`;

export const Calendar = styled.aside`
    width: 380px;
`;

export const NextAppointment = styled.div`
    margin-top: 64px;

    > strong {
        color: #999591;
        font-size: 20px;
        font-weight: 400;
    }

    > div {
        background: #3e3b47;

        display: flex;
        align-items: center;
        padding: 16px 24px;
        border-radius: 10px;

        margin-top: 24px;
        position: relative;

        &::before {
            content: "";
            position: absolute;
            height: 80%;
            left: 0;
            top: auto;
            bottom: auto;
            width: 2px;
            background: #ff9000;
        }

        > img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
        }

        > strong {
            margin-left: 24px;
            color: #fff;
        }

        > span {
            margin-left: auto;
            display: flex;
            align-items: center;
            color: #999591;

            svg {
                color: #ff9000;
                margin-right: 8px;
            }
        }
    }
`;

export const Section = styled.section`
    margin-top: 48px;

    > strong {
        color: #999591;
        font-size: 20px;
        line-height: 26px;
        border-bottom: 1px solid #3e3b47;
        display: block;
        padding-bottom: 16px;
        margin-bottom: 16px;
    }

`;