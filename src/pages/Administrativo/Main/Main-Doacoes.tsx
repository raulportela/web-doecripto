import '../../../styles/nav.scss'
import '../../../styles/header.scss'
import '../../../styles/ConteudoMain.scss'

import Header from '../Header/Header';
import Dash from '../Nav/Nav';
import TableDoacoes from '../Conteudo/table-doacoes';


function Main() {
    return (
        <div>
            <Dash></Dash>
            <div className="main">
                <Header></Header>
                <TableDoacoes></TableDoacoes>
            </div>

        </div>
    );

}
export default Main;