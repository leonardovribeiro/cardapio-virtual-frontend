import styled from 'styled-components';
import { shade } from 'polished';

export const Form = styled.form`
    display: flex;
    margin-top: 10px;

    input {
        flex: 1;
        height: 40px;
        padding: 12px;
        border: 1px;
        border-color: #000000;
        border-radius: 5px 0px 0px 5px;
        color: #3a3a3a;

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        background: #000000;
        height: 40px;
        padding: 12px;
        border-radius: 0px 5px 5px 0px;
        border: 0;
        color: #FFFFFF;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover{
            background: ${shade(0.2, '#ffffff')}
        }
    }
`;