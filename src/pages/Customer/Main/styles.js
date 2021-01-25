import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`;

export const Content = styled.div`
    flex: 1;
    padding: 10px 20px;

`;

export const HorizontalScrollContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    h3 {
        font-size: 16px;
        font-weight: normal;
        margin-bottom: 6px;
    }

    & + div {
        margin-top: 20px;
    }
`

export const Wrapper = styled.div`
    max-height: 200px;
    border: 1px solid #ddd;
    display: flex;
    overflow-x: auto;

    &::-webkit-scrollbar {
        width: 0;
    }
`;

export const Title = styled.h3`
    font-size: 18px;
    font-weight: normal;
    margin-bottom: 6px;
`;

