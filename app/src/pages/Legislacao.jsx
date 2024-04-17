import DivCenterContent from "./DivCenterContent"
import FooterPage from "./Footerpage"
import LegislacaoContent from "./LegislacaoContent"
import MenuFaq from "./MenuFaq"
import TopoTitulo from "./TopoTitulo"

function Legislacao(){
    return (
        <div>
            <MenuFaq />
            <TopoTitulo titulo={"Legislação"} />
            <DivCenterContent content={<LegislacaoContent />} />
            <FooterPage />
        </div>
    )
}

export default Legislacao