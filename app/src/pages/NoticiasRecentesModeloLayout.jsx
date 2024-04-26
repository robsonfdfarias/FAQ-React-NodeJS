import { useEffect, useState } from "react";

function NoticiasRecentesModeloLayout(props){
    const [autor, setAutor] = useState([]);
    var testa=0;
    useEffect(()=>{
        fetch('http://localhost:3003/actors/getAutorById', {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: props.autor
            })
        })
        .then((response) => response.json())
        .then((json) => {
            // console.log(json)
            if(testa<1){
                setAutor(json);
                testa++;
            }
        })
    }, [])
    return (
        <div className="generalFeedNews">
            <span className="titleNewsFeed">{props.titulo}</span>
            {autor.length>0?
                <span className="dateNewsFeed">Publicado por: {autor[0].nome} - {props.dataPub}</span>
            :testa=testa}<br /><br />
            <span className="summaryNewsFeed">{props.content}</span><br />
            {/* <div dangerouslySetInnerHTML={{ __html: props.content }}></div> */}
            <span className="readMore"><a href={'/noticia/'+props.id}>Leia mais <img src="imgs/seta-para-a-direita.svg" alt="seta" width="15" /></a></span><br />
        </div>
    );
}

export default NoticiasRecentesModeloLayout