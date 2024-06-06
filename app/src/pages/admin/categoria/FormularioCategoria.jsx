import { useEffect, useState } from "react";
import { ButtonIcon } from "../../ButtonIcon"

function FormularioCategoria(props){
    var conta = 0;
    const [cat, setCat] = useState([]);
    const [update, setUpdate] = useState(true);
    const [getLoad, setGetLoad] = useState(true);
    const st = ["Inativo", "Ativo"];

    useEffect(()=>{
        const titulo = document.getElementById('titulo');
        const statusCat = document.getElementById('statusCat');
        const bt = document.getElementById('bt');
        bt.addEventListener('click', () => {
            checkFilds();
        })
        const checkFilds = () => {
            if(titulo.value=='' || titulo.value==undefined){
                alert("O campo título é obrigatório.");
                return false;
            }else if(statusCat.value=='' || statusCat.value==undefined){
                alert("O campo Status da categoria é obrigatório.");
                return false;
            }
            
            actionBT(titulo.value, statusCat.value);
        }
        async function actionBT(titulo, statusCat){
            var url='';
            if(props.type=='insert'){
                url = 'http://localhost:3003/actors/insertCategory';
            }else{
                url = 'http://localhost:3003/actors/updateCategory';
            }
            await fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: props.type!="insert"?props.id:1,
                    titulo: titulo,
                    statusCat: statusCat
                })
            })
            .then((response)=>response.json())
            .then((json)=>{
                if(conta<1){
                    if(json.retorno){
                        window.location.href = '/admin/categoria/1'
                    }else{
                        alert('Erro ao cadastrar a categoria. Contate o administrador.');
                    }
                }
            })
            .catch((erro)=>{
                console.log('Segue o erro encontrado:');
                console.log(erro);
            })
        }

        if(props.type!='insert'){
            getCat(props.id);
        }

        async function getCat(id){
            await fetch('http://localhost:3003/actors/returnCategoryById', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id
                })
            })
            .then((response)=>response.json())
            .then((json)=>{
                if(getLoad){
                    setCat(json);
                    console.log(json)
                    setGetLoad(false);
                }
            })
            .catch((erro)=>{
                console.log(erro)
            })
        }
    }, [])

    const styles = {
        inputs: {
            // width: '98%', 
            width: 'calc(100% - 20px)', 
            minHeight: '30px', 
            borderRadius: '10px', 
            border: '1px solid #cfcfcf', 
            padding: '10px', 
            fontSize: '1.3rem'
        }
    }
    
    return (
        <div>
            <input type="text" id="titulo" key={"titulo"} style={styles.inputs} placeholder="Insira o título da categoria"
            defaultValue={cat.length>0?cat[0].titulo:''} /><br />
            Status da categoria:
            <select name="statusCat" id="statusCat" key={"statusCat"} style={{...styles.inputs, ...{width:'100%'}}}>
                <option value="1">Ativo</option>
                <option value="0">Inativo</option>
                {cat.length>0?
                    <option value={cat[0].statusCat} selected>{'Atual -> '+st[cat[0].statusCat]}</option>
                :''}
            </select>
            <br />
            <br />
            <ButtonIcon
                titulo={props.tituloBt}
                colorDefault={"#0c582c"}
                colorHover={"#458807"}
                onClick={()=>console.log("")}
                id={"bt"}
                />
        </div>
    )
}

export default FormularioCategoria