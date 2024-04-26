import { useEffect, useState } from "react"

function PerguntasCategoriaBloco(){
    const [categoria, setCategoria] = useState([]);
    var testa=0;
    useEffect(()=>{
        fetch('http://localhost:3003/actors/returnAllCategories', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((json) => {
            if(testa<1){
                // console.log(json);
                setCategoria(json);
                testa++;
            }
        })
        .catch((error)=>{
            console.log('Erro: '+error);
        })
    }, [])
    return (
        <div id="categoriaPergFreq" style={{display: 'block', minWidth: '222px'}}>
            <span id="tituloAcessoRapido"><strong>Categorias</strong></span><br />
            {categoria.length>0?categoria.map((obj) => (
                <a href={"/categoria/"+obj.categoria.id+"/"} key={obj.categoria.id}>{obj.categoria.titulo+" ("+obj.NumReg+")"}<br /></a>
            )):testa=testa}
            {/* <a href={"/categoria/"}>Conhecendo a interface</a>(4)<br />
            <a href="categoria.php?id=2">Pagamentos</a>(1)<br />
            <a href="categoria.php?id=3">Geral</a>(2)<br /> */}
        </div>
    )
}

export default PerguntasCategoriaBloco