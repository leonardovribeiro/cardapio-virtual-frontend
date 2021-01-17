import React from 'react';
import Header from '../../../components/Header';
import Navigation from '../../../components/Navigation';
import ProductCard from '../../../components/ProductCard';
import { Container, Wrapper } from './styles';

const CategoryItems = () => {
    return (
        <Container>
            <Header/>
            <Wrapper>
                <div>
                    <ProductCard/>
                </div>
                <div>
                    <ProductCard/>
                </div>
                <div>
                    <ProductCard/>
                </div>
                <div>
                    <ProductCard/>
                </div>
                <div>
                    <ProductCard/>
                </div>
                <div>
                    <ProductCard/>
                </div>
                <div>
                    <ProductCard/>
                </div>
                <div>
                    <ProductCard/>
                </div>
                <div>
                    <ProductCard/>
                </div>
                <div>
                    <ProductCard/>
                </div>
                <div>
                    <ProductCard/>
                </div>
                <div>
                    <ProductCard/>
                </div>
            </Wrapper>
            <Navigation/>
        </Container>
    )
}

export default CategoryItems;