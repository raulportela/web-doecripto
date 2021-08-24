import '../../../styles/nav.scss'
import '../../../styles/header.scss'
import '../../../styles/ConteudoMain.scss'

import Header from '../Header/Header';
import Dash from '../Nav/Nav';
import TableInstituicoes from '../Conteudo/table-instituicoes';


function Main() {
    return (
        <div>
            <Dash></Dash>
            <div className="main">
                <Header></Header>
                <TableInstituicoes></TableInstituicoes>
            </div>

        </div>
    );

}
export default Main;