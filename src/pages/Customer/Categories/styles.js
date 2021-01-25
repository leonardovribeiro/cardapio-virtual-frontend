import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`;


export const VerticalScrollView = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   overflow-y: auto;

   &::-webkit-scrollbar {
        width: 0;
    }
`;

export const Category = styled.div`
    max-width: 250px;
    border: 1px solid #ddd;
    border-radius: 5px;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
    }

    &:first-child{
        margin-top: 10px;
    }

    margin-bottom: 10px;
`;
