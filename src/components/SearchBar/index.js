import React, { Component } from 'react';
import { Form } from './styles';
import { FiSearch } from 'react-icons/fi';

class SearchBar extends Component {
    render(){
        return (
            <Form action="">
                <input type="text" placeholder="Produto"/>
                <button><FiSearch size={18}/></button>
            </Form>   
        )
    }
}

export default SearchBar;