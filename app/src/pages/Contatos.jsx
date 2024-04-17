import MenuFaq from './MenuFaq'
import TopoTitulo from './TopoTitulo'
import DivCenterContent from './DivCenterContent'
import FooterPage from './Footerpage'
function Contatos(){
    return (
        <div>
            <MenuFaq />
            <TopoTitulo titulo={'Contatos'} />
            <DivCenterContent
                content={<a href='/'>Conteúdo da Contatos</a>}
            />
            <FooterPage />
        </div>
    )
}
 
export default Contatos