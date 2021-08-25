import '../../../styles/nav.scss'
import '../../../styles/header.scss'
import '../../../styles/ConteudoMain.scss'

import Header from '../Header/Header';
import Dash from '../Nav/Nav';
import AlterarInflacao from '../Conteudo/AlterarInflacao';


function Main() {
    return (
        <div>
            <Dash></Dash>
            <div className="main">
                <Header></Header>
                <AlterarInflacao></AlterarInflacao>
            </div>

        </div>
    );

}
export default Main;