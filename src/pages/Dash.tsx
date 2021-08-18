import React from 'react';
import "../styles/nav.scss"

function Dash() {
    return (
        <div className="navigation">
            <ul>
                <li>
                    <a href="#">
                        <span className="icon"><i className="fas fa-university"></i></span>
                        <span className="title">
                            <h2>DOE CRIPTO</h2>
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><i className="fas fa-home"></i></span>
                        <span className="title">
                            Dashboard
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><i className="fas fa-laptop-house"></i></span>
                        <span className="title">
                            Instituições
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><i className="fas fa-hand-holding-heart"></i></span>
                        <span className="title">
                            Doações
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><i className="fas fa-id-card"></i></span>
                        <span className="title">
                            Conta Corrente
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="icon"><i className="fas fa-cog"></i></span>
                        <span className="title">
                            Configurações
                        </span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon"><i className="fas fa-sign-out-alt"></i></span>
                        <span className="title">
                            Sign out
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Dash;