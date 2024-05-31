import { useParams } from "react-router-dom"
import DivCenterContent from "../../DivCenterContent"
import FooterPage from "../../Footerpage"
import TopoTitulo from "../../TopoTitulo"
import MenuAdmin from "../MenuAdmin"
import Formulario from "./Formulario"

function EditNoticias(){
    const {id} = useParams();
    // console.log('ID passando na URL: '+id)
    return (
        <div>
            <MenuAdmin />
            <TopoTitulo titulo={"Editar notícia"} subtitulo={"Administrar notícias SEI"} />
            <DivCenterContent
                content={<Formulario type={'edit'} id={id} />}
            />
            <FooterPage />
        </div>
    )
}

export default EditNoticias