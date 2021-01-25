import React, { Component } from 'react';
import { Container } from './styles';
import SearchBar from '../../components/SearchBar';

const Header = (props) => {
    return (
        <Container>
            <p>{`Olá, você está na mesa ${props.table}.`}</p>
            <SearchBar/>                    
        </Container>
    )
}

export default Header;