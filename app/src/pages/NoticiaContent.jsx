import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NoticiaContentAutor from "./NoticiaContentAutor";


function NoticiaContent(props){
    const {id} = useParams();
    console.log(id)
    var testa = 0;
    const [noticia, setNoticia] = useState([]);
    
    
    useEffect(()=>{
        const endpoint = 'http://localhost:3003/actors/news/'+id;
            fetch(endpoint)
            .then((resposta) => resposta.json())
            .then((data) => {
                // console.log(data);
                if(testa<1){
                    console.log(testa);
                    setNoticia(data);
                    testa++;
                }
            }).catch((error) => {
                console.log(error);
                console.log('-------------------')
            });
    }, []);
    return (
        <div>
            {noticia.map(obj => (
                <div id="artigo" key={obj.id} style={{border: 'none', padding: '0px'}}>
                    
                        <header id="titulo">{obj.titulo}</header>
                        <nav>
                            <NoticiaContentAutor
                                autor={obj.autor}
                            />
                            {/* Publicado por: {obj.autor}<br /> */}
                        </nav>
                        
                        <article>
                            <header id="data">Data da publicação: {obj.datacad}</header>
                            <div dangerouslySetInnerHTML={{ __html: obj.conteudo }}></div>
                        </article>
                </div>
            ))}
        </div>
    );
}

export default NoticiaContent