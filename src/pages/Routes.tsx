import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './Administrativo/Login/Login'
import Main from './Administrativo/Main/Main-Resumo'
import TableInsituicoes from './Administrativo/Main/Main-Instituicoes'
import TableDoacoes from './Administrativo/Main/Main-Doacoes'


function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/resumo" component={Main}/>
                <Route path="/login" component={Login}/>
                <Route path="/table-instituicoes" component={TableInsituicoes}/>
                <Route path="/table-doacoes" component={TableDoacoes}/>
                
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;