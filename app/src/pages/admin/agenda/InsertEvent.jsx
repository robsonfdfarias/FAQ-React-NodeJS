import DivCenterContent from "../../DivCenterContent"
import FooterPage from "../../Footerpage"
import TopoTitulo from "../../TopoTitulo"
import MenuAdmin from "../MenuAdmin"
import FormularioEvent from "./FormularioEvent"

function InsertEvent(){
    return (
        <div>
            <MenuAdmin />
            <TopoTitulo titulo={"Inserir Evento"} subtitulo={"Administrar agenda SEI"} />
            <DivCenterContent
                content={<FormularioEvent type={'insert'} />}
            />
            <FooterPage />
        </div>
    )
}

export default InsertEvent