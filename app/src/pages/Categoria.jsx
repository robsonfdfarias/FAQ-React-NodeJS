import { useParams } from "react-router-dom"
import MenuFaq from "./MenuFaq";
import TopoTitulo from "./TopoTitulo";
import FooterPage from "./Footerpage";
import PerguntasPaginator from "./PerguntasPaginator";
import DivCenterContent from "./DivCenterContent";

function Categoria(){
    // const {id, page, numberOfRecords} = useParams();
    const {id, page} = useParams();
    // console.log(page)
    const idCat = id==undefined?1:id;
    // console.log("id da categoria: "+idCat);
    const pagAtual = page==undefined?0:page-1;
    const numberOfRecords = 1;
    return (
        <div style={{position: 'relative', height: '100vh'}}>
            <MenuFaq />
            <TopoTitulo titulo={'Perguntas Frequentes por categoria'} />
            <DivCenterContent
                content={<div style={{paddingTop: '20px'}}><PerguntasPaginator
                            idCategoria={idCat}
                            page={pagAtual}
                            numberOfRecords={numberOfRecords}
                            urlPergQuery={'http://localhost:3003/actors/returnAllCommonQuestionsForCategoryById'}
                            urlPergPaginator={'http://localhost:3003/actors/returnAllCommonQuestions'}
                        /></div>}
            />
            <FooterPage />
        </div>
    )
}

export default Categoria