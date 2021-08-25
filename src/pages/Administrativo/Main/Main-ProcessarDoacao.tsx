import '../../../styles/nav.scss'
import '../../../styles/header.scss'
import '../../../styles/ConteudoMain.scss'

import Header from '../Header/Header';
import Dash from '../Nav/Nav';
import ProcessarDoacao from '../Conteudo/ProcessarDoacao';


function Main() {
    return (
        <div>
            <Dash></Dash>
            <div className="main">
                <Header></Header>
                <ProcessarDoacao></ProcessarDoacao>
            </div>

        </div>
    );

}
export default Main;