import CapacitacaoCalendario from "../../CapacitacaoCalendario";
import AgendaEvent from "./AgendaEvent";

function AgendaContent(props){
    return (
        <div className="capEventGeral">
            <CapacitacaoCalendario
                year={props.year}
                month={props.month}
                day={props.day}
            />
            <AgendaEvent
                year={props.year}
                month={props.month}
                day={props.day}
            />
        </div>
    )
}

export default AgendaContent