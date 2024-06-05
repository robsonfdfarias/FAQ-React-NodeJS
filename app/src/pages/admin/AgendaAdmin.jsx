import { useParams } from "react-router-dom";
import DivCenterContent from "../DivCenterContent";
import FooterPage from "../Footerpage";
import TopoTitulo from "../TopoTitulo";
import MenuAdmin from "./MenuAdmin";
import AgendaContent from "./agenda/AgendaContent";

function AgendaAdmin(){
    const {dia, mes, ano} = useParams();
    const dt = new Date();
    const num = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', 
                '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', 
                '25', '26', '27', '28', '29', '30', '31'];
    return (
        <div style={{position: 'relative', height: '100vh'}}>
            <MenuAdmin />
            <TopoTitulo titulo={"Administrar eventos"} subtitulo={"Painel de eventos"} />
            <DivCenterContent content={
                <AgendaContent
                    year = {ano?ano:dt.getFullYear()}
                    month = {mes?mes:num[dt.getMonth()]}
                    day = {dia?dia:dt.getDate()} 
                />
            } />
            <FooterPage />
        </div>
    )
}

export default AgendaAdmin