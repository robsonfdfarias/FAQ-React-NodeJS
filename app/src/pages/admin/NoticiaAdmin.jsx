import { useParams } from "react-router-dom";
import DivCenterContent from "../DivCenterContent";
import FooterPage from "../Footerpage";
import TopoTitulo from "../TopoTitulo";
import MenuAdmin from "./MenuAdmin";
import NoticiaAdminContent from "./NoticiaAdminContent";

function NoticiaAdmin(){
    const {page} = useParams();
    // console.log(page)
    const pagAtual = page==undefined?0:page-1;
    const numberOfRecords = 2;
    return (
        <div>
            <MenuAdmin />
            <TopoTitulo titulo={"Notícias"} subtitulo={"Administrar notícias SEI"} />
            <DivCenterContent content={<NoticiaAdminContent
                                            page={pagAtual}
                                            numberOfRecords={numberOfRecords}
                                        />} 
            />
            <FooterPage />
        </div>
    )
}

export default NoticiaAdmin