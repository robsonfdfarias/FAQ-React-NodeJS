function FooterPage(){
    const url = window.location.href;
    const urlPartes = url.split('/');
    var urlImage;
    if(urlPartes[5]!=''){
        urlImage = '../../../imgsFooter/';
    }else if(urlPartes[4]!=''){
        urlImage = '../../imgsFooter/';
    }else if(urlPartes[3]!=''){
        urlImage = '../imgsFooter/';
    }else{
        urlImage = 'imgsFooter/';
    }
    return(
        <div id="footerPages">
            <div id="footerCenter">
                <div id="camada1Footer">
                    <span id="login">{localStorage.getItem("nome")?<span>Logado como: {localStorage.getItem("nome")} - <a href="\sair"> Sair</a></span>:<a href="/login" target="_blank" rel="noopener noreferrer">Logar</a>}</span>
                    <span id="redesFooter">
                        <a href="#">
                            {/* <img src="imgsFooter/facebook.svg" style="--invert: 24%; --sepia: 38%; --saturate:1515%; --hueRotate: 192deg; --brightness: 110%; --contrast: 81%;" alt="Acesse nosso canal do Facebook" title="Acesse nosso canal do Facebook" height="20"> */}
                            {/* <img src={"imgsFooter/facebook.svg"} style="--invert: 65%; --sepia: 20%; --saturate:5764%; --hueRotate: 188deg; --brightness: 97%; --contrast: 103%;" alt="Acesse nosso canal do Facebook" title="Acesse nosso canal do Facebook" height="20"> */}
                            <img src={urlImage+"facebook.svg"} style={{'--invert':'65%', '--sepia': '20%', '--saturate': '5764%', '--hueRotate': '188deg', '--brightness': '97%', '--contrast': '103%'}} alt="Acesse nosso canal do Facebook" title="Acesse nosso canal do Facebook" height="20" />
                        </a>
                        <a href="https://www.youtube.com/@RobsonFarias-os2di">
                            {/* <img src="imgsFooter/instagram.svg" style="--invert: 60%; --sepia: 20%; --saturate:2147%; --hueRotate: 321deg; --brightness: 95%; --contrast: 85%;" alt="Acesse nosso canal do Instagram" title="Acesse nosso canal do Instagram" height="20"> */}
                            <img src={urlImage+"instagram.svg"} style={{'--invert':'60%', '--sepia': '20%', '--saturate': '2147%', '--hueRotate': '321deg', '--brightness': '95%', '--contrast': '85%'}} alt="Acesse nosso canal do Instagram" title="Acesse nosso canal do Instagram" height="20" />
                        </a>
                        <a href="https://www.youtube.com/@InformaticacomRobsonFarias">
                            {/* <img src="imgsFooter/youtube.svg" style="--invert: 27%; --sepia: 51%; --saturate:2878%; --hueRotate: 346deg; --brightness: 104%; --contrast: 97%;" alt="Acesse nosso canal do Youtube" title="Acesse nosso canal do Youtube" height="20"> */}
                            <img src={urlImage+"youtube.svg"} style={{'--invert':'27%', '--sepia': '51%', '--saturate': '2878%', '--hueRotate': '346deg', '--brightness': '104%', '--contrast': '97%'}} alt="Acesse nosso canal do Youtube" title="Acesse nosso canal do Youtube" height="20" />
                        </a>
                        <a href="https://www.jaraguadosul.sc.gov.br/">
                            {/* <img src="imgsFooter/globo.svg" style="--invert: 100%; --sepia: 96%; --saturate:12%; --hueRotate: 239deg; --brightness: 103%; --contrast: 100%;" alt="Acesse o site da prefeitura" title="Acesse o site da prefeitura" height="20"> */}
                            <img src={urlImage+"globo.svg"} style={{'--invert':'100%', '--sepia': '96%', '--saturate': '12%', '--hueRotate': '239deg', '--brightness': '103%', '--contrast': '100%'}} alt="Acesse o site da prefeitura" title="Acesse o site da prefeitura" height="20" />
                        </a>
                        {/* <a href="#">
                            <img src="imgsFooter/twitter.svg" style="--invert: 72%; --sepia: 69%; --saturate:5316%; --hueRotate: 161deg; --brightness: 96%; --contrast: 102%;" alt="Acesse Twitter da prefeitura de Jaraguá do Sul" title="Acesse Twitter da prefeitura de Jaraguá do Sul" height="20">
                        </a>
                        <a href="anexos/POP-Procedimento-Operacional-Padrao.pdf">
                            <img src="imgsFooter/grampo.svg" style="--invert: 27%; --sepia: 51%; --saturate:2878%; --hueRotate: 346deg; --brightness: 104%; --contrast: 97%;" alt="Acesse site da prefeitura de Jaraguá do Sul" title="Acesse site da prefeitura de Jaraguá do Sul" height="20">
                        </a> */}
                    </span>
                    <br />
                    <hr style={{border: '1px solid #b1cd49'}} />

                </div>
                <div id="creditosFooterPages">
                    <em>
                        Prefeitura de Jaraguá do Sul - SC - CNPJ: 83.102.459/0001-23 - Rua Walter Marquardt, 1111 - Barra do Rio Molha - 89259-565 - Caixa Postal 421 - Fone: (047) 2106-8000
                    </em>
                </div>
            </div>
        </div>
    )
}

export default FooterPage