import { useEffect, useState } from "react"

function PerguntasQueryCategoria(props){
    const [categoria, setCategoria] = useState([]);
    var testa = 0;
    useEffect(()=>{
        fetch('http://localhost:3003/actors/returnCategoryById', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: props.idCateg
            })
        })
        .then((response) => response.json())
        .then((json) => {
            // console.log(json)
            if(testa<1){
                setCategoria(json);
                testa++;
            }
        })
        .catch((error) => {
            console.log('Segue o erro: '+error);
        })
    }, [])
    return (
        <aside>
            {categoria.length>0?categoria.map((obj) => (
                <section id="cat" key={obj.id} style={{height: 'fit-content'}}>Categoria: <span id="catSpan">{obj.titulo}</span></section>
            )):testa=testa}
        </aside>
    )
}

export default PerguntasQueryCategoria