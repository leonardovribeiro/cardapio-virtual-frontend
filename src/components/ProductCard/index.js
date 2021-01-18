import React, { Component } from 'react';
import { Container } from './styles';

class ProductCard extends Component {
    render(){
        return (
            <Container>
                <a href="/product-detail">
                    <img src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg" alt="food"/>
                    <p>Pizza de Frango com Catupiry</p>
                    <span>R$ 12.00</span>
                </a>
            </Container>
        )
    }
}

export default ProductCard;