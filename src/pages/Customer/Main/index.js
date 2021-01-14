import React, { Component } from 'react';
import {Container, Content} from './styles';
import Header from '../../../components/Header';
import Navigation from '../../../components/Navigation';
import HorizontalScrollView from '../../../components/HorizontalScrollView';
class Main extends Component {
    render() {
        return (
            <Container>
                <Header/>
                <Content>
                    <HorizontalScrollView title="Mais pedidos"/>
                    <HorizontalScrollView title="Promoções"/>
                </Content>
                <Navigation/>
            </Container>
        );
    }
}

export default Main;        