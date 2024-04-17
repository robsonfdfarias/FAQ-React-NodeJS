import './Carrossel.css'
import { useEffect } from "react";
function Carrossel(){
    // const script = document.createElement('script');
    // script.src = "./js/Carrossel.js";
    // script.async = true;
    // // script.document = document;
    // document.body.appendChild(script);
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.id = 'carrosel';
        script.src = './js/Carrossel.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        }
      }, []);


    return (
        <section id="secCar">
            {/* <h2>Título</h2> */}
            <div className="carossel-Container" id="container">
                <div className="btnCarossel BtnBack disable">
                <span id="seta"></span>
                </div>
                {/* Aqui eu criei as caixas identificadoras para mostrar em qual slide está  */}
                <div id="quantSlides"></div> 
                <div className="carossel-Slide">
                    <div className="item"><a href="/perguntas"><img src="imgs/perguntas-frequentes.png" alt="img" width="100%" /></a></div>
                    <div className="item"><a href="https://www.escolavirtual.gov.br/curso/74"><img src="imgs/cursoSei.png" alt="img" width="100%" /></a></div>
                    <div className="item"><a href="coisasParaSaberSei.php"><img src="imgs/curiosidadesSei.png" alt="img" width="100%" /></a></div>
                    <div className="item"><a href="anexos/POP-Procedimento-Operacional-Padrao.pdf" target="_blank"><img src="imgs/manual.png" alt="img" width="100%" /></a></div>
                </div>
                <div className="btnCarossel BtnNext">
                <span id="seta"></span>
                </div>
            </div>
        </section>
    )
}

export default Carrossel