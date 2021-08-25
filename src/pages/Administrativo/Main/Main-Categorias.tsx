import '../../../styles/nav.scss'
import '../../../styles/header.scss'
import '../../../styles/ConteudoMain.scss'

import Header from '../Header/Header';
import Dash from '../Nav/Nav';
import TableCategorias from '../Conteudo/table-categorias';


function Main() {
    return (
        <div>
            <Dash></Dash>
            <div className="main">
                <Header></Header>
                <TableCategorias></TableCategorias>
            </div>

        </div>
    );

}
export default Main;