import styled from 'styled-components';
import '../../assets/fonts/index.css';

export const MainContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    main {
        width: 100%;
        height: calc(100vh - 87px);
        padding: 20px;
        box-sizing: border-box;
        font-family: 'Rubik', sans-serif;

        h1 {
            text-align: center;
            font-weight: bolder;
            font-size: 24px;
            text-transform: uppercase;
            color: #2d2d2d;
            display: flex;
            flex-direction: column;

            span {
                font-weight: 200;
                font-size: 14px;
                color: #737373;
                margin: 10px;
            }
        }

        @media (max-width: 460px) {
            h1 {
                font-size: 20px;
                
                span {
                    font-size: 12px;
                }
            }

        }
    }
`;

export const LoadingImage = styled.div`
    width: 100%;
    height: calc(100vh - 187px);
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100px;
    }
`

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    height: calc(100% - 40px);
`;

export const CardContainer = styled.div`
    width: 400px;
    height: 90%;
    border: 1px solid #e3e3e3;
    box-shadow: 0 0 15px #c4c4c4;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 1000px) {
        & {
            margin: 20px;
            margin-bottom: 0;
        }
    }

    @media (max-width: 940px) {
        & {
            width: 70%;
        }
    }

    @media (max-width: 650px) {
        & {
            width: 100%;
            margin: 20px 0 0;
        }
    }

    @media (max-width: 460px) {
        & {
            max-width: 100%;

            h2 {
                font-size: 24px !important;
            }
        }

    }

    h2 {
        text-align: center;
        font-weight: bolder;
        font-size: 32px;
        color: #2d2d2d;
    }

    ol {
        li {
            display: flex;
            flex-direction: row;
            align-items: center;
            border-bottom: 1px solid #F1F1F1;
            height: 60px;

            &:hover {
                background-color: #F1F1F1;
            }

            &:last-child {
                border: 0;
            }

            @media (max-width: 460px) {
                & {
                    height: 50px;
                }
            }

            div {
                p {
                    font-weight: bold;
                    font-size: 14px;
                }

                p:first-child {
                    color: #024B7B;
                    margin-bottom: 2px;
                    font-size: 16px;
                }

                @media (max-width: 460px) {
                    & {
                        p {
                            font-size: 11px;
                        }

                        p:first-child {
                            font-size: 13px;
                        }
                    }
                }

            }
        }

    }
`

export const Ordinal = styled.p`
    font-size: 40px;
    font-weight: bold;
    color: #969696;
    width: 40px;
    margin-right: 10px;

    @media (max-width: 460px) {
        & {
            font-size: 28px;
        }
    }
`

export const ButtonTop = styled.button`
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 15px;
    padding: 15px;
    background-color: #49A8D7;
    border: 0;
    border-radius: 5px;
    width: 100%;
    color: #ffffff;
    transition: all .2s;
    margin-top: 10px;

    &:hover {
        background-color: #49C2D7;
        cursor: pointer;
    }

    @media (max-width: 460px) {
        padding: 10px;
        font-size: 12px;
    }
`

export const PictureArt = styled.div`
    width: 40px;
    height: 40px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    margin-right: 10px;

    img {
        height: 100%;
    }
`