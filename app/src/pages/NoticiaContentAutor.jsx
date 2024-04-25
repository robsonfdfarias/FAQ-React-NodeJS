import { useEffect, useState } from "react"

function NoticiaContentAutor(props){
    const [autor, setAutor] = useState([]);
    var testa = 0;
    useEffect(()=>{
        fetch('http://localhost:3003/actors/getAutorById', {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: props.autor
            })
        })
        .then((response) => response.json())
        .then((json) => {
            // console.log(json)
            if(testa<1){
                setAutor(json);
                testa++;
            }
        })
    }, [])
    return (
        <div>
            {autor.length>0?
                <div>{"Publicado por: "+autor[0].nome}<br /></div>
            :console.log('')}
        </div>
    )
}

export default NoticiaContentAutor