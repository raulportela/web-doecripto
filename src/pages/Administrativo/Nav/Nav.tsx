import React from 'react';
import "../../../styles/nav.scss"

function Dash() {
    return (
        <div className="navigation">
            <ul>
                <li>
                    <a href={"/resumo"}>
                        <span className="icon"><i className="fas fa-coins"></i></span>
                        <span className="title">
                            <h2>DOE CRIPTO</h2>
                        </span>
                    </a>
                </li>
                <li>
                    <a href={"/resumo"}>
                        <span className="icon"><i className="fas fa-home"></i></span>
                        <span className="title">
                            Dashboard
                        </span>
                    </a>
                </li>
                <li>
                    <a href={"/table-instituicoes"}>
                        <span className="icon"><i className="fas fa-laptop-house"></i></span>
                        <span className="title">
                            Instituições
                        </span>
                    </a>
                </li>
                <li>
                    <a href={"/table-doacoes"}>
                        <span className="icon"><i className="fas fa-hand-holding-heart"></i></span>
                        <span className="title">
                            Doações
                        </span>
                    </a>
                </li>
                <li>
                    <a href={"/table-categorias"}>
                        <span className="icon"><i className="fas fa-network-wired"></i></span>
                        <span className="title">
                            Categorias
                        </span>
                    </a>
                </li>
                <li>
                    <a href={"/alterar-api-cc"}>
                        <span className="icon"><i className="fas fa-laptop-code"></i></span>
                        <span className="title">
                            API CC
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