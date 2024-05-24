import { useEffect } from "react";
import { ConfigUrlImg } from "../../ConfigUrlImg";

function ColorFont(){
    var coresHex = [
        "#000000", // Preto
        "#FFFFFF", // Branco
        "#FF0000", // Vermelho
        "#00FF00", // Verde
        "#0000FF", // Azul
        "#FFFF00", // Amarelo
        "#FF00FF", // Magenta
        "#00FFFF", // Ciano
        "#800080", // Roxo
        "#FFA500", // Laranja
        "#A52A2A", // Marrom
        "#808080", // Cinza
        "#008000", // Verde Escuro
        "#008080", // Verde Azulado
        "#800000", // Marrom Escuro
        "#808000", // Oliva
        "#000080", // Azul Escuro
        "#800080", // Roxo
        "#008080", // Verde Azulado
        "#808000", // Oliva
        "#FFC0CB", // Rosa
        "#800000", // Marrom Escuro
        "#FFD700", // Ouro
        "#FFA07A", // Salmão Claro
        "#FF6347", // Tomate
        "#FF4500", // Laranja Vermelho
        "#FF69B4", // Rosa Quente
        "#DA70D6", // Orquídea
        "#DAA520", // Ouro Antigo
        "#FF8C00"  // Laranja Escuro
    ];
    const cores_hex = [
        "#FF0000", "#0000FF", "#00FF00", "#FFFF00", "#FFA500", "#800080", "#FFC0CB", "#A52A2A",
        "#000000", "#FFFFFF", "#808080", "#00FFFF", "#FF00FF", "#40E0D0", "#4B0082", "#8A2BE2",
        "#00FFFF", "#E6E6FA", "#808000", "#FFD700", "#C0C0C0", "#CD7F32", "#F5F5DC", "#F0E68C",
        "#FF4500", "#008000", "#0000FF", "#FF8C00", "#4682B4", "#FFFF00", "#F08080", "#008080",
        "#00CED1", "#7FFFD4", "#008080", "#DC143C", "#9932CC", "#40E0D0", "#800000", "#FF00FF",
        "#FFA500", "#00FF7F", "#E6E6FA", "#2F4F4F", "#800000", "#800080", "#D2B48C", "#DA70D6",
        "#D2691E", "#98FB98", "#800000", "#483D8B", "#F0E68C", "#FAEBD7", "#FF7F50", "#FF69B4",
        "#DEB887", "#FFFACD", "#FF7F50", "#FF6347"
    ];
    const styles = {
        geralCores: {
            display: "flex", 
            flexWrap: 'wrap', 
            flexDirection: 'row', 
            width: '400px', 
            marginTop: '20px', 
            justifyContent: 'space-between', 
            padding: '15px'
        },
        divs: {
            width: '100px',
            height: '100%',
            marginRight: '15px'
        },
        btInsertColor: {
            width: '150px',
            height: '100%',
            fontSize: '1.2rem',
            // border: '1px solid #cdcdcd'
        },
        divInput: {
            height: '50px',
            display: "flex", 
            flexWrap: 'wrap', 
            flexDirection: 'row', 
        }
    }

    useEffect(()=>{
        const script = document.createElement('script');
        script.src=ConfigUrlImg('rffeditor/ScriptInternoSetColor.js');
        document.getElementById('scripts').append(script);
    })

    function checkClickSetColor(obj){
        const pai = obj.parentNode;
        // console.log(pai.children.length)
        // obj.style.outline='2px dotted #ff1414'
        for(let i=0; i<pai.children.length; i++){
            pai.children[i].style.outline='none'
            pai.children[i].style.zIndex=''+i
        }
        obj.style.outline='3px dotted #ff1414';
        obj.style.zIndex='100';
    }
    
    return (
        <div style={styles.geralCores}>
            <div style={{display: "flex", flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between'}}>
                {cores_hex.map((obj, index)=>(
                    <div key={index+"-"+obj} 
                    id={"obj-"+index}
                    onClick={()=>{selColor(obj), checkClickSetColor(document.getElementById("obj-"+index))}} 
                    style={{width: '40px', height: '40px', backgroundColor: obj}} 
                    title={obj}
                    onMouseEnter={()=>document.getElementById("obj-"+index).style.boxShadow='inset 0 0 0.5em 0 rgba(0,0,0,0.5), 0 0 0.5em 0 rgba(0,0,0,0.5)'}
                    onMouseLeave={()=>document.getElementById("obj-"+index).style.boxShadow='inset 0 0 0.5em 0 rgba(0,0,0,0.0), 0 0 0.5em 0 rgba(0,0,0,0.0)'}></div>
                ))}
            </div>
            <div id="espaco" style={{lineHeight: '20px', height: '20px', width: '100%'}}><hr /></div>
            <div id="inputs" style={styles.divInput}>
                {/* <input type="text" disabled style={styles.inputs} id="valor" /> */}
                <div id="valor" style={styles.divs}></div>
                <div id="hex" style={styles.divs}></div>
                <button style={styles.btInsertColor} onClick={()=>inseriColor()}>Inserir cor</button>
            </div>
            <div id="scripts"></div>
        </div>
    )
}

export default ColorFont