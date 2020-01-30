import styled from 'styled-components';
import '../../assets/fonts/index.css';

export const MainContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    main {
        width: 100%;
        padding: 20px;
        font-family: 'Rubik', sans-serif;

        h1 {
            text-align: center;
            font-weight: bold;
        }

        .container {
            display: flex;
            flex-direction: row;
            justify-content: space-around
        }
    }
`;