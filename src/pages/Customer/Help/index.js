import React, { Component } from 'react';
import { Container, Form, Wrapper} from './styles';
import Navigation from '../../../components/Navigation';
import Header from '../../../components/Header';

class Help extends Component {
    render(){
        return (
            <Container>
                <Header />
                <Form>
                    <p>Selecione um ou mais campos e clique em enviar e alguém irá lhe atender.</p>
                    <Wrapper>
                        <input type="checkbox" />
                        <label>Problema com pedido</label>
                    </Wrapper>
                    <Wrapper>
                        <input type="checkbox" />
                        <label>Problema com o pagamento.</label>
                    </Wrapper>
                    <Wrapper>
                        <input type="checkbox" />
                        <label>Outro</label>
                    </Wrapper>
                    <button>Enviar</button>
                </Form>
                <Navigation/>
            </Container>
        )
    }
}

export default Help;