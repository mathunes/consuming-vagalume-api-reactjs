import styled from 'styled-components';
import '../../assets/fonts/index.css';

export const HeaderContainer = styled.header`
    background-color: #151614;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    font-family: 'Rubik', sans-serif;
    min-height: 90px;

    @media (max-width: 700px) {
        & {
            min-height: 60px;
        }
    }

    img {
        max-width: 180px;
    }

    form {
        display: flex;
        flex-direction: row;
        align-items: center;
        border-radius: 5px;
        transition: all .2s;
        position: relative;

        &:hover {
            box-shadow: 0px 0px 15px 2px #CCFF00;
            
            input[type="text"]::placeholder {
                color: #CCFF00;
            }

            button {
                img:first-child {
                    display: none;
                }

                img:last-child {
                    display: inline;
                }
            }
        }

        * {
            &:focus {
                outline: none;
            }
        }

        input[type="text"] {
            background-color: #333333;
            color: #ffffff;
            padding: 15px;
            box-sizing: border-box;
            border: 0;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            height: 45px;
            width: 300px;
            transition: all .2s;
            font-family: 'Rubik', sans-serif;

            &:hover {
                cursor: pointer;
            }
        }

        button {
            background-color: #333333;
            height: 45px;
            border: 0;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            padding-right: 15px;

            img {
                width: 15px;
            }

            img:last-child {
                display: none
            }

            &:hover {
                cursor: pointer;
            }

        }

    }

    @media (max-width: 700px) {
        img {
            margin: 0 auto;
            width: 125px;
            padding-left: 20px;
        }

        form {
            position: relative;
            width: 100%;
            height: 100%;

            input[type="text"] {
                display: none;
            }

            &:hover {
                box-shadow: none;
            }

            button {
                background-color: transparent;
                position: absolute;
                padding-right: 20px;
                right: 0;

                img {
                    width: 20px;
                }
            }

        }
    }

    @media (max-width: 400px) {
        img {
            width: 120px;
        }
    }
`;