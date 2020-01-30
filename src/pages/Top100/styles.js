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