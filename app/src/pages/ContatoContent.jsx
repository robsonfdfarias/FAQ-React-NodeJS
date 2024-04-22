import { useEffect, useState } from "react";

function ContatoContent(){
    const [token, setToken] = useState('');
    var testeToken = 0;

    useEffect(()=>{
    

        // var secretaria = document.getElementById('secretaria');
    // var btUnidades = document.getElementById('btUnidades');
    // var filtro = document.getElementById('filtro');
    // var valor = document.getElementById('valor');
    var secretaria;
    var btUnidades;
    var filtro;
    var valor;
    var parametro = 'nome';
    var url = window.location.href;
    var pag =1;
    var numReg = 5;

    function setVar(){
        secretaria = document.getElementById('secretaria');
        btUnidades = document.getElementById('btUnidades');
        filtro = document.getElementById('filtro');
        valor = document.getElementById('valor');
    }
    setVar();

    //******************** INICIA O ARMAZENAMENTO E VALIDAÇÃO DO TOKEN **********************/

    async function getToken(){
        // var json;
        // var xhr = new XMLHttpRequest();

        // var data = 'email=robsonfdfarias@gmail.com&password=manaus123';

        // xhr.open("POST", "http://127.0.0.1:8000/api/auth/login");

        // xhr.setRequestHeader('Accept-Encoding', 'gzip, delate, br');
        // xhr.setRequestHeader('Connection', 'keep-alive');
        // xhr.setRequestHeader('Accept', 'application/json');
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        // xhr.send(data);

        // xhr.addEventListener('readystatechange', function(){
        //     if(xhr.readyState === 4 && xhr.status == 200){
        //         // console.log(xhr.responseText+'***********');
        //         json = JSON.parse(xhr.responseText);
        //         // alert(json.data.token)
        //         jwt = json.access_token;
        //         // console.log(jwt+'_________');
        //         setT0k3n(json.access_token);
        //         // return json.access_token;
        //     }
        // })
        await fetch('http://127.0.0.1:8000/api/auth/login', {
            method: 'POST',
            headers: {
                'Accept-Encoding': 'gzip, delate, br',
                'Connection': 'keep-alive',
                Accept: 'aplication/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: 'robsonfdfarias@gmail.com',
                password: 'manaus123'
            })
        })
        .then((response) => response.json())
        .then((json) => {
            // console.log('++++++++++++++++++++++++++++++++++')
            // console.log(json)
            if(testeToken<1){
                setToken(json.access_token)
                testeToken++;
                setT0k3n(json.access_token);
            }
        })
    }

    // sessionStorage.clear();

    function setT0k3n(token){
        let dateValid = new Date();
        // console.log(dateValid.getTime());
        let time = dateValid.getTime();
        sessionStorage.setItem('dataV', time);
        sessionStorage.setItem('t0k3n', token);
    }

    function getT0k3n(){
        return sessionStorage.getItem('t0k3n');
    }

    function checkedT0k3n(){
        let t0k3n = getT0k3n();
        if(t0k3n != null && t0k3n != '' && t0k3n != 'undefined'){
            let dateValid = new Date();
            let checkedTime = dateValid.getTime()-sessionStorage.getItem('dataV');
            // console.log(dateValid.getTime())
            // console.log(sessionStorage.getItem('dataV'))
            // console.log(checkedTime)
            // console.log(t0k3n)
            if(parseInt(checkedTime)>=3000000){
                getToken();
            }
        }else{
            getToken();
        }
    }


    setVar();
    // console.log(secretaria)
    checkedT0k3n();
    
    //******************** FINALIZA O ARMAZENAMENTO E VALIDAÇÃO DO TOKEN **********************/


    //******************** INICIA AS AÇÕES DO SELECT FILTRO **********************/

    filtro.addEventListener('change', function(){
        //alert(this.value);
        parametro = this.value;
        if(this.value=='secretaria'){
            secretaria.setAttribute('style', 'display:inline-block;');
            valor.disabled = true;
            valor.value = '';
        }else{
            secretaria.setAttribute('style', 'display:none');
            valor.disabled = false;
        }
        if(this.value=='descriUnidade' || this.value=='siglaUnidade'){
            btUnidades.setAttribute('style', 'display:inline-block;');
        }else{
            btUnidades.setAttribute('style', 'display:none');
        }
    });


    //******************** FINALIZA AS AÇÕES DO SELECT FILTRO **********************/


    //******************** INICIA AS AÇÕES DO SELECT SECRETARIA **********************/
    secretaria.addEventListener('change', function(){
        valor.value = this.value;
    })

    //******************** FINALIZA AS AÇÕES DO SELECT SECRETARIA **********************/



    function getUnidades(){
        // alert("unidades")
        var divUnidades = document.getElementById('divUnidades');
        divUnidades.setAttribute('style', 'display:flex;');
        returnUnidades(divUnidades);
    }

    function selectUnidClose(op){
        var conteudo = op.innerHTML;
        let valor = document.getElementById('valor');
        valor.value = conteudo;
        let divUnidades = document.getElementById('divUnidades');
        divUnidades.setAttribute('style', 'display:none;');
    }

    function closeDivUni(){
        let divUnidades = document.getElementById('divUnidades');
        divUnidades.innerHTML = '';
        divUnidades.setAttribute('style', 'display:none;');
    }

    function enviar(){
        alert("enviar")
    }





    var porcentagem = document.getElementById("porcentagem");
    var retorno = document.getElementById("retorno");


    async function retornaJson(){
        let jwt = getT0k3n();
        // console.log(jwt)
        // var json;
        // var xhr = new XMLHttpRequest();



        // xhr.open("GET", "http://127.0.0.1:8000/api/allFunc");

        // xhr.onprogress = function(pe) {
        // if(pe.lengthComputable) {
        //         porcentagem.max = pe.total
        //         porcentagem.value = pe.loaded
        //     }
        // }
        

        // xhr.setRequestHeader('Accept-Encoding', 'gzip, delate, br');
        // xhr.setRequestHeader('Connection', 'keep-alive');
        // xhr.setRequestHeader('Accept', 'application/json');
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        // xhr.setRequestHeader('Authorization', 'Bearer ' + jwt);

        // xhr.send();


        // xhr.addEventListener('readystatechange', function(){
        //     if(xhr.readyState === 4 && xhr.status == 200){
        //         //console.log(xhr.responseText);
        //         json = JSON.parse(xhr.responseText);
        //         json=json['funcs'];
        //         // alert(json.length);
        //         var htmlR = '<table class="funcTable"><tr>'+
        //         '<td>Matrícula</td><td>Nome</td>'+
        //         // '<td>entidade</td>'+
        //         '<td>Setor</td>'+
        //         '<td>Secretaria</td><td>Fone</td><td>Email</td><td>Sigla da unidade</td><td>Descrição da unidade</td>'+
        //         '</tr>';
        //         for(let i=0; i<json.length; i++){
        //             //console.log(json[i]);
        //             htmlR+='<tr>';
        //             htmlR+='<td>'+json[i].matricula+'</td>';
        //             htmlR+='<td>'+json[i].nome+'</td>';
        //             // htmlR+='<td>'+json[i].entidade+'</td>';
        //             htmlR+='<td>'+json[i].setor+'</td>';
        //             htmlR+='<td>'+json[i].secretaria+'</td>';
        //             htmlR+='<td>'+json[i].fone+'</td>';
        //             htmlR+='<td>'+json[i].email+'</td>';
        //             htmlR+='<td>'+json[i].siglaUnidade+'</td>';
        //             htmlR+='<td>'+json[i].descriUnidade+'</td>';
        //             htmlR+='</tr>';
        //             // document.getElementById('unico').innerHTML += '<br>'+objG[i].matricula;
        //         }
        //         htmlR+='</table>';
        //         retorno.innerHTML = htmlR;
        //         // alert(htmlR)
        //     }
        // })

        // xhr.onloadend = function(pe) {
        //     porcentagem.value = pe.loaded
        //     // alert(pe.loaded)
        // }
        await fetch('http://127.0.0.1:8000/api/allFunc', {
            method: 'GET',
            headers: {
                'Accept-Encoding': 'gzip, delate, br',
                'Connection': 'keep-alive',
                Accept: 'aplication/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + jwt
            }
        })
        .then((response) => response.json())
        .then((json) => {
            // console.log(json);
            // console.log(json.funcs[0]);
            var htmlR = '<table class="funcTable"><tr>'+
                '<td>Matrícula</td><td>Nome</td>'+
                // '<td>entidade</td>'+
                '<td>Setor</td>'+
                '<td>Secretaria</td><td>Fone</td><td>Email</td><td>Sigla da unidade</td><td>Descrição da unidade</td>'+
                '</tr>';
                for(let i=0; i<json.funcs.length; i++){
                    //console.log(json[i]);
                    htmlR+='<tr>';
                    htmlR+='<td>'+json.funcs[i].matricula+'</td>';
                    htmlR+='<td>'+json.funcs[i].nome+'</td>';
                    // htmlR+='<td>'+json.funcs[i].entidade+'</td>';
                    htmlR+='<td>'+json.funcs[i].setor+'</td>';
                    htmlR+='<td>'+json.funcs[i].secretaria+'</td>';
                    htmlR+='<td>'+json.funcs[i].fone+'</td>';
                    htmlR+='<td>'+json.funcs[i].email+'</td>';
                    htmlR+='<td>'+json.funcs[i].siglaUnidade+'</td>';
                    htmlR+='<td>'+json.funcs[i].descriUnidade+'</td>';
                    htmlR+='</tr>';
                    // document.getElementById('unico').innerHTML += '<br>'+objG[i].matricula;
                }
                htmlR+='</table>';
                retorno.innerHTML = htmlR;
                // alert(htmlR)
        })

    }
    retornaJson();




    //******************** INICIA A REQUISIÇÃO DA PASQUISA **********************/
    var testPaginator = '';
    async function pesq(){

        let jwt = getT0k3n();

        // url = window.location.href;

        if(valor.value == '' || valor.value == null || valor.value == 'undefined'){
            alert('O campo valor não pode estar em branco');
            return false;
        }

        // var json;
        // var xhr = new XMLHttpRequest();

        // var data = 'pag='+pag+'&numReg='+numReg+'&parametro='+parametro+'&valor='+valor.value;

        // xhr.open("POST", "http://127.0.0.1:8000/api/pesq");

        // xhr.onprogress = function(pe) {
        // if(pe.lengthComputable) {
        //         porcentagem.max = pe.total
        //         porcentagem.value = pe.loaded
        //     }
        // }

        // // xhr.setRequestHeader('Accept-Encoding', 'gzip, delate, br');
        // // xhr.setRequestHeader('Connection', 'keep-alive');
        // xhr.setRequestHeader('Accept', 'application/json');
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        // xhr.setRequestHeader('Authorization', 'Bearer ' + jwt);

        // xhr.send(data);

        // xhr.addEventListener('readystatechange', function(){
        //     if(xhr.readyState === 4 && xhr.status == 200){
        //         json1 = JSON.parse(xhr.responseText);
        //         json=json1['funcs'];
        //         var htmlR = '<table class="funcTable"><tr>'+
        //         '<td>Matrícula</td><td>Nome</td>'+
        //         // '<td>entidade</td>'+
        //         '<td>Setor</td>'+
        //         '<td>Secretaria</td><td>Fone</td><td>Email</td><td>Sigla da unidade</td><td>Descrição da unidade</td>'+
        //         '</tr>';
        //         for(let i=0; i<json.length; i++){
        //             htmlR+='<tr>';
        //             htmlR+='<td>'+json[i].matricula+'</td>';
        //             htmlR+='<td>'+json[i].nome+'</td>';
        //             // htmlR+='<td>'+json[i].entidade+'</td>';
        //             htmlR+='<td>'+json[i].setor+'</td>';
        //             htmlR+='<td>'+json[i].secretaria+'</td>';
        //             htmlR+='<td>'+json[i].fone+'</td>';
        //             htmlR+='<td>'+json[i].email+'</td>';
        //             htmlR+='<td>'+json[i].siglaUnidade+'</td>';
        //             htmlR+='<td>'+json[i].descriUnidade+'</td>';
        //             htmlR+='</tr>';
        //         }
        //         htmlR+='</table>';
        //         retorno.innerHTML = htmlR;//***************************************** */
        //         if(testPaginator != valor.value){
        //             paginate(json1['total'], parametro, valor.value);
        //             testPaginator=valor.value;
        //         }
        //     }
        // })

        // xhr.onloadend = function(pe) {
        //     porcentagem.value = pe.loaded
        // }
        var data = 'pag='+pag+'&numReg='+numReg+'&parametro='+parametro+'&valor='+valor.value
        await fetch('http://127.0.0.1:8000/api/pesq', {
            method: 'POST',
            headers: {
                'Accept-Encoding': 'gzip, delate, br',
                'Connection': 'keep-alive',
                Accept: 'aplication/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + jwt
            },
            body: JSON.stringify({
                pag: pag,
                numReg: numReg,
                parametro: parametro,
                // parametro: "descriUnidade",
                valor: valor.value
                // valor: "EMEB Renato Pradi - Caic"
            })
        })
        .then((response) => response.json())
        .then((json) => {
            // console.log(pag)
            // console.log(numReg)
            // console.log(parametro)
            // console.log(valor.value)
            // console.log(json)
            let total = json['total'];
            json=json['funcs'];
            var htmlR = '<table class="funcTable"><tr>'+
            '<td>Matrícula</td><td>Nome</td>'+
            // '<td>entidade</td>'+
            '<td>Setor</td>'+
            '<td>Secretaria</td><td>Fone</td><td>Email</td><td>Sigla da unidade</td><td>Descrição da unidade</td>'+
            '</tr>';
            for(let i=0; i<json.length; i++){
                htmlR+='<tr>';
                htmlR+='<td>'+json[i].matricula+'</td>';
                htmlR+='<td>'+json[i].nome+'</td>';
                // htmlR+='<td>'+json[i].entidade+'</td>';
                htmlR+='<td>'+json[i].setor+'</td>';
                htmlR+='<td>'+json[i].secretaria+'</td>';
                htmlR+='<td>'+json[i].fone+'</td>';
                htmlR+='<td>'+json[i].email+'</td>';
                htmlR+='<td>'+json[i].siglaUnidade+'</td>';
                htmlR+='<td>'+json[i].descriUnidade+'</td>';
                htmlR+='</tr>';
            }
            htmlR+='</table>';
            retorno.innerHTML = htmlR;//***************************************** */
            if(testPaginator != valor.value){
                // console.log(total+'/////////////////// total da pesquisa')
                paginate(total, parametro, valor.value);
                testPaginator=valor.value;
            }
        })

    }

    //******************** FINALIZA A REQUISIÇÃO DA PASQUISA **********************/



    //******************** INICIA A CAPITURA DAS VARIÁVEIS DA URL **********************/

    function getParametrosUrl(){
        let url = window.location.href;
        // console.log(url)
        let partes = url.split('/');
        // var dd = url.split('?');
        // var uu = dd[1].split('&')
        // for(var i=0; i<uu.length; i++){
        //     testa = uu[i].split('=');
        //     if(testa[0]=='pag'){
        //         pag=testa[1];
        //     }else if(testa[0]=='numReg'){
        //         numReg = testa[1];
        //     }else if(testa[0]=='parametro'){
        //         parametro = testa[1];
        //     }else if(testa[0]=='valor'){
        //         valor = testa[1];
        //     }
        // }
        pag = partes[4];
        numReg = partes[5];
        parametro = partes[6];
        valor = partes[7];
        // console.log(page)
        // console.log(numReg)
        // console.log(parametro)
        // console.log(valor)
    }
    // getParametrosUrl();


    //******************** FINALIZA A CAPITURA DAS VARIÁVEIS DA URL **********************/



    //******************** INICIA A REQUISIÇÃO DAS UNIDADES **********************/

    async function returnUnidades(divUnidades){
        let jwt = getT0k3n();
        await fetch('http://127.0.0.1:8000/api/unidade', {
            method: 'GET',
            headers: {
                'Accept-Encoding': 'gzip, delate, br',
                'Connection': 'keep-alive',
                Accept: 'aplication/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + jwt
            }
        })
        .then((response) => response.json())
        .then((json) => {
            // console.log(json['unidades'])
            var htmlRR = document.createElement('div');
            htmlRR.setAttribute('id', 'titulo');
            let spanTitulo = document.createElement('span');
            spanTitulo.setAttribute('class', 'titleTabUni');
            spanTitulo.innerHTML = 'Unidades cadastradas';
            let divFechar = document.createElement('div');
            divFechar.setAttribute('id', 'fechar');
            // divFechar.setAttribute('onclick', closeDivUni);
            divFechar.addEventListener('click', function(){
                closeDivUni();
            })
            divFechar.innerHTML = 'X';
            htmlRR.appendChild(spanTitulo);
            htmlRR.appendChild(divFechar);
            var table = document.createElement('table');
            table.setAttribute('class', 'tabUnidades');
            var tbody = document.createElement('tbody');
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            td1.innerHTML = '<strong>SIGLA DA UNIDADE</strong>';
            let td2 = document.createElement('td');
            td2.innerHTML = '<strong>DESCRIÇÃO DA UNIDADE</strong>';
            tr.appendChild(td1);
            tr.appendChild(td2);
            tbody.appendChild(tr);
            for(let i=0; i<json['unidades'].length; i++){
                let tr = document.createElement('tr');
                let td = document.createElement('td');
                // td.setAttribute('onclick', 'selectUnidClose(td)');
                td.addEventListener('click', function(){
                    closeDivUni();
                    selectUnidClose(this);
                })
                td.setAttribute('id', 'uni');
                td.innerHTML = json['unidades'][i].siglaUnidade;
                let td2 = document.createElement('td');
                td2.innerHTML = json['unidades'][i].descriUnidade;
                tr.appendChild(td);
                tr.appendChild(td2);
                tbody.appendChild(tr);
            }
            table.appendChild(tbody);
            htmlRR.appendChild(table);
            divUnidades.appendChild(htmlRR);
        })
    }

    //******************** FINALIZA A REQUISIÇÃO DAS UNIDADES **********************/

    function zera(){
        pag=1;
        totalPage=1;
        totalReg=1;
    }

    //******************** INICIA PAGINAÇÃO **********************/

    function createBtDiv(i, div, divPag, param, val){
        div = document.createElement('DIV');
        div.setAttribute('class', 'pg');
        div.setAttribute('id', 'pagina'+i);
        // div.setAttribute('onclick', 'chama('+i+', \''+param+'\', \''+val+'\')');
        div.addEventListener('click', function(){
            chama(i, param, val);
        })
        div.innerHTML=i;
        divPag.appendChild(div);
    }

    var totalPage = 0;
    var totalReg = 0;
    function paginate(total, param, val){
        let numPag = Math.ceil(total/numReg);
        totalPage = numPag;
        // console.log(total+'*********** total')
        // console.log(numReg+'********** numReg')
        // console.log(totalPage+'******************')
        totalReg = total;
        let divPag = document.getElementById('paginator');
        divPag.innerHTML=''
        /***************** Limita a quantidade de botões da página que aparecerão ********************/
        let margin = 2;
        let inicial = 1;
        let final = margin+margin+1;
        let lim = (parseInt(pag)+margin)
        // console.log(numPag);
        if(pag<=3){
            inicial=1;
            if(numPag<final){
                final=numPag;
            }
        }else{
            inicial=pag-margin;
            if(numPag>lim){
                final=lim;
            }else{
                final=totalPage;
            }
        }
        if((pag > (numPag-margin)) & (numPag > (margin+margin))){
            inicial = numPag-(margin+margin);
        }
        
        /********** Inseri o botão de voltar uma página *************/
        let div = document.createElement('DIV');
        div.setAttribute('class', 'pg');
        div.setAttribute('id', 'btPrev');
        // div.setAttribute('onclick', 'movePage(\'prev\', \''+param+'\', \''+val+'\')');
        div.addEventListener('click', function(){
            // console.log('Clicou na proxima página')
            movePage('prev', param, val);
        })
        // div.innerHTML='<div id="btPrev" onclick="movePage(\'prev\')"><</div>';
        div.innerHTML='<';
        divPag.appendChild(div);
        /********** Inseri os botãos das páginas *************/
            // console.log(final)
        for(let i=inicial;i<=final; i++){
            createBtDiv(i, div, divPag, param, val);
        }
        if(pag==1){
            // console.log(inicial)
            document.getElementById('pagina'+inicial).setAttribute('style', 'background-color: #cdcdcd; color: #000;');
            document.getElementById('btPrev').setAttribute('style', 'background-color: #cdcdcd;');
        }
        /********** Inseri o botão de Avançar uma página *************/
        div = document.createElement('DIV');
        div.setAttribute('class', 'pg');
        div.setAttribute('id', 'btNext');
        // div.setAttribute('onclick', 'movePage(\'next\', \''+param+'\', \''+val+'\')');
        div.addEventListener('click', function(){
            // console.log('Clicou na proxima página')
            movePage('next', param, val);
        })
        div.innerHTML='>';
        divPag.appendChild(div);
        if(pag==totalPage){
            document.getElementById('btNext').setAttribute('style', 'background-color: #cdcdcd;');
        }
    }

    var background = 'green';
    var color = 'white';
    function chama(pg, param, val){
        pag = pg;
        let p = 'pagina'+pg;
        parametro = param;
        valor.value = val;
        paginate(totalReg, param, val);
        if(pg==totalPage){
            document.getElementById('btNext').setAttribute('style', 'background-color: #cdcdcd;');
        }else{
            document.getElementById('btNext').setAttribute('style', 'background-color: '+background+';');
        }
        if(pg==1){
            document.getElementById('btPrev').setAttribute('style', 'background-color: #cdcdcd;');
        }else{
            document.getElementById('btPrev').setAttribute('style', 'background-color: '+background+';');
        }
        document.getElementById(p).setAttribute('style', 'background-color: #cdcdcd; color: #000;');
        pesq();
    }

    function movePage(m, param, val){
        if(m=='next' && pag < totalPage){
            pag = pag+1;
        }else if(m=='prev' && pag>1){
            pag = pag-1;
        }
            // console.log(totalPage+' -> totalPage')
            // console.log(pag+' -> pagina')
        paginate(totalReg, param, val);
        document.getElementById('pagina'+pag).setAttribute('style', 'background-color: #cdcdcd; color: #000;');
        if(pag<=1){
            document.getElementById('btPrev').setAttribute('style', 'background-color: #cdcdcd;');
        }else{
            document.getElementById('btPrev').setAttribute('style', 'background-color: '+background+';');
        }
        if(pag>=totalPage){
            document.getElementById('btNext').setAttribute('style', 'background-color: #cdcdcd;');
        }else{
            document.getElementById('btNext').setAttribute('style', 'background-color: '+background+';');
        }
        pesq();
    }

    //******************** FINALIZA PAGINAÇÃO **********************/

    btUnidades.addEventListener('click', function(){
        getUnidades();
    })
    document.getElementById('pesqUsers').addEventListener('click', function(){
        zera();
        pesq();
    })

    }, []);

    


    function setVariaveis(pai){
        // console.log(pai)
    }

    return (
        <div>
            <div className="post-content" style={{widows: '100%', padding: '0px'}}>
                <div id="menuPesq" onLoad={setVariaveis(document.getElementById('menuPesq'))}>
                    <select name="filtro" id="filtro">
                        <option value="matricula">Matrícula</option>
                        <option value="nome" defaultValue={""}>Nome</option>
                        <option value="descriUnidade">Descrição da Unidade</option>
                        <option value="siglaUnidade">Sigla da Unidade</option>
                        <option value="secretaria">Secretaria</option>
                        <option value="email">E-mail</option>
                    </select>
                    <select name="secretaria" id="secretaria">
                        <option value="Gabpref">Gabinete do Prefeito - (Gabpref)</option>
                        <option value="chefGab">Chefia de Gabinete</option>
                        <option value="Gabvice">Gabinete do Vice-Prefeito - (Gabvice)</option>
                        <option value="PGM">Procuradoria-Geral do Município - (PGM)</option>
                        <option value="Semtip">Secretaria Municipal da Transparência e Integridade Pública - (Semtip)</option>
                        <option value="Semfaz">Secretaria Municipal da Fazenda - (Semfaz)</option>
                        <option value="Semad">Secretaria Municipal da Administração - (Semad)</option>
                        <option value="Semcel">Secretaria Municipal de Cultura, Esporte e Lazer - (Semcel)</option>
                        <option value="Semdra">Secretaria Municipal do Desenvolvimento Rural e Abastecimento - (Semdra)</option>
                        <option value="Semed">Secretaria Municipal de Educação - (Semed)</option>
                        <option value="Semsa">Secretaria Municipal de Saúde - (Semsa)</option>
                        <option value="Semop">Secretaria Municipal de Obras e Serviços Públicos - (Semop)</option>
                        <option value="Semplu">Secretaria Municipal de Planejamento e Urbanismo - (Semplu)</option>
                        <option value="Sedein">Secretaria Municipal de Desenvolvimento Econômico e Inovação - (Sedein)</option>
                        <option value="Semash">Secretaria Municipal de Assistência Social e Habitação - (Semash)</option>
                        <option value="EMEB Renato Pradi - Caic">EMEB Renato Pradi - Caic</option>
                        <option value="padrao" disabled="" defaultValue={""} name="padrao" id="padrao">Selecione uma secretaria</option>
                    </select>
                    <div id="btUnidades">Ver Unidades</div>
                    <input type="text" id="valor" placeholder="Pesquisar" required="" />
                    <button id="pesqUsers">Pesquisar</button>
                </div>

                <div id="porcentagem"></div>
                <div id="retorno"></div>
                <div id="divUnidades"></div>
            </div>
            <div id="paginator"></div>
        </div>
    )
}

export default ContatoContent