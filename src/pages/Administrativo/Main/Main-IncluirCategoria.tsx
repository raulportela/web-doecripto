import '../../../styles/nav.scss'
import '../../../styles/header.scss'
import '../../../styles/ConteudoMain.scss'

import Header from '../Header/Header';
import Dash from '../Nav/Nav';
import IncluirCategoria from '../Conteudo/IncluirCategoria';


function Main() {
    return (
        <div>
            <Dash></Dash>
            <div className="main">
                <Header></Header>
                <IncluirCategoria></IncluirCategoria>
            </div>

        </div>
    );

}
export default Main;