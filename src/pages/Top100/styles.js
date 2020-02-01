import styled from 'styled-components';

export const RankingContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
    position: relative;

    h1 {
        text-align: center;
        font-weight: bolder;
        font-size: 24px;
        text-transform: uppercase;
        color: #2d2d2d;
        display: flex;
        flex-direction: column;
        margin: 20px;
    }

    select {
        width: 150px;
        height: 40px;
        background-color: #f1f1f1;
        border-radius: 5px;
        border: 0;
        font-weight: bold;
        font-size: 20px;
        margin: 0 60px 20px;
        transition: all .3s;

        &:focus {
            outline: none;
        }

        @media (max-width: 700px) {
            & {
                margin: 0 40px 20px;
                width: 130px;
                height: 35px;
                font-size: 18px;
            }
        }

        @media (max-width: 500px) {
            & {
                margin: 0 20px 20px;
                width: 110px;
                height: 30px;
                font-size: 16px;
            }
        }

    }

    @media (max-width: 460px) {
        h1 {
            font-size: 20px;
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

        @media (max-width: 460px) {
            & {
                width: 70px;
            }
        }
    }
`

export const CardContainer = styled.div`
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 60px;

    @media (max-width: 700px) {
        & {
            margin: 0 40px;
        }
    }

    @media (max-width: 500px) {
        & {
            margin: 0 20px;
        }
    }

    div {
        max-width: 200px;

        p {
            font-size: 16px;
            margin: 5px;

            @media (max-width: 500px) {
                & {
                    font-size: 14px;
                }
            }
        }

        p:first-child {
            color: #024B7B;
            margin-bottom: 2px;
            font-size: 16px;
            font-weight: bold;

            a {
                color: #024B7B;
                margin-bottom: 2px;
                font-size: 16px;
                font-weight: bold;
                text-decoration: none;

                &:hover {
                    color: #021E7B;
                }

                @media (max-width: 500px) {
                    & {
                        font-size: 15px;
                    }
                }
            }
        }

    }

`

export const Score = styled.p`
    background-color: #f1f1f1;
    text-align: center;
    border-radius: 5px;
    font-size: 12px !important;
    width: 80px;
    padding: 3px;

    @media (max-width: 500px) {
        & {
            font-size: 11px;
        }
    }
`

export const Ordinal = styled.p`
    font-size: 40px;
    font-weight: bold;
    color: #969696;
    width: 40px;
    margin-right: 30px;

    @media (max-width: 500px) {
        & {
            font-size: 28px;
            width: 28px;
            margin-right: 20px;
        }
    }
`

export const OrdinalLessThanTen = styled(Ordinal)`
    font-size: 32px;

    @media (max-width: 460px) {
        & {
            font-size: 22px;
        }
    }
`

export const PictureArt = styled.div`
    width: 60px;
    height: 60px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    margin-right: 10px;

    img {
        height: 100%;
    }

    @media (max-width: 500px) {
        & {
            width: 35px;
            height: 35px;
        }
    }
`

export const PictureAlb = styled(PictureArt)`
    border-radius: 5px;
`;

export const BackButton = styled.button`
    background-color: transparent;
    border: 0;
    margin: 10px 40px 0;
    font-size: 14px;
    font-family: 'Rubik', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    color: #024B7B;

    @media (min-width: 700px) {
        & {
            margin: 20px 60px 0;
            font-size: 15px;
        }
    }

    @media (max-width: 500px) {
        & {
            margin: 20px 20px 0;
            font-size: 12px;
        }
    }

    &:hover {
        color: #041591;
        cursor: pointer;
    }

    &:focus {
        outline: none;
    }
`