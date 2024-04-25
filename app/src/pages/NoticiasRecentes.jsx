import NoticiasRecentesModeloLayout from "./NoticiasRecentesModeloLayout";
import React, { useEffect, useState } from 'react';

var testa=0;
function NoticiasRecentes(){
    const [ noticias , setNoticias] = useState([]);
    var recentNews = [];
    var noticia;
    const endpoint = 'http://localhost:3003/actors/news/';
    
    useEffect(()=>{
        fetch(endpoint)
        .then((resposta) => resposta.json())
        .then((json) => {
            if(testa<1){
                console.log(testa)
                setNoticias(json);
                testa++;
            }
        }).catch((error) => {
            console.log(error);
            console.log('-------------------')
        });
    }, []);

    if(noticias!=[]){
        return (
            <div>
                {noticias.map((obj) => (
                    <NoticiasRecentesModeloLayout
                        key={obj.id}
                        id={obj.id}
                        titulo={obj.titulo}
                        autor={obj.autor}
                        dataPub={obj.datacad}
                        content={obj.resumo}
                    />
                ))}
            </div>
        )
    }
}

export default NoticiasRecentes