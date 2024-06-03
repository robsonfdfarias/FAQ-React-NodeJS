import { useParams } from "react-router-dom"
import DivCenterContent from "../../DivCenterContent"
import FooterPage from "../../Footerpage"
import TopoTitulo from "../../TopoTitulo"
import MenuAdmin from "../MenuAdmin"
import FormularioPerg from "./FormularioPerg"

function EditPerg(){
    const {id} = useParams();
    // console.log('ID passando na URL: '+id)
    return (
        <div>
            <MenuAdmin />
            <TopoTitulo titulo={"Editar pergunta"} subtitulo={"Administrar perguntas SEI"} />
            <DivCenterContent
                content={<FormularioPerg type={'edit'} id={id} />}
            />
            <FooterPage />
        </div>
    )
}

export default EditPerg