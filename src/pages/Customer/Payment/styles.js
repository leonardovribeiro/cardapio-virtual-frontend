import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 20px;

    p {
        margin-bottom: 10px;
    }

    label {
        margin-left: 6px;
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

export const Wrapper = styled.div`
    margin-bottom: 10px;
`;