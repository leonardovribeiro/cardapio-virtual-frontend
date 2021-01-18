import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    padding: 20px;

    h1 {
        font-size: 24px;
        margin-bottom: 10px;
    }

    p {
        font-size: 16px;
        margin-bottom: 10px;
    }

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

export const Table = styled.table`  
    padding-bottom: 20px;
    th {
        font-size: 12px;
    }
    td {
        padding: 4px;
    }
    select {
        padding: 10px;
    }
`;