import { useParams } from "react-router-dom"
import DivCenterContent from "../DivCenterContent"
import FooterPage from "../Footerpage"
import TopoTitulo from "../TopoTitulo"
import MenuAdmin from "./MenuAdmin"
import CategoriaContent from "./categoria/CategoriaContent"

function CategoriaAdmin(){
    const {pag} = useParams();
    const page = pag!=undefined?pag:1;
    const numberOfRecords = 3;
    return (
        <div>
            <MenuAdmin />
            <TopoTitulo titulo={"Categoria"} subtitulo={"Administrar categorias"} />
            <DivCenterContent
                content={
                    <CategoriaContent page={page} numberOfRecords={numberOfRecords} />
                }
            />
            <FooterPage />
        </div>
    )
}

export default CategoriaAdmin