import MenuFaq from './MenuFaq'
import TopoTitulo from './TopoTitulo'
import DivCenterContent from './DivCenterContent'
import FooterPage from './Footerpage'
import HomeContent from './HomeContent'
function Home(){
    return (
        <div style={{position: 'relative', height: '100vh', width: '100vw'}}>
            <MenuFaq />
            <TopoTitulo titulo={'Home'} />
            <DivCenterContent
                content={<HomeContent />}
            />
            <FooterPage />
        </div>
    )
}
 
export default Home