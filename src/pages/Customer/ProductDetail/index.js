import React, { useState, useEffect} from 'react';
import { Container, Wrapper, Table } from './styles';
import Header from '../../../components/Header';
import Navigation from '../../../components/Navigation';
import { useHistory, useParams } from 'react-router-dom';
import { getProduct } from '../../../services/api';

const ProductDetail = (props) => {
    const history = useHistory();
    const [product, setProduct] = useState([]);
    const [total, setTotal] = useState(100);
    const [unit, setUnit] = useState(1);
    const { id } = useParams();

    useEffect(() => {
        let mounted = true;
        getProduct(id)
          .then(item => {
            if(mounted) {
              setProduct(item);
              setTotal(item.price);
            }
          })

        return () => mounted = false;
      }, [])
    
      function update(e){
        setTotal(e.target.value * product.price);
        setUnit(e.target.value);
        e.preventDefault();
      }

    

    return(
        <Container>
            <Header/>
            <Wrapper>
                <h1>{ product.name }</h1>
                <p>{ product.description }</p>
                <Table>
                    <tr>
                        <th>Unidade</th>
                        <th>Valor</th>
                    </tr>
                    <tr>
                        <td>
                            <select onChange={update}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </td>
                        <td>{`R$ ${total}`}</td>
                    </tr>
                </Table>
                <button onClick={() => {
                    var order = JSON.parse(localStorage.getItem('order'));
                    
                    if (order !== null){
                        order.forEach( item => {
                            if (item.id === product.id){
                                order.pop(item);
                            }
                        });
                    }
                    order.push({id:product.id, name: product.name, quantity: unit, value: total});
                    localStorage.setItem('order', JSON.stringify(order))
                    history.push('/order');
                }} >Adicionar ao pedido</button>
            </Wrapper>
            <Navigation/>
        </Container>
    );
}

export default ProductDetail;