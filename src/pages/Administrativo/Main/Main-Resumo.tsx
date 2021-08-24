import '../../../styles/nav.scss'
import '../../../styles/header.scss'
import '../../../styles/ConteudoMain.scss'

import Header from '../Header/Header';
import Dash from '../Nav/Nav';
import Resumo from '../Conteudo/Resumo';


function Main() {
    return (
        <div>
            <Dash></Dash>
            <div className="main">
                <Header></Header>
                <Resumo></Resumo>
            </div>

        </div>
    );

}
export default Main;