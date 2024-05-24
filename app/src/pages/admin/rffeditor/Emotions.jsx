import { useEffect, useState } from "react";

function Emotions(){
    const [emotions, setEmotions] = useState([])
    var conta = 0;
    const urlImagem = 'http://localhost:3003/emotions/'
    useEffect(()=>{
        fetch('http://localhost:3003/actors/getEmotions', {
            method: 'GET'
        })
        .then((response)=>response.json())
        .then((json)=>{
            if(conta<1){
                console.log(json)
                setEmotions(json);
                conta++;
            }
        })
    }, [])
    return (
        <div id="emotions">
                <div id="topEmotions">
                    <div id="tituloEmotions">Inserir emotions</div>
                    <div id="fecharEmotions" onClick={()=>fechaJanEmotions()}>X</div>
                </div>
                <div id="listaEmotions">
                    {emotions.length>0?emotions.map((obj, index)=>(
                        <div key={index} style={{maxWidth:"100%", alignItems: "center", display: "flex", flexDirection: "column", flexWrap: "wrap", justifyContent: "center", padding: "20px"}}>
                            <div><h3>{obj.pasta}</h3></div>
                            <div style={{maxWidth:"100%", alignItems: "center", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", padding: "20px"}}>
                                {obj.files.map((files, index)=>(
                                    <div key={"file"+index} className="emotionsList"><img src={urlImagem+obj.pasta+'/'+files} alt={files} title={files} id={files} onClick={()=>{insertEmotions(document.getElementById(files)), fechaJanEmotions()}} /></div>
                                ))}
                            </div>
                        </div>
                    )): console.log('')}
                </div>
            </div>
    )
}

export default Emotions