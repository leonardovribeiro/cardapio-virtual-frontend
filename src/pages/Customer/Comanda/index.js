import React from 'react';
import { Container, Wrapper, Content, Box, Button } from './styles';
import Navigation from '../../../components/Navigation';
import Header from '../../../components/Header';
import { useHistory } from 'react-router-dom';

const Comanda = () => {
    const history = useHistory();
    return (
        <Container>
            <Header />
            <Wrapper>
                <Content>
                    <span>#20200001</span>
                    <span>R$ 100,00</span>
                </Content>
                <Content>
                    <span>#20200001</span>
                    <span>R$ 100,00</span>
                </Content>
                <Content>
                    <span>#20200001</span>
                    <span>R$ 100,00</span>
                </Content>
                <Content>
                    <span>#20200001</span>
                    <span>R$ 100,00</span>
                </Content>
                <Content>
                    <span>#20200001</span>
                    <span>R$ 100,00</span>
                </Content>
                <Content>
                    <span>#20200001</span>
                    <span>R$ 100,00</span>
                </Content>
                <Content>
                    <span>#20200001</span>
                    <span>R$ 100,00</span>
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