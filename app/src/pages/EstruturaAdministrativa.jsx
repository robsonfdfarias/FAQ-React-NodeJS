import DivCenterContent from "./DivCenterContent"
import EstrutAdminContent from "./EstrutAdminContent"
import FooterPage from "./Footerpage"
import MenuFaq from "./MenuFaq"
import TopoTitulo from "./TopoTitulo"

function EstruturaAdministrativa(){
    return (
        <div>
            <MenuFaq />
            <TopoTitulo titulo={"Estrutura Administrativa"} />
            <DivCenterContent content={<EstrutAdminContent />} />
            <FooterPage />
        </div>
    )
}

export default EstruturaAdministrativa