import { useParams } from "react-router-dom"
import DivCenterContent from "../../DivCenterContent"
import FooterPage from "../../Footerpage"
import TopoTitulo from "../../TopoTitulo"
import MenuAdmin from "../MenuAdmin"
import FormularioEvent from "./FormularioEvent"

function EditEvent(){
    const {id} = useParams();
    return (
        <div>
            <MenuAdmin />
            <TopoTitulo titulo={"Editar Evento"} subtitulo={"Administrar agenda SEI"} />
            <DivCenterContent
                content={<FormularioEvent type={'edit'} id={id} />}
            />
            <FooterPage />
        </div>
    )
}

export default EditEvent