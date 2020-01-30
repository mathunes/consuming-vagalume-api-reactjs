import styled from 'styled-components';
import '../../assets/fonts/index.css';

export const BoxSearchContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(21, 22, 20, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 3;

    button {
        position: absolute;
        top: 20px;
        right: 5%;
        background-color: transparent;
        border: 0;
        padding: 0;

        &:hover {
            cursor: pointer;
        }

        img {
            width: 2vw;
        }

        &:focus {
            outline: none;
        }
    }

    form {
        width: 90%;
        height: 100vh;
        display: flex;
        align-items: center;

        input {
            background-color: transparent;
            border: 0;
            font-size: 4vw;
            width: 100%;
            border-bottom: 2px solid #c4c4c4;
            padding: 0 0 10px;
            color: #ffffff;
            font-family: 'Rubik', sans-serif;

            &::placeholder {
                color: #c4c4c4;
            }

            &:focus {
                outline: none;
            }

        }

    }

    @media (max-width: 600px) {
        form {
            input {
                font-size: 6vw;
            }
        }

        button {
            img {
                width: 6vw;
            }
        }
    }

`;