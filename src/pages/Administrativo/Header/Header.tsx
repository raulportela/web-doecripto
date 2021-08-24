import React from 'react';
import toggleMenu from '../../../scripts/main';
import "../../../styles/header.scss"
import fotoUser from '../../../img/user.jpg'

function Header() {
    return (
        <div>
            <div className="topbar">
                <div className="toggle" onClick={toggleMenu}></div>
                <div className="notificacao">
                    <i className="far fa-bell"></i>
                </div>
                <div className="user">
                    <img src={fotoUser} alt=""/>
                </div>
            </div>
            <div className="cardBox">
                <div className="card">
                    <div>
                        <div className="numbers">1,042</div>
                        <div className="cardName">Moedas doadas</div>
                    </div>
                    <div className="iconBox"><i className="fas fa-hand-holding-usd"></i></div>
                </div>
                <div className="card">
                    <div>
                        <div className="numbers">80</div>
                        <div className="cardName">Valor BRL</div>
                    </div>
                    <div className="iconBox"><i className="fas fa-money-check-alt"></i>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <div className="numbers">208</div>
                        <div className="cardName">Doa. em aberto</div>
                    </div>
                    <div className="iconBox"><i className="fas fa-list"></i></div>
                </div>
                <div className="card">
                    <div>
                        <div className="numbers">2</div>
                        <div className="cardName">Inst. Cadastradas</div>
                    </div>
                    <div className="iconBox"><i className="far fa-building"></i></div>
                </div>
            </div>
        </div>
    );
}

export default Header;