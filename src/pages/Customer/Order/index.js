import React, { Component } from 'react';
import { Container } from './styles';
import Navigation from '../../../components/Navigation';
import Header from '../../../components/Header';

class Order extends Component {
    render(){
        return (
            <Container>
                <Header />
                <h1>Pedidos</h1>
                <Navigation/>
            </Container>
        )
    }
}

export default Order;