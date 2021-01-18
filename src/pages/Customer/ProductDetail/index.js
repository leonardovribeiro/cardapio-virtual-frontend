import React from 'react';
import { Container, Wrapper, Table } from './styles';
import Header from '../../../components/Header';
import Navigation from '../../../components/Navigation';

const ProductDetail = () => {
    return(
        <Container>
            <Header/>
            <Wrapper>   
                <h1>Pizza de Frango com Catupiry</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Donec sit amet ullamcorper sapien, sed scelerisque nunc. Aenean venenatis ex diam, non fringilla odio euismod ac. 
                </p>
                <Table>
                    <tr>
                        <th>Unidade</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                    </tr>
                    <tr>
                        <td>
                            <select>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </td>
                        <td>
                            <select>
                                <option value="200g">200g</option>
                                <option value="200g">300g</option>
                                <option value="200g">400g</option>
                            </select>
                        </td>
                        <td>R$ 100,00</td>
                    </tr>
                </Table>
                <button>Adicionar ao pedido</button>
            </Wrapper>
            <Navigation/>
        </Container>
    );
}

export default ProductDetail;