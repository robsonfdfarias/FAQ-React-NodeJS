import { useEffect, useState } from "react"

function EventoContentVagasDisponiveis(props){
    const [valor, setValor] = useState(0);
    var testa = 0;
    useEffect(()=>{
        fetch('http://localhost:3003/actors/getAvailableVacanciesToTreining', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: props.idEvento
                // id: 1
            })
        })
        .then(response => response.json())
        .then((json) => {
            // console.log('Vagas ocupadas: '+json[0]['COUNT(*)']);
            calculateVacancies(props.totalVagas, json[0]['COUNT(*)']);
        })
    }, [])
    const calculateVacancies = (totalVaga, vagas) => {
        const vg = totalVaga - vagas;
        if(testa<2){
            setValor(vg);
            testa++;
        }
    }
    return (
        <header id="data">Vagas disponíveis: <span id="catSpan"> {valor?valor:0}</span></header>
    )
}

export default EventoContentVagasDisponiveis