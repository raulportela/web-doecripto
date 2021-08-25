import React from "react";
import '../../../styles/ConteudoMain.scss'
import '../../../styles/form.scss'



function ContentDash() {
    return (
        <div className="details">
            <div className="recentOrders">
                <div className="cardHeader">
                    <h2>Processar Doação</h2>
                </div>
                <div className="content-container">
                    <div className="content">
                        <form action="#">
                        <div>
                                <div className="title">Dados de Doação</div>
                                <div className="user-content-details">
                                    <div className="input-box">
                                        <span className="content-details">Quantidade Moeda - CashHand</span>
                                        <input type="text" disabled />
                                    </div>
                                    <div className="input-box">
                                        <span className="content-details">Valor unitário - CashHand</span>
                                        <input type="text" disabled />
                                    </div>
                                    <div className="input-box">
                                        <span className="content-details">Valor Total BRL</span>
                                        <input type="text" disabled />
                                    </div>
                                    <div className="input-box">
                                        <span className="content-details">Insira Hash</span>
                                        <input type="text" required />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="title">Dados de Instituição</div>
                                <div className="user-content-details">
                                    <input type="hidden" name="id" id="id"/>
                                    <div className="input-box">
                                        <span className="content-details">CNPJ</span>
                                        <input type="text" disabled />
                                    </div>
                                    <div className="input-box">
                                        <span className="content-details">Nome</span>
                                        <input type="text" disabled />
                                    </div>
                                    <div className="input-box">
                                        <span className="content-details">N° de Carteira</span>
                                        <input type="text" disabled />
                                    </div>
                                    <div className="input-box">
                                        <span className="content-details">Categoria</span>
                                        <input type="text" disabled />
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <div className="title">Dados de Doador</div>
                                <div className="user-content-details">
                                    <div className="input-box">
                                        <span className="content-details">Nome</span>
                                        <input type="text" disabled />
                                    </div>
                                    <div className="input-box">
                                        <span className="content-details">Email</span>
                                        <input type="text"  disabled />
                                    </div>
                                </div>
                            </div>
                            <div className="button">
                                <input type="submit" value="Processar Doação" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ContentDash;
