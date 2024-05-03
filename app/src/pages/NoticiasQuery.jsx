
import { useEffect, useState } from "react";

function NoticiasQuery(props){
    const [questions, setQuestions] = useState([]);
    var testa = 0;
    var idCat = props.idCategoria!=undefined?props.idCategoria:1;
    // console.log(idCat);
    useEffect(()=>{
        // fetch('http://localhost:3003/actors/commonQuestions', {
        fetch(props.urlPergQuery, {
            method: 'POST',
            headers: {
                'Accept-Encoding': 'gzip, delate, br',
                'Connection': 'keep-alive',
                Accept: 'application/json', 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idCategoria: idCat,
                page: props.page,
                numberOfRecords: props.numberOfRecords
            })
        })
        .then(response => {
            if(response.ok){
                return response.json();
            }else{
                throw response;
            }
        })
        .then(data => {
            // questions2 = data;
            if(testa<1){
                // console.log(data);
                setQuestions(data);
                testa++;
            }
        })
        .catch((error) => {
            console.error("Deu erro, veja: "+error);
            console.error(error);
        });
        // setQuestions(questions2);
    }, []);

    function abre(ob){
        // console.log(ob)
        // console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
        // console.log(document.getElementById(ob))
        ob = document.getElementById(ob);
        //alert(ob.id)
        var child = ob.children[0];
        //alert(child.innerHTML);
        var father = ob.parentElement;
        //alert(father.id);
        var conteudo = father.children[1]
        // alert(conteudo.id)
        var img = ob.children[2].children[0];
        //alert(img.id)
        var segundos = '0.5s';
        if(child.innerHTML=="false"){
            const elemento = document.createElement('div');
            const style1 = conteudo.getBoundingClientRect();
            elemento.setAttribute('style', 'position: absolute; top: 0; left: -300px; width: '+style1.width+'px;  padding: 16px 20px;');
            elemento.innerHTML = conteudo.innerHTML;
            document.body.appendChild(elemento);
            const style = elemento.getBoundingClientRect();
            // conteudo.setAttribute("style", "height: fit-content;");
            // conteudo.setAttribute("style", "height: 0;");
            // alert(style.height)
            // console.log(style)
            conteudo.setAttribute("style", "height: "+(style.height+30)+"px; transition: all ease-in "+segundos+";");
            conteudo.style.padding = '16px 20px';
            child.innerHTML = "true";
            ob.setAttribute("style", "background-color: #c1ffe2; color: #0c582c; font-weight: 700; transition: ease-in "+segundos+";")
            img.setAttribute("src", urlImg+"imgs/angulo-para-cima.svg")
            img.setAttribute("alt", "Seta indicando para fechar a visualização do conteudo")
            document.body.removeChild(elemento)
        }else{
            conteudo.setAttribute("style", "height:0; transition: all ease-in "+segundos+"; padding: 0 20px;");
            child.innerHTML = "false";
            ob.setAttribute("style", "background-color: #fff; color: #000; font-weight: 400; transition: ease-in "+segundos+";")
            img.setAttribute("src", urlImg+"imgs/angulo-para-baixo.svg")
            img.setAttribute("alt", "Seta indicando para abrir a visualização do conteudo")
        }
    }
    var urlImg='';
    const getUrl = ()=>{
        const url = window.location.href;
        const partesURL = url.split('/');
        // const urlImg = partesURL[0]+'/'+partesURL[1]+'/'+partesURL[2]+'/'+partesURL[3]+'/';
        if(partesURL[8]!=undefined){
            urlImg='../../../../../';
        }else if(partesURL[7]!=undefined){
            urlImg='../../../../';
        }else if(partesURL[6]!=undefined){
            urlImg='../../../';
        }else if(partesURL[5]!=undefined){
            urlImg='../../';
        }else if(partesURL[4]!=undefined){
            urlImg='../';
        }
    }
    getUrl();

    return (
        <div>
            {questions.map(obj => (
                <div id="generalFeedNews" key={obj.id} style={{display: "flex", border:'1px solid #DEE2E6', borderRadius: '4px', flexDirection: "row", padding: "20px", justifyContent: "center", textAlign: "center", verticalAlign: "middle", alignItems: "center", margin: '10px 0'}}>
                    <div style={{textAlign: "left", width:"91%"}}>
                        <span id="titleNewsFeed" style={{fontSize: '20px', fontWeight: '700', lineHeight: '30px'}}>{obj.titulo}</span><br />
                        <span id="summaryNewsFeed">{obj.resumo}</span><br />
                    </div>
                    <div style={{display:"flex"}}>
                        <a href="noticiaEdit.php?id=7">
                            <div id="divBtEdit" style={{padding: '10px', backgroundColor: '#0c582c', borderRadius: '4px', marginRight: '5px'}}>
                                <img src="../../imgs/edit-lapis.svg" width="20" title="Editar notícia" />
                            </div>
                        </a>
                        <a href="noticiaDelete.php?id=7" target="_blank">
                            <div id="divBtDelete" style={{padding: '10px', backgroundColor: 'rgb(143, 0, 0)', borderRadius: '4px'}}>
                                <img src="../../imgs/delete-bin.svg" width="20" title="Deletar notícia" />
                            </div>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default NoticiasQuery