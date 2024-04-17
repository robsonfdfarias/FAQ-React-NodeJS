// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MenuFaq from './MenuFaq'
import TopoTitulo from './TopoTitulo'
import DivCenterContent from './DivCenterContent'
import FooterPage from './Footerpage'
import NoticiaContent from "./NoticiaContent";


function Noticia(){
    const {id} = useParams();
    console.log(id)
    // var testa = 0;
    // const [noticia, setNoticia] = useState([]);
    
    
    // useEffect(()=>{
    //     const endpoint = 'http://localhost:3003/actors/10';
    //         fetch(endpoint)
    //         .then((resposta) => resposta.json())
    //         .then((data) => {
    //             // console.log(data);
    //             if(testa<1){
    //                 console.log(testa);
    //                 setNoticia(data);
    //                 testa++;
    //             }
    //         }).catch((error) => {
    //             console.log(error);
    //             console.log('-------------------')
    //         });
    // }, []);
    return (
        <div>
            <MenuFaq />
            <TopoTitulo titulo={'Notícia'} />
            <DivCenterContent
                content={<NoticiaContent id={id} key={'news'+id} />}
            />
            <FooterPage />
            {/* <div dangerouslySetInnerHTML={{ __html: props.content }}></div> */}
        </div>
    );
}

export default Noticia