import { useParams } from "react-router-dom";
import DivCenterContent from "../DivCenterContent";
import FooterPage from "../Footerpage";
import TopoTitulo from "../TopoTitulo";
import MenuAdmin from "./MenuAdmin";
import RegisterAdminContent from "./RegisterAdminContent";

function PerguntasAdmin(){
    const {page} = useParams();
    // console.log(page)
    const pagAtual = page==undefined?0:page-1;
    const numberOfRecords = 3;
    return (
        <div>
            <MenuAdmin />
            <TopoTitulo titulo={"Perguntas"} subtitulo={"Painel de perguntas"} />
            <DivCenterContent content={<RegisterAdminContent
                                            page={pagAtual}
                                            numberOfRecords={numberOfRecords}
                                            bigTitle={"Postagens recentes"}
                                            titleBtNew={"+ Nova Pergunta"}
                                            urlQuery={'http://localhost:3003/actors/getAdmPergPage'}
                                            urlPaginator={'http://localhost:3003/actors/getNumberPerg'}
                                            linkBtNew={'/admin/pergunta/insert/'}
                                            linkEditRegist={'/admin/pergunta/edit/'}
                                            linkDeleteRegist={'/admin/pergunta/delete/'}
                                            idCateg={1}
                                        />} 
            />
            <FooterPage />
        </div>
    )
}

export default PerguntasAdmin