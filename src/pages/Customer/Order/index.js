import React, { useEffect, useState } from 'react';
import { Container, Wrapper, Item, Box } from './styles';
import Navigation from '../../../components/Navigation';
import Header from '../../../components/Header';
import { useHistory } from 'react-router-dom';

const Order = () => {     
    const [order, setOrder] = useState(JSON.parse(localStorage.getItem('order')));
    const [total, setTotal] = useState(0);
    const history = useHistory();
    let sum = 0;
    
    useEffect(() => {
        getTotal();
    },[])
    
    function getTotal(){
        order.forEach( item => {
            sum += item.value;
        });
        setTotal(sum);
    }
    function cancel(){
        localStorage.setItem('order', '[]');
        history.go(0);
    }

    function makeAWish(){
        history.push('/comanda');
    }

    function list(){
        return (order !== null && order.map( item =>
            item !== null &&
            <Item key={item.id}>
                <span>{item.name}</span>
                <select disabled>
                    <option value={item.quantity}>{item.quantity}</option>
                </select>
                <span>{`R$ ${item.value}`}</span>
            </Item>
            ))
    }
    
        return (
            <Container>
                <Header />
                <Container>
                    <Wrapper>
                        <h1>Seu pedido</h1>
                        {list()}
                        {`R$ ${total}`}
                    </Wrapper>
                    <Box>
                        <button onClick={makeAWish}>Fazer pedido</button>
                        <button onClick={cancel}>Cancelar</button>
                    </Box>
                </Container>
                <Navigation/>
            </Container>
        )
    }

export default Order;