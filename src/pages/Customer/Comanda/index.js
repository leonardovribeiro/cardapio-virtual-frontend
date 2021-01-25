import React, { useEffect, useState } from 'react';
import { Container, Wrapper, Content, Box, Button } from './styles';
import Navigation from '../../../components/Navigation';
import Header from '../../../components/Header';
import { useHistory } from 'react-router-dom';

const Comanda = () => {
    const history = useHistory();
    let comandaJSON = JSON.parse(localStorage.getItem('comanda'));
    const [order, setOrder] = useState([]);

    useEffect(() => {
       console.log(comandaJSON);
        comandaJSON.forEach( item => {
            order.push(item);
        });
        console.log(order);
    }, []);
    return (
        <Container>
            <Header />
            <Wrapper>
                <Content>
                    
                </Content>
                <Box>
                    <span>R$ 500,00</span>
                </Box>
  
            </Wrapper>
            <Button onClick={() => history.push('/payment')}>Ir para o pagamento</Button>
            <Navigation/>
        </Container>
    )
}

export default Comanda;