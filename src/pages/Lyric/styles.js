import styled from 'styled-components';
import '../../assets/fonts/index.css';

export const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 127px);
`

export const ContainerLyric = styled.div`
    padding: 0 20px 20px 20px;
    position: relative;
    min-height: calc(100vh - 127px);

    @media (max-width: 600px) {
        & {
            padding: 0 10px 10px 10px;
        }
    }
`

export const ErrorMessage = styled.div`
    width: 100%;
    height: calc(100vh - 127px);
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        font-family: 'Rubik', sans-serif;
        font-size: 24px;
    }
`

export const Lyrics = styled.div`
    font-family: 'Rubik', sans-serif;
    color: #2D2D2D;

    h2 {
        text-align: center;
        font-size: 30px;
        font-weight: 800;
        margin: 10px;

        @media (max-width: 600px) {
            & {
                font-size: 24px;
            }
        }
    }

    h3 {
        text-align: center;
        font-size: 14px;
        font-weight: 600;
        margin: 10px;
        color: #006688;

        @media (max-width: 600px) {
            & {
                font-size: 12px;
            }
        }
    }

`

export const ContainerLyrics = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 600px) {
        & {
            flex-direction: column;
        }
    }
`

export const OriginalLyric = styled.div`
    width: 400px;
    margin: 15px;
    text-align: ${props => `${props.alignLyric}`};
    font-size: 18px;

    h4 {
        font-weight: bold;
    }

    @media (max-width: 600px) {
        & {
            width: 90%;
            text-align: left;
            margin: 10px 10px 20px 10px;
            font-size: 16px;
        }
    }

`

export const TranslateLyric = styled(OriginalLyric)`
    text-align: left;
`

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

export const BackButton = styled.button`
    background-color: transparent;
    border: 0;
    margin: 10px 0 0;
    padding: 10px 0 0 20px;
    font-size: 12px;
    font-family: 'Rubik', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    color: #024B7B;

    @media (min-width: 600px) {
        & {
            padding: 10px 0 0 20px;
            margin: 10px 10vw 20px;
            font-size: 15px;
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