import { useEffect, useState } from "react";
import { ButtonIcon } from "../../ButtonIcon"
import { ConfigUrlImg } from "../../ConfigUrlImg"
import AgendaEventModel from "./AgendaEventModel";

function AgendaEvent(props){
    const [agenda, setAgenda] = useState([]);
    var teste=true;
    useEffect(()=>{
        fetch('http://localhost:3003/actors/getTreiningByDay',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                year: props.year,
                month: (props.month),
                day: props.day
            })
        })
        .then(response => response.json())
        .then((json) => {
            if(teste) {
                setAgenda(json);
                // console.log(json);
                teste=false;
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }, [])
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    const newEvent = ()=>{
        window.location.href = "/admin/agenda/insert/";
    }
    return (
        <div id="eventDayDiv">
            <div id="generalDivEventDay">
                <div id="eventDayTitle">
                <span style={{fontSize: '1.3rem'}}>Evento para o dia {props.day} de {meses[(props.month-1)]} de {props.year} </span>
                </div>
                {agenda.length>0?agenda.map((obj)=>(
                    <AgendaEventModel
                        id={obj.id}
                        titulo={obj.titulo}
                        localEvent={obj.localEvent}
                        horainicio={obj.horainicio}
                        horafim={obj.horafim}
                        key={obj.id}
                    />
                )):<h3>Nenhum registro encontrado nessa data</h3>}
            </div>
            <div id="btNewEvent" style={{width:'100%', textAlign:'center', paddingTop: '20px'}}>
                {/* <button id="insertArticle" onClick={()=>newEvent()}>+ Novo Evento</button> */}

                <ButtonIcon
                    // img={"imgs/edit-lapis.svg"}
                    href={"/divBtEdit/"}
                    colorDefault={"#0c582c"}
                    colorHover={"#458807"}
                    titulo={"+ Novo Evento"}
                    onClick={()=>newEvent()}
                />
            </div>
        </div>
    )
}

export default AgendaEvent