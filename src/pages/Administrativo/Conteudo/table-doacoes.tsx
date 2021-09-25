import '../../../styles/ConteudoMain.scss'


function ContentDash() {
    return (
        <div className="details">
            <div className="recentOrders">
                <div className="cardHeader">
                    <h2>Lista Instituições</h2>
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
                            <td><span><a href={"/processar-doacao"}><i title="Processar Doação" className="fas fa-gifts"></i></a></span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default ContentDash;
