import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    height: 100vh;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 38px;
    text-transform: uppercase;
    font-weight: bold;
    color: #C8161D ;
`;

export const Form = styled.form`
    max-width: 900px;
    display: flex;
    flex-direction: column;

    input {
        height: 50px;
        padding: 18px;
        border-color: #3a3a3a;
        border-radius: 5px;
        color: #3a3a3a;
        margin-bottom: 10px;

        &::placeholder {
            color: #a8a8b3;
        }
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