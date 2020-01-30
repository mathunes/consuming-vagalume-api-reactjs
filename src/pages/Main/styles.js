import styled from 'styled-components';
import '../../assets/fonts/index.css';

export const MainContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    main {
        width: 100%;
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
    }
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around
`;

export const CardContainer = styled.div`
    background-color: #c4c4c4;
`