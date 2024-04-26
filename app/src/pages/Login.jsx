import DivCenterContent from "./DivCenterContent"
import FooterPage from "./Footerpage"
import LoginContent from "./LoginContent"
import MenuFaq from "./MenuFaq"
import TopoTitulo from "./TopoTitulo"

function Login(){
    return (
        <div>
            <MenuFaq />
            <TopoTitulo titulo={'Formulário de login'} />
            <DivCenterContent content={<LoginContent />} />
            <FooterPage />
        </div>
    )
}

export default Login