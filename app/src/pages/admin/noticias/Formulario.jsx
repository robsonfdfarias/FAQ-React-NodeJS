import { useEffect, useState } from "react"
import Editor from "../rffeditor/Editor"

function Formulario(props){
    const [noticia, setNoticia] = useState([]);
    const [loaded, setLoaded] = useState(true);
    const [upload, setUpload] = useState(true);
    const est = ['Inativo', 'Ativo'];

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
            if(props.type=='insert'){
                url = 'http://localhost:3003/actors/insertNews'
            }else{
                url='http://localhost:3003/actors/updateNews'
                data = noticia.datacad;
            }

            if(upload){
                await fetch(url, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: props.id!=undefined?props.id:'',
                        titulo: titulo.value,
                        resumo: resumo.value,
                        autor: localStorage.getItem("id"),
                        datacad: data,
                        conteudo: conteudo.value,
                        statusNews: statusNews.value
                    })
                })
                .then((response)=>response.json())
                .then((json)=>{
                    if(json.retorno){
                        // alert('Cadastrado com sucesso');
                        window.location.href = '/admin/noticia/';
                    }else{
                        alert('Falha no cadastro');
                        console.log('Falha no cadastro')
                    }
                    
                })
                setUpload(false)
            }
            
            // console.log('chegou no cadastro')
        }

        if(props.type!='insert'){
            // console.log('Pega a noticia no servidor...')
            getNoticia();
        }

        function getNoticia(){
            const endPoint = 'http://localhost:3003/actors/news/'+props.id;
            fetch(endPoint)
            .then((response)=>response.json())
            .then((json)=>{
                if(loaded){
                    // console.log(json)
                    setNoticia(json);
                    setLoaded(false);
                }
            })
            .catch((error)=>{
                console.log('Ocorreu o erro...')
                console.log(error)
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
                                content={noticia[0]!=undefined?noticia[0].conteudo:''} 
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                        {/* <form action="noticiaInsert.submit.php" method="post" id="formulario" encType="multipart/form-data" autoComplete="on" onSubmit={()=>ValidateContactForm()}></form> */}
                        <form action="noticiaInsert.submit.php" method="post" id="formulario" encType="multipart/form-data" autoComplete="on"></form>
                            <input type="text" id="titulo" name="titulo" placeholder="Insira o título do artigo" required="" spellCheck="true" defaultValue={noticia[0]!=undefined?noticia[0].titulo:''}
                            style={styles.inputs} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <input type="text" id="resumo" name="resumo" placeholder="Insira um resumo do artigo" required="" pattern="[A-Za-z0-9.-\/|* ']{4,}" maxLength="250" defaultValue={noticia[0]!=undefined?noticia[0].resumo:''}
                            style={styles.inputs} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            Status:<br />
                            <select name="statusNews" id="statusNews" style={{width: '100%', minHeight: '30px', borderRadius: '10px', border: '1px solid #cfcfcf', padding: '10px', fontSize: '1.3rem'}}>
                                <option value="1">Ativo</option>
                                <option value="0">Inativo</option>
                                {noticia[0]!=undefined?
                                    <option value={noticia[0].statusNews} defaultValue>{'Atual -> '+est[noticia[0].statusNews]}</option>
                                :''}
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