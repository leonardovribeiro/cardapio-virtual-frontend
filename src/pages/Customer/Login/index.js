import React, { useEffect } from 'react';
import { Container, Title, Form } from './styles';
import { useParams, useHistory } from 'react-router-dom';

const Login = () => {
    const {id} = useParams();
    const history = useHistory();

    useEffect(() => {
        localStorage.setItem('order', '[]');
        localStorage.setItem('comanda', '[]');
        localStorage.setItem('table', JSON.stringify(id));
    })

    function login(){
        history.push('/main')
    }
    
    return (
        <Container>
            <Title>Cardápio Virtual</Title>
            <Form>
                <input placeholder="Digite aqui o seu cpf" type="text" />
                <button onClick={login}>Acessar</button>
            </Form>
        </Container>
    );
}

export default Login;