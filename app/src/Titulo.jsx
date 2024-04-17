import { useState } from "react"
function Titulo({titulo, cor}){
    const [texto, setTexto] = useState("Um título do estado inicial")
    const [inputText, setInputText] = useState("")

    function clicou(){
        setTexto(inputText)
    }

    return (<div>
        <h2 style={{color:cor}}>{titulo}</h2>
        <h3>{texto}</h3>
        <input value={inputText} onChange={(e)=>{setInputText(e.target.value)}} type="text" />
        <button onClick={clicou}>Clique</button>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, fugiat ad commodi minima repellat obcaecati nihil enim iste amet corporis suscipit placeat sint, pariatur saepe deserunt doloribus veritatis accusantium adipisci!</p>
        </div>)
}

export default Titulo