import styled from 'styled-components';

export const HeaderContainer = styled.header`
    background-color: #151614;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    img {
        max-width: 180px;
    }

    form {
        display: flex;
        flex-direction: row;
        align-items: center;
        border-radius: 5px;
        transition: all .2s;

        &:hover {
            box-shadow: 0px 0px 15px 2px #CCFF00;
            
            input[type="text"]::placeholder {
                color: #CCFF00;
            }
        }

        * {
            &:focus {
                outline: none;
            }
        }

        input[type="text"] {
            background-color: #333333;
            padding: 15px;
            box-sizing: border-box;
            border: 0;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            height: 45px;
            width: 300px;
            transition: all .2s;
        }

        button {
            background-color: #333333;
            height: 45px;
            border: 0;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            padding-right: 15px;

            &:hover {
                cursor: pointer;
            }

            img {
                width: 15px;
            }
        }

    }

`;