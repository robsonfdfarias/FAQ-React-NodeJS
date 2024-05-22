function ColorFont(){
    var coresHexadecimais = [
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
    return (
        <div style={{display: "flex", flexWrap: 'wrap', flexDirection: 'row', marginTop: '20px', justifyContent: 'space-between'}}>
        {/* <div style={{display: "flex", flexWrap: 'wrap', flexDirection: 'row', marginTop: '20px'}}> */}
            {/* {cores.map((obj, index)=>(
                // <div key={index} style={{width: '40px', height: '40px', backgroundColor: obj}} title={obj}></div>
                inseriCor(obj, index)
            ))} */}

            <div style={{display: "flex", flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between'}}>
                {rr.map((obj, index)=>(
                    <div key={index+"-"+obj} style={{width: '40px', height: '40px', backgroundColor: obj}} title={obj}></div>
                ))}
            </div>

            <div style={{display: "flex", flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between'}}>
                {rr2.map((obj, index)=>(
                    <div key={index+"-"+obj} style={{width: '40px', height: '40px', backgroundColor: obj}} title={obj}></div>
                ))}
            </div>

            <div style={{display: "flex", flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between'}}>
                {rr3.map((obj, index)=>(
                    <div key={index+"-"+obj} style={{width: '40px', height: '40px', backgroundColor: obj}} title={obj}></div>
                ))}
            </div>


            <div style={{display: "flex", flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between'}}>
                {gg.map((obj, index)=>(
                    <div key={index+"-"+obj} style={{width: '40px', height: '40px', backgroundColor: obj}} title={obj}></div>
                ))}
            </div>

            <div style={{display: "flex", flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between'}}>
                {gg2.map((obj, index)=>(
                    <div key={index+"-"+obj} style={{width: '40px', height: '40px', backgroundColor: obj}} title={obj}></div>
                ))}
            </div>

            <div style={{display: "flex", flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between'}}>
                {gg3.map((obj, index)=>(
                    <div key={index+"-"+obj} style={{width: '40px', height: '40px', backgroundColor: obj}} title={obj}></div>
                ))}
            </div>


            <div style={{display: "flex", flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between'}}>
                {bb.map((obj, index)=>(
                    <div key={index+"-"+obj} style={{width: '40px', height: '40px', backgroundColor: obj}} title={obj}></div>
                ))}
            </div>

            <div style={{display: "flex", flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between'}}>
                {bb2.map((obj, index)=>(
                    <div key={index+"-"+obj} style={{width: '40px', height: '40px', backgroundColor: obj}} title={obj}></div>
                ))}
            </div>

            <div style={{display: "flex", flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between'}}>
                {bb3.map((obj, index)=>(
                    <div key={index+"-"+obj} style={{width: '40px', height: '40px', backgroundColor: obj}} title={obj}></div>
                ))}
            </div>
        </div>
    )
}

export default ColorFont