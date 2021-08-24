import React from "react";
import '../../../styles/ConteudoMain.scss'
import foto1 from '../../../img/img1.jpg'
import foto2 from '../../../img/img2.jpg'
import foto3 from '../../../img/img3.jpg'
import foto4 from '../../../img/img4.jpg'


function ContentDash() {
    return (
        <div className="details">
            <div className="recentOrders">
                <div className="cardHeader">
                    <h2>Instituições</h2>
                    <a href="#" className="btn"><i className="fas fa-plus-circle"></i> Adicionar</a>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>Nome</td>
                            <td>Categoria</td>
                            <td>N° Carteira</td>
                            <td>Link</td>
                            <td>Status</td>
                            <td>Ações</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Pets Cidade Dutra</td>
                            <td>Cachorro</td>
                            <td>123456</td>
                            <td><i title="Ir até o link" className="fas fa-external-link-alt"></i> <i title="Copiar Link" className="far fa-copy"></i></td>
                            <td><span className="status pgtook">Ativo</span></td>
                            <td><span><i title="Editar" className="far fa-edit"></i> <i title="Deletar" className="far fa-trash-alt"></i></span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default ContentDash;