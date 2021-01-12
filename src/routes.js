import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './pages/Index';
import Login from './pages/Customer/Login';
import Main from './pages/Customer/Main';
import Error from './pages/Error';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route exact path="/acessar/:id" component={Login}/>
                <Route exact path="/main" component={Login}/>
                <Route path="*" component={Error}/>
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;