import React from "react";
import '../../../styles/ConteudoMain.scss'
import '../../../styles/form.scss'



function ContentDash() {
    return (
        <div className="details">
            <div className="recentOrders">
                <div className="cardHeader">
                    <h2>Alterar Hash API - GerenciaNet</h2>
                </div>
                <div className="content-container">
                    <div className="content">
                        <form action="#">
                            <div>
                                <div className="title">Dados Conta - Gerencia Net</div>
                                <div className="user-content-details">
                                    <input type="hidden" name="id" id="id"/>
                                    <div className="input-box">
                                        <span className="content-details">Nome Conta</span>
                                        <input type="text" placeholder="Insira Nome" required />
                                    </div>
                                    <div className="input-box">
                                        <span className="content-details">Chave - Cliente_id</span>
                                        <input type="text" placeholder="Insira Chave client_id" required />
                                    </div>
                                    <div className="input-box">
                                        <span className="content-details">Chave - Cliente_secret</span>
                                        <input type="text" placeholder="Insira Chave cliente_secret" required />
                                    </div>
                                    <div className="input-box">
                                        <span className="content-details">Arquivo - Certificado</span>
                                        <input type="file" required />
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
