import { Context } from '../Context/AuthContext'
import history from '../history';
import { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './Administrativo/Login/Login'
import Main from './Administrativo/Main/Main-Home'
import APICC from './Administrativo/Main/Main-AlterarAPICC'
import TableDoacoes from './Administrativo/Main/Main-Doacoes'
import PageInstituto from './Administrativo/Main/Main-PageInstituto'
import TableCategorias from './Administrativo/Main/Main-Categorias'
import ProcessarDoacao from './Administrativo/Main/Main-ProcessarDoacao'
import AlterarInflacao from './Administrativo/Main/Main-AlterarInflacao'
import IncluirCategoria from './Administrativo/Main/Main-IncluirCategoria'
import TableInsituicoes from './Administrativo/Main/Main-Instituicoes'
import IncluirInstituicao from './Administrativo/Main/Main-IncluirInstituicao'



function CustomRoute({ isPrivate,  ...rest}){
    const { authenticated } = useContext(Context);
    
    if(isPrivate && !authenticated){
        console.log('ta entrando nesse caraio?')
        return <Redirect to='/login'/>
    }   

    

    return <Route {...rest}/>

}

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <CustomRoute path="/login" component={Login}/>
                <CustomRoute isPrivate exact path="/"  component={Main}/>
                <CustomRoute isPrivate path="/home" component={Main}/>
                <CustomRoute isPrivate path="/table-instituicoes" component={TableInsituicoes}/>
                <CustomRoute isPrivate path="/table-doacoes" component={TableDoacoes}/>
                <CustomRoute isPrivate path="/table-categorias" component={TableCategorias}/>
                <CustomRoute isPrivate path="/incluir-instituicao" component={IncluirInstituicao}/>
                <CustomRoute isPrivate path="/incluir-categoria" component={IncluirCategoria}/>
                <CustomRoute isPrivate path="/processar-doacao" component={ProcessarDoacao}/>
                <CustomRoute isPrivate path="/alterar-api-cc" component={APICC}/>
                <CustomRoute isPrivate path="/alterar-inflacao" component={AlterarInflacao}/>
                <CustomRoute isPrivate path="/page-instituto" component={PageInstituto}/>
                
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;