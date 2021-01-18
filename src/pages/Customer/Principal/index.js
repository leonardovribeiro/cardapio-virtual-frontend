import React, { Component } from 'react';
import { Container } from './styles';
import Navigation from '../../../components/Navigation';
import Header from '../../../components/Header';

class Principal extends Component {
    render(){
        return (
            <Container>
                <Header />
                <h1>Principal</h1>
                <Navigation/>
            </Container>
        )
    }
}

export default Principal;