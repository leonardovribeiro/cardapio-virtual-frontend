import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`;

export const Wrapper = styled.div`
    display:flex;
    height: 100%;
    width: 100%;
    flex-wrap: wrap;
    overflow-y: auto;
    justify-content: space-evenly;

    div {
        max-height: 200px;
        max-width: 120px;
        margin: 6px;
    }
`;