import { useEffect, useState } from "react"
import { criptRff } from "./CriptRff";

function LoginContent(){
    const nome = criptRff('Camila');
    const [user, setUser] = useState([]);
    const [retorno, setRetorno] = useState(false);
    var testa = 0;
    console.log(nome)
    useEffect(()=>{

        function seePass(olho){
            var senha = document.getElementById('senha');
            if(senha.getAttribute("type")!="password"){
                senha.setAttribute("type", "password");
                olho.setAttribute("src", "../imgs/senha-mostrar.svg");
            }else{
                senha.setAttribute("type", "text");
                olho.setAttribute("src", "../imgs/senha-ocultar.svg");
            }
        }

        document.getElementById('olho').addEventListener('click', function(){
            seePass(this);
        })

        // let script = document.createElement('script');
        // script.src = '../Criptografia.js';
        // document.body.appendChild(script);

        document.getElementById('cripto').addEventListener('click', function(){
            // console.log(criptRff('robson ferreira de farias medeiros de souza'));//43 letras
            // console.log(criptRff('robson ferreira de farias medeiros'));//34 letras
            // console.log(criptRff('robson ferreira de farias med'));//29 letras
            console.log(criptRff('robson ferreira de farias'));//25 letras
            // console.log(criptRff('robson ferreira de'));
            // console.log(criptRff('robson'));
            // console.log(criptRff('robso'));
            // console.log(criptRff('robs'));
            // console.log(criptRff('rob'));
            // console.log(criptRff('r'));
        })



        const logar = async (email, password) => {
            await fetch('http://localhost:3003/actors/logar', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                if(json[0]!=undefined){
                    if(testa<1){
                        setUser(json);
                        testa++;
                        localStorage.setItem("id", json[0].id);
                        localStorage.setItem("nome", json[0].nome);
                        localStorage.setItem("email", json[0].email);
                        localStorage.setItem("status", json[0].status);
                        localStorage.setItem("nivel", json[0].nivel);
                        window.location.href='/admin/inicio'
                    }
                }else{
                    console.log('Usuário ou senha incorreto');
                    setRetorno(true);
                }
            })
        }

        document.getElementById('formulario').addEventListener('submit', (e) => {
            e.preventDefault();
            let email = document.getElementById('email').value;
            let senha = document.getElementById('senha').value;
            logar(email, senha);
        })
    
    }, [])
    return (
        <div id="formLogin">
                <div id="titleLogin" style={{textAlign: "center"}}>
                    <h1 style={{fontSize:"32px", fontWeigth: "600", lineHeight: "25px"}}>Login Painel</h1>
                    <span style={{fontSize: "16px", fontWeigth: "400", lineHeight: "24px"}}>Acesso ao Painel do Site</span><br /><br />
                </div>
                    <form action="login.submit.php" method="post" id="formulario" style={{width: "100%", lineHeight: "35px"}}>
                    <span id="nn">E-mail</span><br />
                    <input type="text" id="email" name="email" placeholder="Digite seu email" style={{fontSize: '1.4rem'}} required /><br />
                    <span id="nn">Senha</span><br />
                    <div id="divPass" style={{position: "relative"}}>
                        <input type="password" id="senha" name="senha" placeholder="Digite sua senha" style={{fontSize: '1.4rem'}} required />
                        <img src="../imgs/senha-mostrar.svg" id="olho" height="30" title="Mostrar senha" style={{position: "absolute", right: "4px", top: "7px", cursor: "pointer"}} />
                    </div><br />
                    <input type="submit" id="enviar" value="Entrar" /><br />
                    </form>
                        <button id="cripto" style={{display: 'none'}}>CLicar</button>
                        {user.length>0?<h2>{user[0].nome}</h2>:retorno?<span>Usuário ou senha incorreto</span>:<span></span>}
                </div>
    )
}

export default LoginContent