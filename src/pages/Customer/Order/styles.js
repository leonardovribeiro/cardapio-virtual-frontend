import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`;

export const Wrapper = styled.div`
    padding: 10px;

    h1 {
        font-size: 18px;
        margin-bottom: 10px;
    }
`;

export const Item = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-top: 1px solid #dedede;
    border-bottom: 1px solid #dedede;

    font-size: 12px;

    select {
        padding: 5px;
        margin: 0 1px;
    }
`;

export const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 20px 0;

    button {
        background: #C8161D;
        height: 50px;
        padding: 18px;
        border-radius: 5px;
        border: 0;
        color: #FFFFFF;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover{
            background: ${shade(0.2, '#C8161D')}
        }
    }
`;
