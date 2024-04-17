import MenuFaq from './MenuFaq'
import TopoTitulo from './TopoTitulo'
import DivCenterContent from './DivCenterContent'
import FooterPage from './Footerpage'
import { useParams } from 'react-router-dom'
import CapacitacaoContent from './CapacitacaoContent'
function Capacitacao(){
    const {dia, mes, ano} = useParams();
    return (
        <div>
            <MenuFaq />
            <TopoTitulo titulo={'Capacitação'} />
            <DivCenterContent
                content={<CapacitacaoContent
                        year = {ano}
                        month = {mes}
                        day = {dia}
                    />}
            />
            <FooterPage />
        </div>
    )
}
 
export default Capacitacao