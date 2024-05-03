import DivCenterContent from "../DivCenterContent";
import FooterPage from "../Footerpage";
import TopoTitulo from "../TopoTitulo";
import MenuAdmin from "./MenuAdmin";

function HomeAdmin(){
    return (
        <div>
            <MenuAdmin />
            <TopoTitulo titulo={"Seja bem vindo"} subtitulo={"Painel"} />
            <DivCenterContent content={"Bem vindo a área administrativa. Tudo o que você precisa você encontrará no menu superior"} />
            <FooterPage />
        </div>
    )
}

export default HomeAdmin