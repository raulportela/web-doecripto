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
                    <h2>Doações Recentes</h2>
                    <a href="#" className="btn">Ver todas</a>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>Doador</td>
                            <td>Moedas</td>
                            <td>R$ BRL</td>
                            <td>Instituição</td>
                            <td>Pagamento</td>
                            <td>Processo</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Jeferson Nolasco</td>
                            <td>120</td>
                            <td>R$1200</td>
                            <td>Pets</td>
                            <td><span className="status pgtook">Pgto OK</span></td>
                            <td><span className="status aberto">Aberto</span></td>
                        </tr>
                        <tr>
                            <td>Jeferson Nolasco</td>
                            <td>120</td>
                            <td>R$1200</td>
                            <td>Pets</td>
                            <td><span className="status pgtook">Pgto OK</span></td>
                            <td><span className="status aberto">Aberto</span></td>
                        </tr>
                        <tr>
                            <td>Jeferson Nolasco</td>
                            <td>120</td>
                            <td>R$1200</td>
                            <td>Pets</td>
                            <td><span className="status pgtorecusado">Pendente</span></td>
                            <td><span className="status fechado">Fechado</span></td>
                        </tr>
                        <tr>
                            <td>Jeferson Nolasco</td>
                            <td>120</td>
                            <td>R$1200</td>
                            <td>Pets</td>
                            <td><span className="status pgtook">Pgto OK</span></td>
                            <td><span className="status fechado">Fechado</span></td>
                        </tr>
                        <tr>
                            <td>Jeferson Nolasco</td>
                            <td>120</td>
                            <td>R$1200</td>
                            <td>Pets</td>
                            <td><span className="status pgtook">Pgto OK</span></td>
                            <td><span className="status fechado">Fechado</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default ContentDash;
