import React, { Component } from 'react';
import { Container } from './styles';
import Navigation from '../../../components/Navigation';
import Header from '../../../components/Header';

class Help extends Component {
    render(){
        return (
            <Container>
                <Header />
                <h1>Help</h1>
                <Navigation/>
            </Container>
        )
    }
}

export default Help;