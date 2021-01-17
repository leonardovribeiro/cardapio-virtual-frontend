import React from 'react';
import { Container, Form, Wrapper } from './styles';
import Header from '../../../components/Header';
import Navigation from '../../../components/Navigation';

export const Payment = () => {

    return (
        <>
            <Container>
                <Header/>
                    <Form>
                        <p>Selecione um método de pagamento:</p>
                        <Wrapper>
                            <input type="radio" value="Dinheiro"/>
                            <label>Dinheiro</label>
                        </Wrapper>
                        <Wrapper>
                            <input type="radio" value="Cartão de Crédio"/>
                            <label>Cartão de Crédio</label>
                        </Wrapper>
                        <Wrapper>
                            <input type="radio" value="Cartão de Débito"/>
                            <label>Cartão de Débito</label>
                        </Wrapper>
                        <Wrapper>
                            <input type="radio" value="QR Code"/>
                            <label>QR Code</label>
                        </Wrapper>
                        <button>Pagar</button>
                    </Form>
                <Navigation/>
            </Container>
        </>
    )

}

export default Payment;