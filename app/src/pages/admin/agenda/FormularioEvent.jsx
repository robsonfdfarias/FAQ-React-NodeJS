import { useEffect, useState } from "react"
import Editor from "../rffeditor/Editor"
import { ConfigUrlImg } from "../../ConfigUrlImg";

function FormularioEvent(props){
    const [evento, setEvento] = useState([]);
    const [loaded, setLoaded] = useState(true);
    const [upload, setUpload] = useState(true);
    const est = ['Não', 'Sim'];

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
        var dtinicio=document.getElementById("dtinicio");
        var dtfim=document.getElementById("dtfim");
        var conteudo = document.getElementById("conteudo");
        var vagas = document.getElementById("vagas");
        var certificado = document.getElementById("certificado");
        var titulo=document.getElementById("titulo");
        var horainicio=document.getElementById("horainicio");
        var horafim=document.getElementById("horafim");
        var local = document.getElementById("local");

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
            }else if(local.value==''){
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
                url = 'http://localhost:3003/actors/insertEvent'
            }else{
                url='http://localhost:3003/actors/updateNews'
                data = evento.datacad;
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
                        dtpost: data,
                        dtinicio: dtinicio.value,
                        dtfim: dtfim.value,
                        texto: conteudo.value,
                        vagas: vagas.value,
                        certificado: certificado.value,
                        titulo: titulo.value,
                        horainicio: horainicio.value,
                        horafim: horafim.value,
                        localEvent: local.value
                    })
                })
                .then((response)=>response.json())
                .then((json)=>{
                    if(json.retorno){
                        // alert('Cadastrado com sucesso');
                        window.location.href = '/admin/agenda/';
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
            const endPoint = 'http://localhost:3003/actors/getEventById/'+props.id;
            fetch(endPoint)
            .then((response)=>response.json())
            .then((json)=>{
                if(loaded){
                    // console.log(json)
                    setEvento(json);
                    setLoaded(false);
                }
            })
            .catch((error)=>{
                console.log('Ocorreu o erro...')
                console.log(error)
            })
        }

        const script = document.createElement('script');
        script.src=ConfigUrlImg('rffeditor/ScriptInternoFormularioEvent.js');
        document.getElementById('scripts').append(script);
    }, [])
    
    return (
        <div id="formInsert"> 
            <table>
                <tbody>
                    <tr>
                        <td colSpan="2">
                            <Editor 
                                content={evento[0]!=undefined?evento[0].texto:''} 
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                        {/* <form action="noticiaInsert.submit.php" method="post" id="formulario" encType="multipart/form-data" autoComplete="on" onSubmit={()=>ValidateContactForm()}></form> */}
                        <form action="noticiaInsert.submit.php" method="post" id="formulario" encType="multipart/form-data" autoComplete="on"></form>
                            <input type="text" id="titulo" name="titulo" placeholder="Insira o título do evento" required="" spellCheck="true" defaultValue={evento[0]!=undefined?evento[0].titulo:''}
                            style={styles.inputs} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <input type="text" id="local" name="local" placeholder="Insira o local do evento" required="" spellCheck="true" defaultValue={evento[0]!=undefined?evento[0].titulo:''}
                            style={styles.inputs} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            Insira a data de início: 
                            <input type="date" id="dtinicio" name="dtinicio" required="" onkeypress={()=>{return false}} min="2024-06-05" style={styles.inputs}
                             defaultValue={evento[0]!=undefined?evento[0].dtinicio:''} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            Insira a data de termino:
                            <input type="date" id="dtfim" name="dtfim" required="" disabled min="2024-06-05" onkeypress={()=>{return false}} style={styles.inputs}
                             defaultValue={evento[0]!=undefined?evento[0].dtfim:''} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            Inseira a hora de início:
                            <input type="time" id="horainicio" name="horainicio" min="07:30" max="17:00" required="" style={styles.inputs}
                             defaultValue={evento[0]!=undefined?evento[0].horainicio:''} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            Inseira a hora de fim:
                            <input type="time" id="horafim" name="horafim" min="07:30" max="17:00" required="" style={styles.inputs}
                             defaultValue={evento[0]!=undefined?evento[0].horafim:''} />
                        </td>
                    </tr>
                    <tr>
                        {/* <td>Número de vagas:</td> */}
                        <td colSpan="2">Número de vagas:
                         <input type="number" id="vagas" name="vagas" style={styles.inputs} required=""
                          defaultValue={evento[0]!=undefined?evento[0].vagas:''} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            Terá certificado:<br />
                            <select name="certificado" id="certificado" style={{width: '100%', minHeight: '30px', borderRadius: '10px', border: '1px solid #cfcfcf', padding: '10px', fontSize: '1.3rem'}}>
                                <option value="1">Sim</option>
                                <option value="0">Não</option>
                                {evento[0]!=undefined?
                                    <option value={evento[0].certificado} defaultValue>{'Atual -> '+est[evento[0].certificado]}</option>
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
            <div id="scripts"></div>
        </div>
    )
}

export default FormularioEvent