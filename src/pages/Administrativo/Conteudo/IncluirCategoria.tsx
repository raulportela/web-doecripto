import '../../../styles/ConteudoMain.scss'
import '../../../styles/form.scss'



function ContentDash() {
    return (
        <div className="details">
            <div className="recentOrders">
                <div className="cardHeader">
                    <h2>Incluir Categoria</h2>
                </div>
                <div className="content-container">
                    <div className="content">
                        <form action="#">
                            <div>
                                <div className="title">Dados institucionais</div>
                                <div className="user-content-details">
                                    <input type="hidden" name="id" id="id"/>
                                    <div className="input-box">
                                        <span className="content-details">Nome da Categoria</span>
                                        <input type="text" placeholder="Insira o nome da categoria" required />
                                    </div>
                                    
                                </div>
                            </div>
                            
                            <div className="button">
                                <input type="submit" value="Registrar" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ContentDash;
