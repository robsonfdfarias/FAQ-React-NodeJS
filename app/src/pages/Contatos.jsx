import MenuFaq from './MenuFaq'
import TopoTitulo from './TopoTitulo'
import DivCenterContent from './DivCenterContent'
import FooterPage from './Footerpage'
import ContatoContent from './ContatoContent'
function Contatos(){
    return (
        <div>
            <MenuFaq />
            <TopoTitulo titulo={'Contatos'} />
            <DivCenterContent
                content={<ContatoContent />}
            />
            <FooterPage />
        </div>
    )
}
 
export default Contatos