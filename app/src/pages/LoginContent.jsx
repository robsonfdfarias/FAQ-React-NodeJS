import { useEffect } from "react"

function LoginContent(){
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
    
    }, [])
    return (
        <div id="formLogin">
                <div id="titleLogin" style={{textAlign: "center"}}>
                    <h1 style={{fontSize:"32px", fontWeigth: "600", lineHeight: "25px"}}>Login Painel</h1>
                    <span style={{fontSize: "16px", fontWeigth: "400", lineHeight: "24px"}}>Acesso ao Painel do Site</span><br /><br />
                </div>
                    <form action="login.submit.php" method="post" id="formulario" style={{width: "100%", lineHeight: "35px"}}>
                    <span id="nn">E-mail</span><br />
                    <input type="text" id="email" name="email" placeholder="Digite seu email" style={{fontSize: '1.4rem'}} /><br />
                    <span id="nn">Senha</span><br />
                    <div id="divPass" style={{position: "relative"}}>
                        <input type="password" id="senha" name="senha" placeholder="Digite sua senha" style={{fontSize: '1.4rem'}} />
                        <img src="../imgs/senha-mostrar.svg" id="olho" height="30" title="Mostrar senha" style={{position: "absolute", right: "4px", top: "7px", cursor: "pointer"}} />
                    </div><br />
                    <input type="submit" id="enviar" value="Entrar" /><br />
                        
                    </form>
                </div>
    )
}

export default LoginContent