import { useEffect, useState } from "react"

function SelectCategory(){
    const [categories, setCategories] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        fetch('http://localhost:3003/actors/returnAllCategories', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response)=>response.json())
        .then((json)=>{
            if(!loaded){
                setCategories(json);
                setLoaded(true);
            }
        })
    })
    return (
        // <select name="category" id="category" style={{width: '100%', minHeight: '30px', borderRadius: '10px', border: '1px solid #cfcfcf', padding: '10px', fontSize: '1.3rem'}}>
        //     {!loaded?
        //     <span>Carregando...</span>:
        //     categories.map((obj)=>(
        //         <option value={obj.categoria.id} key={obj.categoria.id}>{obj.categoria.titulo}</option>
        //     ))}
        // </select>

        <div>
            {!loaded?
                <span>Carregando...</span>:
                    <select name="category" id="category" style={{width: '100%', minHeight: '30px', borderRadius: '10px', border: '1px solid #cfcfcf', padding: '10px', fontSize: '1.3rem'}}>
                        {categories.map((obj)=>(
                            <option value={obj.categoria.id} key={obj.categoria.id}>{obj.categoria.titulo}</option>
                        ))}
                    </select>
                }
        </div>
    )
}

export default SelectCategory