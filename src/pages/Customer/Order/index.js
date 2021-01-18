import React, { Component } from 'react';
import { Container, Wrapper, Item, Box } from './styles';
import Navigation from '../../../components/Navigation';
import Header from '../../../components/Header';
class Order extends Component {

    render(){
        return (
            <Container>
                <Header />
                <Container>
                    <Wrapper>
                        <h1>Seu pedido</h1>
                        <Item>
                                <span>Pizza de Frango com Catupiry</span>
                                <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>

                                <select>
                                    <option value="200g">200g</option>
                                    <option value="300g">300g</option>
                                    <option value="400g">400g</option>
                                </select>
                                <span>R$ 100,00</span>
                        </Item>
                        <Item>
                                <span>Pizza de Frango com Catupiry</span>
                                <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>

                                <select>
                                    <option value="200g">200g</option>
                                    <option value="300g">300g</option>
                                    <option value="400g">400g</option>
                                </select>
                                <span>R$ 100,00</span>
                        </Item>
                        <Item>
                                <span>Pizza de Frango com Catupiry</span>
                                <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>

                                <select>
                                    <option value="200g">200g</option>
                                    <option value="300g">300g</option>
                                    <option value="400g">400g</option>
                                </select>
                                <span>R$ 100,00</span>
                        </Item>
                        <Item>
                                <span>Pizza de Frango com Catupiry</span>
                                <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>

                                <select>
                                    <option value="200g">200g</option>
                                    <option value="300g">300g</option>
                                    <option value="400g">400g</option>
                                </select>
                                <span>R$ 100,00</span>
                        </Item>
                        <Item>
                                <span>Pizza de Frango com Catupiry</span>
                                <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>

                                <select>
                                    <option value="200g">200g</option>
                                    <option value="300g">300g</option>
                                    <option value="400g">400g</option>
                                </select>
                                <span>R$ 100,00</span>
                        </Item>   
                    </Wrapper>
                    <Box>
                        <button onClick={
                            () => this.props.history.push('/main')
                        }>Fazer pedido</button>
                        <button onClick={
                            () => this.props.history.push('/main')
                        }>Cancelar</button>
                    </Box>
                </Container>
                <Navigation/>
            </Container>
        )
    }
}

export default Order;