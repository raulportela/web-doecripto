import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './Administrativo/Login/Login'
import Main from './Administrativo/Main/Main-Resumo'
import TableInsituicoes from './Administrativo/Main/Main-Instituicoes'
import TableDoacoes from './Administrativo/Main/Main-Doacoes'
import TableCategorias from './Administrativo/Main/Main-Categorias'
import IncluirInstituicao from './Administrativo/Main/Main-IncluirInstituicao'
import IncluirCategoria from './Administrativo/Main/Main-IncluirCategoria'
import ProcessarDoacao from './Administrativo/Main/Main-ProcessarDoacao'
import APICC from './Administrativo/Main/Main-AlterarAPICC'
import AlterarInflacao from './Administrativo/Main/Main-AlterarInflacao'


function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/resumo" component={Main}/>
                <Route path="/login" component={Login}/>
                <Route path="/table-instituicoes" component={TableInsituicoes}/>
                <Route path="/table-doacoes" component={TableDoacoes}/>
                <Route path="/table-categorias" component={TableCategorias}/>
                <Route path="/incluir-instituicao" component={IncluirInstituicao}/>
                <Route path="/incluir-categoria" component={IncluirCategoria}/>
                <Route path="/processar-doacao" component={ProcessarDoacao}/>
                <Route path="/alterar-api-cc" component={APICC}/>
                <Route path="/alterar-inflacao" component={AlterarInflacao}/>
                
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;