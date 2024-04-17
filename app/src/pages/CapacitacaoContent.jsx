import CapacitacaoCalendario from "./CapacitacaoCalendario"
import CapacitacaoEvent from "./CapacitacaoEvent"

function CapacitacaoContent(props){
    return (
        // <div className="capEventGeral" style={{display: 'flex'}}>
        <div className="capEventGeral">
            <CapacitacaoCalendario
                year={props.year}
                month={props.month}
                day={props.day}
            />
            <CapacitacaoEvent
                year={props.year}
                month={props.month}
                day={props.day}
            />
        </div>
    )
}

export default CapacitacaoContent