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

    div {
        p {
            font-size: 16px;
            margin: 5px;
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
`

export const Ordinal = styled.p`
    font-size: 40px;
    font-weight: bold;
    color: #969696;
    width: 40px;
    margin-right: 40px;

    @media (max-width: 460px) {
        & {
            font-size: 28px;
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
`

export const PictureAlb = styled(PictureArt)`
    border-radius: 5px;
`;