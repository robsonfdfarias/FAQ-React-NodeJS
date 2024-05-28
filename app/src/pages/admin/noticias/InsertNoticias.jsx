import DivCenterContent from "../../DivCenterContent"
import FooterPage from "../../Footerpage"
import TopoTitulo from "../../TopoTitulo"
import MenuAdmin from "../MenuAdmin"
import Formulario from "./Formulario"

function InsertNoticias(){
    return (
        <div>
            <MenuAdmin />
            <TopoTitulo titulo={"Inserir notícia"} subtitulo={"Administrar notícias SEI"} />
            <DivCenterContent
                content={<Formulario />}
            />
            <FooterPage />
        </div>
    )
}

export default InsertNoticias