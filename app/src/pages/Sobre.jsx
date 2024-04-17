import MenuFaq from './MenuFaq'
import TopoTitulo from './TopoTitulo'
import DivCenterContent from './DivCenterContent'
import FooterPage from './Footerpage'
import SobreContent from './SobreContent'
function Sobre(){
    return (
        <div>
            <MenuFaq />
            <TopoTitulo titulo={'Sobre'} />
            <DivCenterContent
                content={<SobreContent />}
            />
            <FooterPage />
        </div>
    )
}
 
export default Sobre