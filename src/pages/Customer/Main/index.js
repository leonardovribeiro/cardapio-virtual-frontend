import React, { Component } from 'react';
import {Container} from './styles';
import Header from '../../../components/Header';
import Navigation from '../../../components/Navigation';
class Main extends Component {
    render() {
        return (
            <Container>
                <Header/>
                <h1>Main</h1>
                <Navigation/>
            </Container>
        );
    }
}

export default Main;        