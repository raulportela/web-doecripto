import '../../../styles/ConteudoMain.scss'
import '../../../styles/form.scss'



function ContentDash() {
    return (
        <div className="details">
            <div className="recentOrders">
                <div className="cardHeader">
                    <h2>Alterar Inflação</h2>
                </div>
                <div className="content-container">
                    <div className="content">
                        <form action="#">
                            <div>
                                <div className="title">Dados Inflação</div>
                                <div className="user-content-details">
                                    <input type="hidden" name="id" id="id" />
                                    <div className="input-box">
                                        <span className="content-details">Moeda - API CashHand</span>
                                        <input type="text" disabled />
                                    </div>
                                    <div className="input-box">
                                        <span className="content-details">Moeda - DoeCripto</span>
                                        <input type="text" disabled />
                                    </div>
                                    <div className="input-box">
                                        <span className="content-details">Valor BRL R$</span>
                                        <input type="text" disabled />
                                    </div>
                                    <div className="input-box">
                                        <span className="content-details">Porcentagem %</span>
                                        <input type="number" />
                                    </div>
                                </div>
                            </div>
                            <div className="button">
                                <input type="submit" value="Alterar" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ContentDash;
