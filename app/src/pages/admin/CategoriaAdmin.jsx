import { useParams } from "react-router-dom"
import DivCenterContent from "../DivCenterContent"
import FooterPage from "../Footerpage"
import TopoTitulo from "../TopoTitulo"
import MenuAdmin from "./MenuAdmin"
import CategoriaContent from "./categoria/CategoriaContent"

function CategoriaAdmin(){
    const {page} = useParams();
    // console.log(page)
    const page2 = page!=undefined?page-1:0;
    // console.log(page2)
    const numberOfRecords = 2;
    return (
        <div>
            <MenuAdmin />
            <TopoTitulo titulo={"Categoria"} subtitulo={"Administrar categorias"} />
            <DivCenterContent
                content={
                    <CategoriaContent
                        page={page2} 
                        numberOfRecords={numberOfRecords}
                        bigTitle={"Categorias:"}
                        titleBtNew={"+ Nova Categoria"}
                        urlQuery={'http://localhost:3003/actors/getAdmCategoryPage'}
                        urlPaginator={'http://localhost:3003/actors/getNumberCategories'}
                        linkBtNew={'/admin/categoria/insert/'}
                        linkEditRegist={'/admin/categoria/edit/'}
                        linkDeleteRegist={'/admin/categoria/delete/'}
                     />
                }
            />
            <FooterPage />
        </div>
    )
}

export default CategoriaAdmin