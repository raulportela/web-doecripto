import React from "react";
import '../styles/ContentDash.scss'
import foto1 from '../img/img1.jpg'
import foto2 from '../img/img2.jpg'
import foto3 from '../img/img3.jpg'
import foto4 from '../img/img4.jpg'


function ContentDash() {
    return (
        <div className="details">
    
            <div className="container">
                <form>
                    <div className="row">
                        <div className="col-12">
                            <h2>Alterar Inflação</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm col-md col-lg col-xl ">
                            <label htmlFor="inputPorcentagem">Porcentagem</label>
                            <input type="text" id="inputPorcentagem" className="form-control" />
                        </div>
                        <div className="col-sm col-md col-lg col-xl">
                            <br/>
                            <button className="btn botao-principal">Alterar Inflação</button>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-sm col-md col-lg col-xl">
                            <label htmlFor="inputPorcentagem">Valor API CashHand</label>
                            <input type="text" readOnly id="inputPorcentagem" className="form-control" placeholder="First name" />
                        </div>
                        <div className="col-sm col-md col-lg col-xl">
                            <label htmlFor="inputPorcentagem">Valor Doe Cripto</label>
                            <input type="text" readOnly className="form-control" placeholder="Last name" />
                        </div>
                    </div>
                </form>
            </div>
            
        </div>
    );
}

export default ContentDash;
