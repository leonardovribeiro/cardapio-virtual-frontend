import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`;

export const Header = styled.header`
    padding: 20px;
    background: #C8161D;

    p {
        font-size: 16px;
        color: #FFFFFF;
    }

    span {
        font-size: 12px;
        text-transform: uppercase;
        font-weight: bold;
        color: #FFFFFF;
    }
`;

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

export const Navigation = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #C8161D;
    padding: 10px 20px;
    
    a {
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: #FFFFFF;
        transition: background-color 0.2s;

        span {
        font-size: 12px;
        }

        &:hover{
            background: ${shade(0.2, '#ffffff')}
        }
    }

`;


