import DivCenterContent from "../../DivCenterContent"
import FooterPage from "../../Footerpage"
import TopoTitulo from "../../TopoTitulo"
import MenuAdmin from "../MenuAdmin"
import FormularioCategoria from "./FormularioCategoria"

function InsertCategoria(){

    return (
        <div>
            <MenuAdmin />
            <TopoTitulo titulo={"Categoria"} subtitulo={"Administrar Categoria"} />
            <DivCenterContent
                content={
                    <FormularioCategoria
                        type={"insert"}
                        tituloBt={"Inserir"} />
                }
            />
            <FooterPage />
        </div>
    )
}

export default InsertCategoria