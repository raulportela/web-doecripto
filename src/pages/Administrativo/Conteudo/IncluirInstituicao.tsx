import '../../../styles/ConteudoMain.scss'
import '../../../styles/form.scss'



function ContentDash() {
    return (
        <div className="details">
            <div className="recentOrders">
                <div className="cardHeader">
                    <h2>Incluir Instituições</h2>
                </div>
                <div className="content-container">
                    <div className="content">
                        <form action="#">
                            <div>
                                <div className="title">Dados institucionais</div>
                                <div className="user-content-details">
                                    <input type="hidden" name="id" id="id"/>
                                    <div className="input-box">
                                        <span className="content-details">CNPJ</span>
                                        <input type="text" placeholder="Insira CNPJ" required />
                                    </div>
                                    <div className="input-box">
                                        <span className="content-details">Nome</span>
                                        <input type="text" placeholder="Insira Nome" required />
                                    </div>
                                    <div className="input-box">
                                        <span className="content-details">N° de Carteira</span>
                                        <input type="text" placeholder="Insira N° de Carteira" required />
                                    </div>
                                    <div className="input-box">
                                        <span className="content-details">Categoria</span>
                                        <input type="text" placeholder="Insira Categoria" required />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="title">Endereço</div>
                                <div className="user-content-details">
                                    <div className="input-box">
                                        <span className="content-details">CEP</span>
                                        <input type="text" placeholder="Insira CEP" required />
                                    </div>
                                    <div className="input-box">
                                        <span className="content-details">Rua</span>
                                        <input type="text" placeholder="Insira Rua" required />
                                    </div>
                                    <div className="input-box">
                                        <span className="content-details">Bairro</span>
                                        <input type="text" placeholder="Insira Bairro" required />
                                    </div>
                                    <div className="input-box">
                                        <span className="content-details">Complemento</span>
                                        <input type="text" placeholder="Insira Complemento" required />
                                    </div>
                                    <div className="input-box">
                                        <span className="content-details">Estado</span>
                                        <select id="estado" name="estado" required>
                                            <option value="AC">Selecione...</option>
                                            <option value="AC">Acre</option>
                                            <option value="AL">Alagoas</option>
                                            <option value="AP">Amapá</option>
                                            <option value="AM">Amazonas</option>
                                            <option value="BA">Bahia</option>
                                            <option value="CE">Ceará</option>
                                            <option value="DF">Distrito Federal</option>
                                            <option value="ES">Espírito Santo</option>
                                            <option value="GO">Goiás</option>
                                            <option value="MA">Maranhão</option>
                                            <option value="MT">Mato Grosso</option>
                                            <option value="MS">Mato Grosso do Sul</option>
                                            <option value="MG">Minas Gerais</option>
                                            <option value="PA">Pará</option>
                                            <option value="PB">Paraíba</option>
                                            <option value="PR">Paraná</option>
                                            <option value="PE">Pernambuco</option>
                                            <option value="PI">Piauí</option>
                                            <option value="RJ">Rio de Janeiro</option>
                                            <option value="RN">Rio Grande do Norte</option>
                                            <option value="RS">Rio Grande do Sul</option>
                                            <option value="RO">Rondônia</option>
                                            <option value="RR">Roraima</option>
                                            <option value="SC">Santa Catarina</option>
                                            <option value="SP">São Paulo</option>
                                            <option value="SE">Sergipe</option>
                                            <option value="TO">Tocantins</option>
                                            <option value="EX">Estrangeiro</option>
                                        </select>
                                    </div>
                                    <div className="input-box">
                                        <span className="content-details">UF</span>
                                        <select name="cb-uf" id="cb-uf" required>
                                            <option value="">Selecione...</option>
                                            <option value="AC">AC</option>
                                            <option value="AL">AL</option>
                                            <option value="AP">AP</option>
                                            <option value="AM">AM</option>
                                            <option value="BA">BA</option>
                                            <option value="CE">CE</option>
                                            <option value="DF">DF</option>
                                            <option value="ES">ES</option>
                                            <option value="GO">GO</option>
                                            <option value="MA">MA</option>
                                            <option value="MT">MT</option>
                                            <option value="MS">MS</option>
                                            <option value="MG">MG</option>
                                            <option value="PA">PA</option>
                                            <option value="PB">PB</option>
                                            <option value="PR">PR</option>
                                            <option value="PE">PE</option>
                                            <option value="PI">PI</option>
                                            <option value="RJ">RJ</option>
                                            <option value="RN">RN</option>
                                            <option value="RS">RS</option>
                                            <option value="RO">RO</option>
                                            <option value="RR">RR</option>
                                            <option value="SC">SC</option>
                                            <option value="SP">SP</option>
                                            <option value="SE">SE</option>
                                            <option value="TO">TO</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="title">Contatos</div>
                                <div className="user-content-details">
                                    <div className="input-box">
                                        <span className="content-details">Telefone Principal</span>
                                        <input type="text" placeholder="Insira Tel Principal" required />
                                    </div>
                                    <div className="input-box">
                                        <span className="content-details">Telefone Secundario</span>
                                        <input type="text" placeholder="Insira Tel Secundário" required />
                                    </div>
                                    <div className="input-box">
                                        <span className="content-details">Email</span>
                                        <input type="text" placeholder="Insira e-mail" required />
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
