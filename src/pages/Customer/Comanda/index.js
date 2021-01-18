import React, { Component } from 'react';
import { Container } from './styles';
import Navigation from '../../../components/Navigation';
import Header from '../../../components/Header';

class Comanda extends Component {
    render() {
        return (
            <Container>
                <Header />
                <div>
                    <table className='table-comanda'>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Age</th>
                        </tr>
                        <tr>
                            <td>Jill</td>
                            <td>Smith</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>Eve</td>
                            <td>Jackson</td>
                            <td>94</td>
                        </tr>
                    </table>
                </div>
                <Navigation />
            </Container>
        )
    }
}

export default Comanda;