import React, { Component } from 'react';
import { Container } from './styles';
import { FiMenu, FiSidebar, FiCreditCard, FiShoppingCart, FiHelpCircle } from 'react-icons/fi';

class Navigation extends Component{
    render(){
        return (
            <Container>
                <a href="/main"><FiMenu size={20}/><span>Menu</span></a>
                <a href="/categories"><FiSidebar size={20}/><span>Categorias</span></a>
                <a href="/order"><FiShoppingCart size={20}/><span>Pedido</span></a>
                <a href="/comanda"><FiCreditCard size={20}/><span>Comanda</span></a>
                <a href="/help"><FiHelpCircle size={20}/><span>Ajuda</span></a>
            </Container>    
        )
    }
}

export default Navigation;