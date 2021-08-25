import '../../../styles/nav.scss'
import '../../../styles/header.scss'
import '../../../styles/ConteudoMain.scss'

import Header from '../Header/Header';
import Dash from '../Nav/Nav';
import IncluirInstituicao from '../Conteudo/IncluirInstituicao';


function Main() {
    return (
        <div>
            <Dash></Dash>
            <div className="main">
                <Header></Header>
                <IncluirInstituicao></IncluirInstituicao>
            </div>

        </div>
    );

}
export default Main;