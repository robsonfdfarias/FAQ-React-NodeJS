import { useParams } from "react-router-dom";

import MenuFaq from './MenuFaq'
import TopoTitulo from './TopoTitulo'
import DivCenterContent from './DivCenterContent'
import FooterPage from './Footerpage'
import NoticiaContent from "./NoticiaContent";


function Noticia(){
    const {id} = useParams();
    // console.log(id)
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