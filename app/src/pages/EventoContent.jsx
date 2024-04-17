import { useEffect, useState } from "react";
import EventoContentVagasDisponiveis from "./EventoContentVagasDisponiveis";
import EventoContentSelectEvent from "./EventoContentSelectEvent";

function EventoContent(props){
    const [evento, setEvento] = useState([]);
    var arr = [];
    var testa = 0;
    useEffect(()=>{
        fetch('http://localhost:3003/actors/getTreiningByDate', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: props.data
            })
        })
        .then((response) => response.json())
        .then((json) => {
            if(testa<1){
                arr = json;
                // console.log(json[0])
                setEvento(json);
                testa++;
                // message('Mensage......')
            }
        })
        .catch((error) => {
            console.log(error);
        })

    }, [])

    const insertData = async () => {
        let form = document.getElementById('formInsc');
        // console.log(form);
        let childrens = [];
        let table = form.children[0];
        let tbody = table.children[0];
        for(let i=0;i<(tbody.children.length-1); i++){
            // console.log(tbody.children[i].children[1].children[0].value)
            childrens.push(tbody.children[i].children[1].children[0].value);
        }
        // console.log(childrens[0])
        await fetch('http://localhost:3003/actors/registerTreining', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: childrens[1],
                secretaria: childrens[2],
                matricula: childrens[3],
                email: childrens[4],
                idevento: childrens[0]
            })
        })
        .then((response) => response.json())
        .then((json) => {
            message(json.titulo)
        })
    }

    const message = (message2) => {
        let divGeral = document.createElement('div');
        divGeral.setAttribute('style', 'position:fixed; width:100%; height:100%; z-index: 10999; background-color: rgba(255,255,255,0.6);');
        divGeral.setAttribute('id', 'messageGeral');
        let div = document.createElement('div');
        div.setAttribute('style', 'position:relative; margin:auto auto; top:150px; left:auto; right:auto; max-width:300px; min-width: 100px; padding: 20px; display:flex; z-index: 10009; background-color: white; border:1px solid red;');
        
        div.innerHTML+='<h2>'+message2+'</h2>';
        // div.innerHTML = '<div>'+message+'<a onclick="closeWindowMessage('+divGeral.getAttribute('id')+')" style="float:right; padding:10px; background-color:red;">X</a></div>';
        divGeral.appendChild(div);
        document.body.appendChild(divGeral);
        divGeral.addEventListener('click', function(){
            // console.log(this);
            document.body.removeChild(this);
        })
    }

    const convertDate = (date) => {
        const partes = date.split('-');
        return partes[2]+'/'+partes[1]+'/'+partes[0];
    }
    return (
        <div id="artigo" style={{borderRadius: '5px', boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)'}}>
            <header id="titulo">Eventos do dia {convertDate(props.data)} </header>
            {evento.map(obj => (
                <div key={obj.id}>
                    <h2>Turma da hora: {obj.horainicio} </h2>
                    <article>
                        <header id="data">Data da postagem: {obj.dtpost}</header>
                        <header id="data">Total de vagas: <span id="catSpan"> {obj.vagas}</span></header>
                        <EventoContentVagasDisponiveis
                            idEvento={obj.id}
                            totalVagas={obj.vagas}
                        />
                        {/* {message('teste de mensagem....')} */}
                        <header id="data">Fornece certificado: <span id="catSpan"> {obj.certificado==1?'Sim':'Não'}</span></header>
                        <p></p>
                        <div dangerouslySetInnerHTML={{__html: obj.texto}}></div>
                        <p></p>
                    </article>
                    <br />
                    
                </div>
            ))}
            <div id="divFormInscGeral">
                <div id="divFormInsc">
                    <h2>Formulario de inscrição para o evento</h2>
                    <form id="formInsc">
                        <table id="tabFormInsc">
                            <tbody>
                                <tr>
                                    <td>Selecione a capacitação e a turma:</td>
                                    <td>
                                        <EventoContentSelectEvent
                                            data={props.data}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Nome:</td>
                                    <td><input type="text" name="nome" required="" /></td>
                                </tr><tr>
                                    <td>Secretaria/<br />local de trabalho:</td>
                                    <td><input type="text" name="secretaria" required="" /></td>
                                </tr><tr>
                                    <td>Matrícula:</td>
                                    <td><input type="text" name="matricula" required="" /></td>
                                </tr><tr>
                                    <td>E-mail:</td>
                                    <td><input type="email" name="email" required="" /></td>
                                </tr><tr>
                                    <td colSpan="2">
                                        <a onClick={insertData}>Inscrever</a>
                                        {/* <input type="submit" name="enviar" id="enviar" value="Inscrever" onClick={insertData} /> */}
                                        {/* <button onClick={insertData} >Inscrever</button> */}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
            {/* {evento.length>0?console.log(evento[0].dtinicio):console.log('Evento em processo')} */}
            {/* {evento.length>0?
                <div>
                    <header id="titulo">Eventos do dia {convertDate(evento[0].dtinicio)} </header>
                    <h2>Turma da hora: 09:04</h2>
                    <article>
                        <header id="data">Data da postagem: {evento[0].dtpost}</header>
                        <header id="data">Total de vagas: <span id="catSpan"> {evento[0].vagas}</span></header>
                        <EventoContentVagasDisponiveis
                            idEvento={evento[0].id}
                            totalVagas={evento[0].vagas}
                        />
                        <header id="data">Fornece certificado: <span id="catSpan"> {evento[0].certificado}</span></header>
                        <p></p>
                        <div dangerouslySetInnerHTML={{__html: evento[0].texto}}></div>
                        <p></p>
                    </article>
                    <br />
                    <div id="divFormInscGeral">
                        <div id="divFormInsc">
                            <h2>Formulario de inscrição para o evento</h2>
                            <form action="evento.submit.php" method="post" id="formInsc">
                                <table id="tabFormInsc">
                                    <tbody>
                                        <tr>
                                            <td>Selecione a capacitação e a turma:</td>
                                            <td>
                                                <EventoContentSelectEvent
                                                    data={props.data}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Nome:</td>
                                            <td><input type="text" name="nome" required="" /></td>
                                        </tr><tr>
                                            <td>Secretaria/<br />local de trabalho:</td>
                                            <td><input type="text" name="secretaria" required="" /></td>
                                        </tr><tr>
                                            <td>Matrícula:</td>
                                            <td><input type="text" name="matricula" required="" /></td>
                                        </tr><tr>
                                            <td>E-mail:</td>
                                            <td><input type="email" name="email" required="" /></td>
                                        </tr><tr>
                                            <td colSpan="2">
                                            <input type="submit" name="" value="Inscrever" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
            :console.log('')} */}
        </div>
    );
}

export default EventoContent