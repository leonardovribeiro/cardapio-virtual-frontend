import React, { Component } from 'react';
import { Container } from './styles';
import Navigation from '../../../components/Navigation';
import Header from '../../../components/Header';
import {styled} from 'styled-components';

class Categories extends Component {
    render(){
        return (
            <Container>
                <Header />
                <ul>
                    <li className='img-principal1'>black</li>
                    <li className='img-food1'>red</li>
                    <li className='img-food2'>red</li>
                </ul>
                <ul>
                    <li className='img-principal2'>black</li>
                    <li className='img-food3'>red</li>
                    <li className='img-food4'>red</li>
                </ul>


                
                <Navigation/>
            </Container>
        )
    }
}

export default Categories;