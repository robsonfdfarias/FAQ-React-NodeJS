import { useParams } from "react-router-dom";
import DivCenterContent from "./DivCenterContent";
import EventoContent from "./EventoContent";
import FooterPage from "./Footerpage";
import MenuFaq from "./MenuFaq";
import TopoTitulo from "./TopoTitulo";

function Evento(){
    const {data} = useParams();
    return (
        <div>
            <MenuFaq />
            <TopoTitulo titulo={'Evento'} />
            <DivCenterContent 
                content={<EventoContent
                        data={data?data:"2024-04-05"}
                    />}
            />
            <FooterPage />
        </div>
    );
}

export default Evento