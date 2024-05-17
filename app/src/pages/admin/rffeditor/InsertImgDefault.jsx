import { useEffect, useRef, useState } from "react"
import { ConfigUrlImg } from "../../ConfigUrlImg";

function InsertImgDefault(){
    const [image, setImage] = useState('');
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
            var img = "http://localhost:3003/";
            img+=json.files[0].path;
            img = img.replace('public/', '')
            img = img.replace(',', '')
            console.log(img);
            if(conta<1){
                setImage(img);
                conta++;
            }
        })
        .catch((erro)=>{
            console.log('Ocorreu um erro: '+erro);
        });
    }
    const configImg = (obj, imgURL)=>{
        let img = document.createElement('img');
        img.src = imgURL;
        var att = 'width';
        if(img.getAttribute('width')<img.getAttribute('height')){
            att='height'
        }
        obj.setAttribute(att, '200');
    }
    const geraImg = (imgURL)=>{
        return (
            <div>
                {image!=''?
                    <img src={imgURL} alt="imagem escolhida" id="imgSel" onLoad={()=>configImg(document.getElementById('imgSel'), imgURL)} />    
                :console.log('')}
            </div>
        )
    }

    useEffect(()=>{
        const scriptInterno = document.createElement('script');
        scriptInterno.src = ConfigUrlImg("rffeditor/windowTableConfigInserImg.js");
        document.getElementById('scripts').appendChild(scriptInterno);
    }, []);
    return (
        <div style={{width: '100vw', height: '100vh', display: 'flex'}}>
            <div style={{margin: 'auto'}}>
                <input type="file" name="imagem" id="imagem" multiple ref={filesElement} />
                <button onClick={sendFile}>Enviar imagem</button>
                <br />
                <div id="porcento">{geraImg(image)}</div>
                <br />
                <button onClick={()=>insert(document.getElementById('imgSel'))}>Inserir imagem</button>
                <br />
                <button onClick={()=>window.open('/admin/table/img/', '_blank', 'height=600, width=800, top=50, left=100, scrollbar=no, fullscreen=no')}>Ver pasta</button>
            </div>
            <div id="scripts"></div>
        </div>
    )
}

export default InsertImgDefault