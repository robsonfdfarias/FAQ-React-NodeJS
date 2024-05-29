import DivCenterContent from "../../DivCenterContent"
import FooterPage from "../../Footerpage"
import TopoTitulo from "../../TopoTitulo"
import MenuAdmin from "../MenuAdmin"
import FormularioPerg from "./FormularioPerg"

function InsertPerg(){
    return (
        <div>
            <MenuAdmin />
            <TopoTitulo titulo={"Inserir pergunta"} subtitulo={"Administrar pergunta SEI"} />
            <DivCenterContent
                content={<FormularioPerg />}
            />
            <FooterPage />
        </div>
    )
}

export default InsertPerg