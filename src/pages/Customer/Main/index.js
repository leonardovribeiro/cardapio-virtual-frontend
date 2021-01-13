import React, { Component } from 'react';
import {Container, Header, Form, Navigation} from './styles';
import { FiSearch, FiMenu, FiSidebar, FiCreditCard, FiShoppingCart, FiHelpCircle } from 'react-icons/fi';
class Main extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <p>Olá, você está na mesa 5.</p>
                    <Form action="">
                        <input type="text" placeholder="Produto"/>
                        <button><FiSearch size={18}/></button>
                    </Form>                           
                </Header>

                <Navigation>
                    <a href="/sobre"><FiMenu size={40}/><span>Menu</span></a>
                    <a href="/sobre"><FiSidebar size={40}/><span>Categorias</span></a>
                    <a href="/sobre"><FiShoppingCart size={40}/><span>Pedido</span></a>
                    <a href="/sobre"><FiCreditCard size={40}/><span>Comanda</span></a>
                    <a href="/sobre"><FiHelpCircle size={40}/><span>Ajuda</span></a>
                </Navigation>       
            </Container>
        );
    }
}

export default Main;        