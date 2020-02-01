import styled from 'styled-components';
import '../../assets/fonts/index.css';

export const FooterContainer = styled.footer`
    width: 100%;
    background-color: #151614;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    color: #ffffff;
    margin-top: 10px;
    font-family: 'Rubik', sans-serif;
    text-align: center;

    @media (max-width: 500px) {
        & {
            font-size: 14px;
        }
    }

    @media (max-width: 500px) {
        & {
            font-size: 13px;
        }

        span {
            &:last-child {
                a {
                    font-size: 12px;
                }
            }
        }
    }

    a {
        color: #ababab;
        text-decoration: none;

        &:hover {
            color: #ffffff;
        }
    }

    span {
        margin: 5px;

        &:last-child {
            font-size: 14px;
        }
    }
`