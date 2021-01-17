import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from '../pages/Index';
import Login from '../pages/Customer/Login';
import Main from '../pages/Customer/Main';
import Categories from '../pages/Customer/Categories';
import Error from '../pages/Error';
import Order from '../pages/Customer/Order';
import Comanda from '../pages/Customer/Comanda';
import Payment from '../pages/Customer/Payment';
import Help from '../pages/Customer/Help';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Index}/>
            <Route exact path="/acessar/:id" component={Login}/>
            <Route exact path="/main" component={Main}/>
            <Route exact path="/categories" component={Categories}/>
            <Route exact path="/order" component={Order}/>
            <Route exact path="/comanda" component={Comanda}/>
            <Route exact path="/payment" component={Payment}/>
            <Route exact path="/help" component={Help}/>
            <Route path="*" component={Error}/>
        </Switch>
    )
};

export default Routes;