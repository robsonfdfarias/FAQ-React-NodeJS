function NoticiasRecentesModeloLayout(props){
    return (
        <div className="generalFeedNews">
            <span className="titleNewsFeed">{props.titulo}</span>
            <span className="dateNewsFeed">Publicado por: {props.autor} - {props.dataPub}</span><br /><br />
            <span className="summaryNewsFeed">{props.content}</span><br />
            {/* <div dangerouslySetInnerHTML={{ __html: props.content }}></div> */}
            <span className="readMore"><a href={'/noticia/'+props.id}>Leia mais <img src="imgs/seta-para-a-direita.svg" alt="seta" width="15" /></a></span><br />
        </div>
    );
}

export default NoticiasRecentesModeloLayout