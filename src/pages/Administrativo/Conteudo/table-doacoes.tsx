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
                            <td>Doador</td>
                            <td>Instituição</td>
                            <td>N° Carteira</td>
                            <td>Qtd Moeda</td>
                            <td>Vlr BRL</td>
                            <td>Status</td>
                            <td>Ações</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Jeferson</td>
                            <td>Pets</td>
                            <td>123456</td>
                            <td>54</td>
                            <td>108</td>
                            <td><span className="status pgtook">Ativo</span></td>
                            <td><span><i title="Processar Doação" className="fas fa-gifts"></i></span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default ContentDash;
