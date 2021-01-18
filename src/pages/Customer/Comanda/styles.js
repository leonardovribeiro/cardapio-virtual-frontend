import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;

`;

export const Wrapper = styled.div`
    flex: 1;
    padding: 20px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 0;
    }
`;

export const Content = styled.div`
    font-size: 18px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid #dedede;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 10px;

    span {
        font-weight: bold;
    }
`;

export const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    span {
        font-size: 24px;
    }
`;

export const Button = styled.button`
    background: #C8161D;
    height: 50px;
    padding: 18px;
    border-radius: 5px;
    border: 0;
    color: #FFFFFF;
    font-weight: bold;
    transition: background-color 0.2s;
    margin: 20px;

    &:hover{
        background: ${shade(0.2, '#C8161D')}
    }
`;
