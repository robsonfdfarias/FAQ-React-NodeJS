import { useParams } from "react-router-dom";
import DivCenterContent from "../DivCenterContent";
import FooterPage from "../Footerpage";
import TopoTitulo from "../TopoTitulo";
import MenuAdmin from "./MenuAdmin";
import RegisterAdminContent from "./RegisterAdminContent";

function NoticiaAdmin(){
    const {page} = useParams();
    // console.log(page)
    const pagAtual = page==undefined?0:page-1;
    const numberOfRecords = 3;
    return (
        <div>
            <MenuAdmin />
            <TopoTitulo titulo={"Notícias"} subtitulo={"Administrar notícias SEI"} />
            <DivCenterContent content={<RegisterAdminContent
                                            page={pagAtual}
                                            numberOfRecords={numberOfRecords}
                                            bigTitle={"Últimas notícias"}
                                            titleBtNew={"+ Nova Notícia"}
                                            urlQuery={'http://localhost:3003/actors/getAdmNewsPage'}
                                            urlPaginator={'http://localhost:3003/actors/getNumberNews'}
                                            linkBtNew={'/admin/noticias/insert/'}
                                            linkEditRegist={'/admin/noticia/edit/'}
                                            linkDeleteRegist={'/admin/noticia/delete/'}
                                            idCateg={1}
                                        />} 
            />
            <FooterPage />
        </div>
    )
}

export default NoticiaAdmin