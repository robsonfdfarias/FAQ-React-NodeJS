import BlocoAcessoRapido from "./BlocoAcessoRapido"
import Carrossel from "./Carrossel"
import CarrosselComplete from "./CarrosselComplete"
import NoticiasRecentes from "./NoticiasRecentes"
import ProximosTreinamentos from "./ProximosTreinamentos"

function HomeContent(){
    return (
        <div id="itemdoisHome">
            <div id="blockLeft">
                <BlocoAcessoRapido />
                <ProximosTreinamentos />
            </div>
            <div id="centroItemDoisHome">
                {/* <Carrossel /> */}
                <CarrosselComplete />
                <NoticiasRecentes />
            </div>
        </div>
    )
}

export default HomeContent