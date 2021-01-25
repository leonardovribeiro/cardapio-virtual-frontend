import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../../components/Header';
import Navigation from '../../../components/Navigation';
import ProductCard from '../../../components/ProductCard';
import { Container, Wrapper } from './styles';
import { getProductsByCategory } from '../../../services/api';


const CategoryItems = () => {
    const [products, setProducts] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        let mounted = true;
        getProductsByCategory(id)
          .then(item => {
            if(mounted) {
              setProducts(item);
            }
          })
        return () => mounted = false;
      },[])  
    
    return (
        <Container>
            <Header/>
            <Wrapper>
                { products !== null &&
                    products.map( item => {
                        return (
                            <div key={item.id}>
                                <ProductCard  id={item.id} name={item.name} price={item.price}/>
                            </div>
                        );
                    })
                }
            </Wrapper>
            <Navigation/>
        </Container>
    )
}

export default CategoryItems;