import { useParams } from "react-router-dom"
import DivCenterContent from "../../DivCenterContent"
import FooterPage from "../../Footerpage"
import TopoTitulo from "../../TopoTitulo"
import MenuAdmin from "../MenuAdmin"
import FormularioCategoria from "./FormularioCategoria"

function EditCategoria(){
    const {id} = useParams();
    return (
        <div>
            <MenuAdmin />
            <TopoTitulo titulo={"Categoria"} subtitulo={"Administrar Categoria"} />
            <DivCenterContent
                content={
                    <FormularioCategoria
                        type={"edit"}
                        id={id}
                        tituloBt={"Editar"} />
                }
            />
            <FooterPage />
        </div>
    )
}

export default EditCategoria