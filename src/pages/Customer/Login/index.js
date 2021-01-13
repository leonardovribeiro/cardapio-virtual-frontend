import React, { Component } from 'react';
import Button from '../../../components/Button';
import { Title } from './styles';

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
            <div>
                <Title>Cardápio Virtual</Title>
                <form>
                    <label>CPF</label>
                    <input placeholder="111.111.111-11" />
                    <Button text="Acessar"/>
                </form>
            </div>
        );
    }
}

export default Login;