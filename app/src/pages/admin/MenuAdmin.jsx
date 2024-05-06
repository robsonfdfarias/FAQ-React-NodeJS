// import urlImg from "../assets/logo-pref-jar.svg"
import { useState } from "react"
import LinkMenu from "../LinkMenu";
import { ConfigUrlImg } from "../ConfigUrlImg";
function MenuAdmin(){
    const urlImg = ConfigUrlImg('imgs/');
    const [texto, setTexto] = useState(false);

    // const pesq = (event) => {
    //     //a linha abaixo pega cada letra digitada podendo ser usado para filtrar o que entra
    //     // console.log(event.target.value)
    //     if(event.key === 'Enter'){
    //         let pesquisa = event.target.value;
    //         window.location.href = "/pesquisar/"+pesquisa+"/1";
    //     }
    // }
 
    return (
        <div style={{width:'100%', backgroundColor: '#0c582c', minHeight: '90px'}}>
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
                    }}>Menu</button>
                </div>
                <div style={{position: 'absolute', top: '10px', zIndex: 1000}}>
                    <a href="/"><img src={urlImg+"logo-pref-jar.svg"} height={55} alt="imagem" /></a>
                </div>
                <ul id="menu" className="menu" style={{alignItems: 'right'}}>
                    <LinkMenu 
                        texto={"Início"}
                        barraName={"barraEfeito"}
                        href={"/admin/inicio/"}
                        chave={"inicio"}
                    />
                    <LinkMenu 
                        texto={"Notícia"}
                        barraName={"barraEfeito"}
                        href={"/admin/noticia/"}
                        chave={"noticia"}
                    />
                    <LinkMenu 
                        texto={"Perguntas"}
                        barraName={"barraEfeito"}
                        href={"/admin/perguntasAdm/"}
                        chave={"perguntasAdm"}
                    />
                    <LinkMenu 
                        texto={"Agenda"}
                        barraName={"barraEfeito"}
                        href={"/admin/agenda/"}
                        chave={"agenda"}
                    />
                    <LinkMenu 
                        texto={"Categoria"}
                        barraName={"barraEfeito"}
                        href={"/admin/categoria/"}
                        chave={"categoria"}
                    />
                    <LinkMenu 
                        texto={"Sair"}
                        barraName={"barraEfeito/"}
                        href={"../sair"}
                        chave={"sair"}
                    />
                    {/* <li id="liBuscar" style={{marginTop: '-8px'}}><input type="search" className="buscar" aria-label="Search" placeholder="Digite a pesquisa" onKeyDown={(e)=>pesq(e)} id="pesqLi" /></li> */}
                </ul>
                {/* <div id="divBuscar"><input type="search" className="buscar" aria-label="Search" placeholder="Digite a pesquisa" onKeyDown={(e)=>pesq(e)} id="pesqDiv" /></div> */}
            </div>
        </div>
    )
}


export default MenuAdmin