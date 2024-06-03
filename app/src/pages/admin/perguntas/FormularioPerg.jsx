import { useEffect, useState } from "react"
import Editor from "../rffeditor/Editor"
import SelectCategory from "../SelectCategory";

function FormularioPerg(props){
    const [perg, setPerg] = useState([]);
    const [loaded, setLoaded] = useState(true);
    const [catTitulo, setCatTitulo] = useState(undefined);
    const [loadCat, setLoadCat] = useState(true);
    const [dtP, setDtP] = useState('');
    const prior = ['Não', 'Sim'];
    var dt = new Date();
    let arrayMonth = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', 
                        '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
    var data = dt.getDate()+'/'+arrayMonth[dt.getMonth()]+'/'+dt.getFullYear();

    const styles = {
        inputs: {
            width: '98%', 
            minHeight: '30px', 
            borderRadius: '10px', 
            border: '1px solid #cfcfcf', 
            padding: '10px', 
            fontSize: '1.3rem'
        }
    }

    useEffect(()=>{
        var titulo= document.getElementById("titulo");
        var resumo = document.getElementById("resumo");
        var conteudo = document.getElementById("conteudo");
        var tags = document.getElementById("tags");
        var prioridade = document.getElementById("prioridade");
        var category = document.getElementById("category");

        var enviar = document.getElementById("enviar");
        enviar.addEventListener("click", function(){
            // insertTextoEmTextarea();
            if(ValidateContactForm()){
                cadastra();
            }
        })

        function insertTextoEmTextarea(){
            var campoTexto = document.getElementById("texto").innerHTML;
            // console.log(campoTexto)
            // var conteudo = document.getElementById("conteudo");
            // conteudo.innerHTML = campoTexto;
            conteudo.innerHTML = campoTexto;
        }

        function ValidateContactForm(){
            insertTextoEmTextarea();
            // console.log(titulo)
            if(titulo.value==''){
                alert("O campo titulo não pode ficar em branco!");
                return false;
            }else if(resumo.value==''){
                alert("O campo resumo não pode ficar em branco!");
                return false;
            }else if(conteudo.value==''){
                alert("O campo conteudo não pode ficar em branco!");
                return false;
            }
            return true;
        }

        async function cadastra(){
            var url;
            var dtAlter = '';
            if(props.type=='insert'){
                console.log('Está no insert')
                url = 'http://localhost:3003/actors/insertCommonQuestion'
            }else{
                url='http://localhost:3003/actors/updateCommonQuestion'
                dtAlter=data;
                data = dtP;
            }
            category = document.getElementById("category");
            
            await fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: props.id!=undefined?props.id:1,
                    titulo: titulo.value,
                    resumo: resumo.value,
                    conteudo: conteudo.value,
                    tags: tags.value,
                    img: '',
                    prioridade: prioridade.value,
                    categoria: category.value,
                    // autor: localStorage.getItem("id"),
                    dataPost: data,
                    dataAlter: dtAlter
                })
            })
            .then((response)=>response.json())
            .then((json)=>{
                if(json.retorno){ 
                    alert('Cadastrado com sucesso');
                    console.log('Cadastrado com sucesso')
                    window.location.href = '/admin/perguntasAdm/'
                }else{
                    alert('Falha no cadastro');
                    console.log('Falha no cadastro')
                }
                
            })
            // console.log('chegou no cadastro')
        }

        if(props.type!='insert'){
            // console.log('Pega a noticia no servidor...')
            getPerg();
        }

        function getPerg(){
            const endPoint = 'http://localhost:3003/actors/getCommonQuestionById/'+props.id;
            fetch(endPoint, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then((response)=>response.json())
            .then((json)=>{
                if(loaded){
                    // console.log(json)
                    setPerg(json);
                    getCateg(json[0].categoria);
                    setDtP(json[0].dataPost);
                    setLoaded(false);
                }
            })
            .catch((error)=>{
                console.log('Ocorreu o erro...')
                console.log(error)
            })
        }
        function getCateg(id){
            const endPoint2 = 'http://localhost:3003/actors/returnCategoryById';
            fetch(endPoint2, {
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
                if(loadCat){
                    setCatTitulo(json[0].titulo);
                    setLoadCat(false);
                }
            })
        }
    }, [])
    
    return (
        <div id="formInsert"> 
            <table>
                <tbody>
                    <tr>
                        <td colSpan="2">
                            <Editor 
                                content={perg[0]!=undefined?perg[0].conteudo:''}
                             />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                        {/* <form action="noticiaInsert.submit.php" method="post" id="formulario" encType="multipart/form-data" autoComplete="on" onSubmit={()=>ValidateContactForm()}></form> */}
                        <form action="noticiaInsert.submit.php" method="post" id="formulario" encType="multipart/form-data" autoComplete="on"></form>
                            <input type="text" id="titulo" name="titulo" placeholder="Insira o título do artigo" required="" spellCheck="true" defaultValue={perg[0]!=undefined?perg[0].titulo:''}
                            style={styles.inputs} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <input type="text" id="resumo" name="resumo" placeholder="Insira um resumo do artigo" required="" pattern="[A-Za-z0-9.-\/|* ']{4,}" maxLength="250" defaultValue={perg[0]!=undefined?perg[0].resumo:''}
                            style={styles.inputs} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <input type="text" id="tags" name="tags" placeholder="Insira as tags em maiúsculo separado por virgulas. Ex: PHP,ASP,JAVA" required="" pattern="[A-Za-z0-9.-\/|* ']{4,}" maxLength="250" defaultValue={perg[0]!=undefined?perg[0].tags:''}
                            style={styles.inputs} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            Prioridade:<br />
                            <select name="prioridade" id="prioridade" style={{width: '100%', minHeight: '30px', borderRadius: '10px', border: '1px solid #cfcfcf', padding: '10px', fontSize: '1.3rem'}}>
                                <option value="1">Sim</option>
                                <option value="0">Não</option>
                                defaultValue={perg[0]!=undefined?
                                    <option value={perg[0].prioridade} selected={"selected"}>{'Atual -> '+prior[perg[0].prioridade]}</option>
                                :''}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            Categoria:<br />
                            {catTitulo?
                            <SelectCategory
                            id={perg[0]!=undefined?perg[0].categoria:undefined}
                            titulo={catTitulo}
                            />:
                            <SelectCategory
                                    id={perg[0]!=undefined?perg[0].categoria:undefined}
                                    titulo={catTitulo}
                                />}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2"><input type="submit" id="enviar" style={{...styles.inputs, ...{height: "45px"}}} /></td>
                    </tr>
                </tbody>
                </table>
            <textarea name="conteudo" id="conteudo" cols="30" rows="10" style={{display: 'none'}} required=""></textarea>
        </div>
    )
}

export default FormularioPerg