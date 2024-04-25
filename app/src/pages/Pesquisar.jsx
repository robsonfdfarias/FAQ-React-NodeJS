import { useParams } from "react-router-dom"
import DivCenterContent from "./DivCenterContent"
import FooterPage from "./Footerpage"
import MenuFaq from "./MenuFaq"
import PerguntasPaginator from "./PerguntasPaginator"
import TopoTitulo from "./TopoTitulo"
import PesquisarContent from "./PesquisarContent"

function Pesquisar(){
    const {pesq, page} = useParams();
    const idCat = pesq==undefined?1:pesq;
    // console.log("id da categoria: "+idCat);
    const pagAtual = page==undefined?0:page-1;
    const numberOfRecords = 1;
    return (
        <div>
            <MenuFaq />
            <TopoTitulo titulo={"Pesquisa"} />
            <DivCenterContent
                content={<PesquisarContent
                    idCategoria={idCat}
                    page={pagAtual}
                    numberOfRecords={numberOfRecords}
                    urlPergQuery={'http://localhost:3003/actors/getCommonQuestionPesq'}
                    urlPergPaginator={'http://localhost:3003/actors/getNumberCommonQuestionPesq'}
                />}
            />
            <FooterPage />
        </div>
    )
}

export default Pesquisar