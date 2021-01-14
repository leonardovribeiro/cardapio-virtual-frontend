import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.nav`
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
        font-size: 10px;
        }

        &:hover{
            background: ${shade(0.2, '#ffffff')}
        }
    }

`;