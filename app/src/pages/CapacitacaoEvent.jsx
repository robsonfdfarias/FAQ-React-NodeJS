import { useEffect } from "react";
import { useState } from "react";
import CapacitacaoEventModel from "./CapacitacaoEventModel";

function CapacitacaoEvent(props){
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
    return (
        <div style={{width: '100%', display: 'row', textAlign: 'center'}}>
            <div>
                <span style={{fontSize: '1.3rem'}}>Evento para o dia {props.day} de {meses[(props.month-1)]} de {props.year} </span>

            </div>
            <div>
                {agenda.length>0?agenda.map((obj) => (
                    <CapacitacaoEventModel
                        status={obj.titulo==false?obj.titulo:''}
                        titulo={obj.titulo!=false?obj.titulo:''}
                        dtinicio={obj.titulo!=false?obj.dtinicio:''}
                        localEvent={obj.titulo!=false?obj.localEvent:''}
                        horainicio={obj.titulo!=false?obj.horainicio:''}
                        horafim={obj.titulo!=false?obj.horafim:''}
                        key={obj.titulo!=false?obj.id:'3'}
                    />
                )):<h3>Nenhum registro encontrado nessa data</h3>}
            </div>
        </div>
    )
}

export default CapacitacaoEvent