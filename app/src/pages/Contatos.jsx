import MenuFaq from './MenuFaq'
import TopoTitulo from './TopoTitulo'
import DivCenterContent from './DivCenterContent'
import FooterPage from './Footerpage'
import ContatoContent from './ContatoContent'
function Contatos(){
    return (
        <div style={{position: 'relative', height: '100vh'}}>
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