
function ContentDash() {
    return (
        <div className="details">
            <div className="recentOrders">
                <div className="cardHeader">
                    <h2>Lista Categorias</h2>
                    <a href={"/incluir-categoria"} className="btn"><i className="fas fa-plus-circle"></i> Adicionar</a>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>Nome</td>
                            <td>Ações</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Pets Cidade Dutra</td>
                            <td><span><i title="Editar" className="far fa-edit"></i> <i title="Deletar" className="far fa-trash-alt"></i></span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default ContentDash;
