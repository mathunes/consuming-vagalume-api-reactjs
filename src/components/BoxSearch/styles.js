import styled from 'styled-components';

export const BoxSearchContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: rgba(26, 26, 26, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 3;

    button {
        position: absolute;
        top: 20px;
        right: 20px;
    }

    form {
        width: 90%;

        input {
            background-color: transparent;
            border: 0;
            font-size: 4vw;
            width: 100%;
            border-bottom: 2px solid #737373;
            padding: 10px 0;
            color: #ffffff;

            &::placeholder {
                color: #737373;
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
    }

`;