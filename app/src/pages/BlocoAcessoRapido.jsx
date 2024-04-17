function BlocoAcessoRapido(){
    return (
        <div id="acessoRapido" style={{display: 'block', width: '222px'}}>
            <span id="tituloAcessoRapido"><strong>Acesso rápido</strong></span><br />
            <ul id="acessoMenuRapido">
                <a href="http://" target="_blank"><li><span id="textoAcessoRapido">Servidor Público <img src="imgs/seta-para-a-direita.svg" alt="seta" width="15" /></span><span><div id="barraAcesso"></div></span></li></a>
                <a href="http://" target="_blank"><li><span id="textoAcessoRapido">Usuário Externo <img src="imgs/seta-para-a-direita.svg" alt="seta" width="15" /></span><span><div id="barraAcesso"></div></span></li></a>
                <a href="http://" target="_blank"><li><span id="textoAcessoRapido">Consulta de Processos <img src="imgs/seta-para-a-direita.svg" alt="seta" width="15" /></span><span><div id="barraAcesso"></div></span></li></a>
            </ul>
        </div>
    )
}

export default BlocoAcessoRapido