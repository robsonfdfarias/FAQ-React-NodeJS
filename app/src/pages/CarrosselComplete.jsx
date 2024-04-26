import './Carrossel.css'
import { useEffect } from "react";
function CarrosselComplete(){
    // const script = document.createElement('script');
    // script.src = "./js/Carrossel.js";
    // script.async = true;
    // // script.document = document;
    // document.body.appendChild(script);
    useEffect(() => {
        var impedeRepetir = true;
        var quantSlides = document.getElementById("quantSlides");
        var carosseis = document.getElementsByClassName('carossel-Container')
        var tempo = 5000;
        var numItem = 1;
        var intervalo = setInterval(() => {
            var url = window.location.href;
            var partesURL = url.split('/');
            // console.log(partesURL[0])
            // console.log(partesURL[1])
            // console.log(partesURL[2])
            // console.log(partesURL[3])
            if(partesURL[3]==''){
                // console.log('Você está na home')
            }else{
                // console.log('Você não está na home....')
                clearInterval(intervalo);
                return;
            }
            roda()
        }, tempo);
        var carroselCont = document.getElementById("container");
        var style = window.getComputedStyle(carroselCont);
        // console.log(style.width);
        updateVar();

        for(let i = 0; i < carosseis.length; i++){
            let carossel = carosseis[i]
            let btnBack = carossel.getElementsByClassName('BtnBack')[0]
            let btnNext = carossel.getElementsByClassName('BtnNext')[0]

            var itens = carossel.getElementsByClassName('item')
            var posicaoAnterior = 0
            var mover = posicaoAnterior + parseInt(style.width)

            btnNext.addEventListener('click', ()=>{
                mover = posicaoAnterior + parseInt(style.width)
                if(mover>=(itens.length*parseInt(style.width))){
                    numItem=1;
                }else{
                    numItem+=1
                }
                updateVar();
                clearInterval(intervalo);
                intervalo = setInterval(() => {
                                roda()
                            }, tempo);
                for(let c = 0; c < itens.length; c++ ){
                    if(mover>=(itens.length*parseInt(style.width))){
                        mover = 0;
                        itens[c].style.right=  mover+'px'
                        //console.log(itens.length*parseInt(style.width))
                    }else{
                        itens[c].style.right=  mover + 'px'
                    }
                    posicaoAnterior = mover
                }
                /*if(numItem==(itens.length)){
                    numItem=0;
                }else{
                    numItem+=1;
                }*/
                    configCx(numItem);
            })

            btnBack.addEventListener('click', ()=>{
                mover = posicaoAnterior - parseInt(style.width)
                if(mover>=(itens.length*parseInt(style.width))){
                    numItem=1
                }else{
                    if(numItem>1){
                        numItem-=1;
                    }else{
                        numItem=1;
                    }
                }
                if(mover<1){
                    mover=1;
                }
                updateVar();

                clearInterval(intervalo);
                intervalo = setInterval(() => {
                                roda()
                            }, tempo);
                for(let c = 0; c < itens.length; c++ ){

                    itens[c].style.right=  mover + 'px'

                    posicaoAnterior = mover
                }
                configCx(numItem);

            });
        }
        function roda(){
            updateVar();
            numItem +=1;
            var total = itens.length * parseInt(style.width)
            if(mover<(total-parseInt(style.width))){
                mover = posicaoAnterior + parseInt(style.width)
            }else{
                mover = 0;
                numItem=1;
            }

            for(let c = 0; c < itens.length; c++ ){

                itens[c].style.right=  mover + 'px'

                posicaoAnterior = mover
            }
            configCx(numItem);
        }
        function updateVar(){
            var secCar = document.getElementById("secCar");
            var container = document.getElementById("container");
            var item = document.getElementsByClassName("item")[0];
            let style = window.getComputedStyle(container);
            //console.log(style.width);
            //let heig = parseInt(style.width)*0.5;
            //let heig = 300; ///-------------------------- ALTURA DO CARROSEL
            let heig = parseInt(style.width)*0.4;
            if(heig>300){
                heig=300;
            }
            if(heig<=0){
                heig=300;
            }
            //console.log(heig+"px;")
            secCar.setAttribute("style", "height: "+heig+"px;")
            container.setAttribute("style", "height: "+heig+"px;")
        }

        // window.onload = intervalo
        window.document.getElementById('centroItemDoisHome').onload = intervalo

        
        window.addEventListener('resize', function(){
            clearInterval(intervalo);
            posicaoAnterior = numItem*parseInt(style.width)
            //roda();
                intervalo = setInterval(() => {
                                roda()
                            }, tempo);
        });

        var itens = document.getElementsByClassName("item");
        for(let i=0; i<itens.length; i++){
            itens[i].addEventListener("mouseover", function(){
                clearInterval(intervalo);
            });
            itens[i].addEventListener("mouseout", function(){
                //roda();
                intervalo = setInterval(() => {
                                roda()
                            }, tempo);
            });
        }

        function caixas(){
            for(let j=1; j<=itens.length; j++){
                var cx = document.createElement('div');
                cx.setAttribute("id", "cx_"+j)
                cx.setAttribute("class", "cxConfig")
                cx.setAttribute("onclick", "actionBt(this)");
                cx.setAttribute("style", "width: 25px; height: 5px; border: 1px solid #000; background-color: #fff;")
                //cx.setAttribute("style", "height: 10px;")
                //cx.setAttribute("style", "background-color: #000;")
                quantSlides.appendChild(cx)
                // console.log(j)
            }
        }
        caixas();
        function configCx(itemAtual){
            for(let p=1;p<=itens.length; p++){
                var divAtual = document.getElementById("cx_"+p);
                if(itemAtual==p){
                    divAtual.setAttribute("style", "width: 25px; height: 5px; border: 1px solid #000; background-color: #000; transition: ease-in-out 0.3s;");
                }else{
                    divAtual.setAttribute("style", "width: 25px; height: 5px; border: 1px solid #000; background-color: #fff; transition: ease-in-out 0.3s;");
                }
            }
        }
        function actionBt(obj){
            var id=obj.getAttribute("id");
            // console.log(id+"<<<<<<<")
            clearInterval(intervalo);
            if(mover>=(itens.length*parseInt(style.width))){
                    numItem=1;
                }else{
                    numItem+=1
                }

            for(a=1; a<=itens.length; a++){
                if(id==('cx_'+a)){
                    numItem=a;
                    mover = (a-1)*parseInt(style.width);
                    for(let c = 0; c < itens.length; c++ ){

                    itens[c].style.right=  mover + 'px'

                    posicaoAnterior = mover
                    }
                }
            }
            configCx(numItem);
            intervalo = setInterval(() => {
                    roda()
                }, tempo);
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

export default CarrosselComplete