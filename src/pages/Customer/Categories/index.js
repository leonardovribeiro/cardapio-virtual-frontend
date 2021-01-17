import React, { Component } from 'react';
import { Container } from './styles';
import Header from '../../../components/Header';
import VerticalScrollView from '../../../components/VerticalScrollView';
import Navigation from '../../../components/Navigation';

class Categories extends Component {
    render(){
        return (
            <Container>
                <Header />
                <VerticalScrollView/>
                <Navigation/>
            </Container>
        )
    }
}

export default Categories;