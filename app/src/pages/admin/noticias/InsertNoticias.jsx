import DivCenterContent from "../../DivCenterContent"
import FooterPage from "../../Footerpage"
import TopoTitulo from "../../TopoTitulo"
import MenuAdmin from "../MenuAdmin"
import Editor from "../rffeditor/Editor"

function InsertNoticias(){
    return (
        <div>
            <MenuAdmin />
            <TopoTitulo titulo={"Inserir notícia"} subtitulo={"Administrar notícias SEI"} />
            <DivCenterContent
                content={<Editor />}
            />
            <FooterPage />
        </div>
    )
}

export default InsertNoticias