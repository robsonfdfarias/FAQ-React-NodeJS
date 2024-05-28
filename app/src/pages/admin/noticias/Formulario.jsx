import { useEffect } from "react"
import Editor from "../rffeditor/Editor"

function Formulario(){
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
        var titulo='';
        var resumo = '';
        var conteudo = '';
        var statusNews = '';
        titulo = document.getElementById("titulo");
        resumo = document.getElementById("resumo");
        conteudo = document.getElementById("conteudo");
        statusNews = document.getElementById("statusNews");

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
            var data = Date.now();
            await fetch('http://localhost:3003/actors/getImages', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    titulo: this.titulo,
                    resumo: resumo,
                    autor: localStorage.getItem("id"),
                    datacad: data,
                    conteudo: conteudo,
                    statusNews: statusNews.value
                })
            })
            .then((response)=>response.json())
            .then((json)=>{
                if(json.retorno){
                    alert('Cadastrado com sucesso');
                    console.log('Cadastrado com sucesso')
                }else{
                    alert('Falha no cadastro');
                    console.log('Falha no cadastro')
                }
                
            })
            // console.log('chegou no cadastro')
        }
    })
    
    return (
        <div id="formInsert"> 
            <table>
                <tbody>
                    <tr>
                        <td colSpan="2">
                            <Editor />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                        {/* <form action="noticiaInsert.submit.php" method="post" id="formulario" encType="multipart/form-data" autoComplete="on" onSubmit={()=>ValidateContactForm()}></form> */}
                        <form action="noticiaInsert.submit.php" method="post" id="formulario" encType="multipart/form-data" autoComplete="on"></form>
                            <input type="text" id="titulo" name="titulo" placeholder="Insira o título do artigo" required="" spellCheck="true"
                            style={styles.inputs} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <input type="text" id="resumo" name="resumo" placeholder="Insira um resumo do artigo" required="" pattern="[A-Za-z0-9.-\/|* ']{4,}" maxLength="250"
                            style={styles.inputs} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            Status:<br />
                            <select name="statusNews" id="statusNews" style={{width: '100%', minHeight: '30px', borderRadius: '10px', border: '1px solid #cfcfcf', padding: '10px', fontSize: '1.3rem'}}>
                                <option value="1">Ativo</option>
                                <option value="0">Inativo</option>
                            </select>
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

export default Formulario