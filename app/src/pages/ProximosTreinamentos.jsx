import { useEffect, useState } from "react"

function ProximosTreinamentos(){
    const [nextTreining, setNextTreining] = useState([]);
    var testa = 0;
    useEffect(()=>{
        fetch('http://localhost:3003/actors/blockNextEvent', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            if(testa<1){
                setNextTreining(json);
                testa++;
            }
        })
    }, [])
    return (
        <div id="NextEvents" style={{marginTop: '0px', float: 'left'}}>
            <div id="titleBlockEvents"><strong>Próximos treinamentos</strong></div>
            {nextTreining.length>0?nextTreining.map((obj)=>(
                <div key={obj.id}><a href={"/evento/"+obj.dtinicio}> Evento {obj.id} - {obj.dtinicio}</a></div>
            )):console.log('')}
        </div>
    )
}

export default ProximosTreinamentos