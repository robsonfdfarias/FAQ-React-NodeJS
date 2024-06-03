import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import MenuAdmin from "../MenuAdmin";
import TopoTitulo from "../../TopoTitulo";
import DivCenterContent from "../../DivCenterContent";
import FooterPage from "../../Footerpage";

function DeletePerg(){
    const {id} = useParams();
    const [del, setDel] = useState(true);
    useEffect(()=>{
        if(id!=undefined && id!=null && id!=''){
            fetch('http://localhost:3003/actors/deleteCommonQuestion', {
                method: 'DELETE',
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
                if(del){
                    setDel(false)
                    if(json.retorno){
                        window.location.href = '/admin/perguntasAdm/'
                    }else{
                        document.getElementById('erro').innerHTML = 'Ocorreu um erro ao excluir a pergunta, contate o administrador.'
                    }
                }
            })
            .catch((erro)=>{
                console.log(erro)
                document.getElementById('erro').innerHTML = 'Ocorreu um erro ao excluir a notícia, contate o administrador.'
            })
        }
    })
    return (
        <div>
            <MenuAdmin />
            <TopoTitulo titulo={"Notícias"} subtitulo={"Administrar notícias SEI"} />
            <DivCenterContent content={
                <div style={{padding: '20px', position: 'absolute', maxWidth: '500px', border: '1px solid #cdcdcd'}} id={'erro'}></div>
            } 
            />
            <FooterPage />
        </div>
    )
}

export default DeletePerg