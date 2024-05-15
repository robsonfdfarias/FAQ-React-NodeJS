import { useRef } from "react"

function InsertImgDefault(){
    var conta=0;
    const filesElement = useRef(null);
    const sendFile = async () => {
        const dataForm = new FormData();
        for(const file of filesElement.current.files){
            dataForm.append('file', file);
        }
        await fetch('http://localhost:3003/actors/upload', {
            method: 'POST',
            // headers: {
            //     'Content-Type': 'multipart/form-data'
            // },
            body: dataForm
        })
        .then((response) => response.json())
        .then((json)=>{
            console.log(json);
            if(conta<1){
                //
            }
        })
        .catch((erro)=>{
            console.log('Ocorreu um erro: '+erro);
        });
    }
    return (
        <div style={{marginTop: '100px'}}>
            <input type="file" name="imagem" id="imagem" multiple ref={filesElement} />
            <button onClick={sendFile}>Enviar imagem</button>
            <img src="http://localhost:3003/upload/ae5397602b0987e2e3af78b8166eb6597410d6d0726288283bae5e177ee460cba27924c4fd047992409ccc7889b3c1b5ed7b1c77fa1d0b334979da64f111d576.png" alt="" />
        </div>
    )
}

export default InsertImgDefault