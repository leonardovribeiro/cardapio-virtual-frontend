import React, { useEffect, useState } from 'react';
import { Container, VerticalScrollView, Category } from './styles';
import Header from '../../../components/Header';
import Navigation from '../../../components/Navigation';
import { getCategories } from '../../../services/api';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        let mounted = true;
        getCategories()
          .then(items => {
            if(mounted) {
              setCategories(items)
            }
          })

        return () => mounted = false;
      }, [])
    return (
        <Container>
            <Header />
            <VerticalScrollView>
                <Category>
                    { 
                        categories.map( item => {
                            return (
                                <Link to={`/category/${item.id}`} key={item.id}><img src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg" alt="food"/></Link>
                            )
                        })
                    }
                </Category>
            </VerticalScrollView>
            <Navigation/>
        </Container>
    )
}
export default Categories;