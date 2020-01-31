import styled from 'styled-components';
import '../../assets/fonts/index.css';

export const ContainerLyric = styled.div`
    padding: 20px;
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
        font-size: 28px;
        font-weight: 800;
        margin: 10px;
    }

    h3 {
        text-align: center;
        font-size: 16px;
        font-weight: 600;
        margin: 10px;
        color: #006688;
    }

`

export const ContainerLyrics = styled.div`
    display: flex;
    justify-content: center;
`

export const OriginalLyric = styled.div`
    max-width: 400px;
    margin: 15px;
    text-align: right;
`

export const TranslateLyric = styled(OriginalLyric)`
    text-align: left;
`