import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    h3 {
        font-size: 16px;
        font-weight: normal;
        margin-bottom: 6px;
    }

    & + div {
        margin-top: 20px;
    }
`;

export const Wrapper = styled.div`
    max-height: 200px;
    border: 1px solid #ddd;
    display: flex;
    overflow-x: auto;

    &::-webkit-scrollbar {
        width: 0;
    }
`;