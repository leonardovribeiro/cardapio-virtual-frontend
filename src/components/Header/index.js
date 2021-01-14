import React, { Component } from 'react';
import { Container } from './styles';
import SearchBar from '../../components/SearchBar';

class Header extends Component {
    render(){
        return (
            <Container>
                <p>Olá, você está na mesa 5.</p>
                <SearchBar/>                    
            </Container>
        )
    }
}

export default Header;