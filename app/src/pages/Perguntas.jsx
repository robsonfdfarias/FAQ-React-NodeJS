import MenuFaq from "./MenuFaq";
import TopoTitulo from "./TopoTitulo";
import DivCenterContent from './DivCenterContent'
import FooterPage from './Footerpage'
import { useParams } from "react-router-dom";
import PerguntasContent from "./PerguntasContent";
function Perguntas(){
    const {page} = useParams();
    // console.log(page)
    const pagAtual = page==undefined?0:page-1;
    const numberOfRecords = 1;
    // console.log(page)
    
    return (
        <div>
            <MenuFaq />
            <TopoTitulo titulo={'Perguntas Frequentes'} />
            <DivCenterContent
                content={<PerguntasContent
                            page={pagAtual}
                            numberOfRecords={numberOfRecords}
                        />}
            />
            <FooterPage />
        </div>
    )
} 
export default Perguntas