import { useEffect, useState } from "react"
import DirImage from "./DirImage";

function ImageList(){
    const [lista, setLista] = useState([]);
    var conta = 0;
    useEffect(()=>{
        fetch('http://localhost:3003/actors/getImages', {
            method: 'POST'
        })
        .then((response)=>response.json())
        .then((json)=>{
            if(conta<1){
                setLista(json);
                console.log(json)
                conta++;
            }
        })
        .catch((erro)=>{
            console.log('Erro encontrado: '+erro);
        })
    }, [])
    return (
        <div style={{display: 'ruby-text', paddingTop: '25px'}}>
            {lista.length>0?lista.map(obj=>(
                <DirImage image={obj} key={obj} />
            )):conta=conta}
        </div>
    )
}

export default ImageList