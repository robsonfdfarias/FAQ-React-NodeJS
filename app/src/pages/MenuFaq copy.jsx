import urlImg from "../assets/logo-pref-jar.svg"
import { useState } from "react"
import LinkMenu from "./LinkMenu";
function MenuFaq(){
    const [texto, setTexto] = useState(false);
    const [active, setActive] = useState('');


    function verifyURL(obj){
        console.log(window.location.href);
        // let tagA = obj.parentNode;
        // console.log(tagA)
        // console.log(obj)
        // if(tagA.href=='/perguntas'){
        //     obj.children[1].style.height='30px';
        // }
    }

 
    return (
        <div style={{width:'100%', backgroundColor: '#0c582c', minHeight: '80px'}}>
            <div id="menuBarra">
                <div style={{position: 'absolute', top: '10px', right: '0px', zIndex: 1000}}>
                    {/* <button id="menuAbreFecha" onClick={()=>{document.getElementById('menu').classList.toggle('showMenu')}}>Menu</button> */}
                    <button id="menuAbreFecha" onClick={()=>{
                        if(texto){
                            document.getElementById('menu').style.height='0px'; 
                            setTexto(false);
                        }else{
                            document.getElementById('menu').style.height='fit-content'; 
                            setTexto(true);
                        }
                        console.log(window.location.href);
                    }}>Menu</button>
                </div>
                <div style={{position: 'absolute', top: '10px', zIndex: 1000}}>
                    <a href="/"><img src={urlImg} height={55} alt="imagem" /></a>
                </div>
                <ul id="menu" className="menu">
                    <a href="/perguntas"><li id='liPerguntas' onLoad={verifyURL(document.getElementById('liPerguntas'))}>Perguntas <div id="barraEfeito"></div></li></a>
                    <li>Sobre o SEI <div id="barraEfeito" style={{bottom:'5px'}}></div>
                        <ul>
                            <a href="/sei"><li>O que é o SEI <div id="barraEfeito2"></div></li></a>
                            <a href="/legislacao"><li>Legislação <div id="barraEfeito2"></div></li></a>
                            <a href="/estruturaAdministrativa"><li>Estrutura administrativa <div id="barraEfeito2"></div></li></a>
                        </ul>
                    </li>
                    <a href="/capacitacao"><li>Capacitação <div id="barraEfeito"></div></li></a>
                    <a href="/contatos"><li>Contatos <div id="barraEfeito"></div></li></a>
                    <LinkMenu 
                        texto={"home"}
                        // barra={<div id='barraEfeito'></div>}
                        barraName={"barraEfeito"}
                        href={"/"}
                    />
                    <LinkMenu 
                        texto={"perguntas"}
                        // barra={<div id='barraEfeito'></div>}
                        barraName={"barraEfeito"}
                        href={"/perguntas"}
                    />
                    <li>Sobre o SEI <div id="barraEfeito" style={{bottom:'5px'}}></div>
                        <ul>
                            <LinkMenu 
                                texto={"O que é o SEI"}
                                // barra={<div id='barraEfeito2'></div>}
                                barraName={"barraEfeito2"}
                                href={"/sei"}
                            />
                            <LinkMenu 
                                texto={"Legislação"}
                                // barra={<div id='barraEfeito2'></div>}
                                barraName={"barraEfeito2"}
                                href={"/legislacao"}
                            />
                            <LinkMenu 
                                texto={"Estrutura administrativa"}
                                // barra={<div id='barraEfeito2'></div>}
                                barraName={"barraEfeito2"}
                                href={"/estruturaAdministrativa"}
                            />
                        </ul>
                    </li>
                    <LinkMenu 
                        texto={"capacitação"}
                        // barra={<div id='barraEfeito'></div>}
                        barraName={"barraEfeito"}
                        href={"/capacitacao"}
                    />
                    <LinkMenu 
                        texto={"contatos"}
                        // barra={<div id='barraEfeito'></div>}
                        barraName={"barraEfeito"}
                        href={"/contatos"}
                    />
                    <li id="liBuscar" style={{marginTop: '-8px'}}><input type="search" id="buscar" aria-label="Search" placeholder="Digite a pesquisa" /></li>
                </ul>
                <div id="divBuscar"><input type="search" id="buscar" aria-label="Search" placeholder="Digite a pesquisa" /></div>
            </div>
        </div>
    )
}


export default MenuFaq