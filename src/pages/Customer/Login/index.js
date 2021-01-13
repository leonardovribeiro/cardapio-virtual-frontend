import React, { Component } from 'react';
import { Container, Title, Form } from './styles';

class Login extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            form: {
                username: '',
                table: 0
            }
        }
    }

    componentDidMount(){
        const { id } = this.props.match.params;
        console.log(id);
    }

    render() {
        return (
            <Container>
                <Title>Cardápio Virtual</Title>
                <Form action="">
                    <input placeholder="Digite aqui o seu cpf" type="text" />
                    <button type="submit">Acessar</button>
                </Form>
            </Container>
        );
    }
}

export default Login;