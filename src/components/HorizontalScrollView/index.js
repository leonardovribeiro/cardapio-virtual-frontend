import React, { Component } from 'react';
import { Container, Wrapper } from './styles';
import ProductCard from '../ProductCard';


class HorizontalScrollView extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Container>
                <h3>{ this.props.title}</h3>
                <Wrapper>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </Wrapper>
            </Container>
        )
    }
}

export default HorizontalScrollView;
