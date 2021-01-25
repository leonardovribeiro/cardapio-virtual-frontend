import React, { useEffect, useState } from 'react';
import {Container, Content, HorizontalScrollContainer, Wrapper, Title} from './styles';
import Header from '../../../components/Header';
import Navigation from '../../../components/Navigation';
import ProductCard from '../../../components/ProductCard';
import { getMaisVendidos, getRecomendados } from '../../../services/api';

const Main = () => {
    const [list, setList] = useState([]);
    const table = JSON.parse(localStorage.getItem('table'));

    useEffect(() => {
        let mounted = true;
        getMaisVendidos()
          .then(items => {
            if(mounted) {
              setList(items)
            }
          })
        getRecomendados()
        .then(items => {
        if(mounted) {
            setList(items);
        }
        })
        return () => mounted = false;
      }, [])

    return(
        <Container>
            <Header table={table}/>
            <Content>
                <Title>Recomendados pela casa</Title>
                <HorizontalScrollContainer>
                    <Wrapper>
                        { list.map( item => <ProductCard key={item.id} id={item.id} name={item.name} price={item.price}/>)}
                    </Wrapper>
                </HorizontalScrollContainer>

                <Title>Mais vendidos</Title>
                <HorizontalScrollContainer>
                    <Wrapper>
                        { list.map( item => <ProductCard key={item.id} id={item.id} name={item.name} price={item.price}/>)}
                    </Wrapper>
                </HorizontalScrollContainer>
            </Content>
            <Navigation/>
        </Container>
    )
}

export default Main;        