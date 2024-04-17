import DivCenterContent from "./DivCenterContent"
import FooterPage from "./Footerpage"
import MenuFaq from "./MenuFaq"
import TopoTitulo from "./TopoTitulo"

function Login(){
    return (
        <div>
            <MenuFaq />
            <TopoTitulo titulo={'Formulário de login'} />
            <DivCenterContent content={"Page login"} />
            <FooterPage />
        </div>
    )
}

export default Login