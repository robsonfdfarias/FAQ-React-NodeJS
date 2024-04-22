import { useEffect, useState } from "react"

function EventoContentSelectEvent(props){
    const [eventos, setEventos] = useState([]);
    var testa=0;
    useEffect(()=>{
        fetch('http://localhost:3003/actors/getTreiningByDate', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: props.data
            })
        })
        .then(response => response.json())
        .then((json) => {
            // console.log(json)
            if(testa<1){
                setEventos(json);
                testa++;
            }
        })
    }, [])
    return (
        <select name="idevento" id="idevento" required="" style={{width: '100%'}}>
            {eventos.length>0?eventos.map((obj)=>(
                <option value={obj.id} key={obj.id}>{obj.titulo} - {obj.horainicio}</option>
            )):console.log('')}
        </select>
    )
}

export default EventoContentSelectEvent