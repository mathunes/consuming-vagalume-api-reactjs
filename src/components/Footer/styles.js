import styled from 'styled-components';
import '../../assets/fonts/index.css';

export const FooterContainer = styled.footer`
    width: 100%;
    background-color: #151614;
    display: flex;
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
    }

    a {
        color: #ababab;
        text-decoration: none;

        &:hover {
            color: #ffffff;
        }
    }
`