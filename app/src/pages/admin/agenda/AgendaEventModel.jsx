import { ConfigUrlImg } from "../../ConfigUrlImg"

function AgendaEventModel(props){
    return(
        <div id="divEventDayList">
            <div id="titleEventDayCurrent" style={{fontWeight: 'bold'}}>{props.titulo}</div>
            <div id="descriptionEventDayCurrent">Local: {props.localEvent} 
                <div style={{float:'right'}}>
                    <a href={"/admin/agenda/edit/"+props.id}>
                        <img src={ConfigUrlImg("imgs/editar.svg")} width="20" style={{filter:'invert(24%) sepia(100%) saturate(354%) hue-rotate(92deg) brightness(91%) contrast(100%)'}} />
                    </a>{"->"}
                </div>
            </div>
            <div id="timeEventDayCurrent">Horário: {props.horainicio} às {props.horafim}</div>
        </div>
    )
}

export default AgendaEventModel