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