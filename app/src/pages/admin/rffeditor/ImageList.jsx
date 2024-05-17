import { useEffect, useState } from "react"
import DirImage from "./DirImage";

function ImageList(){
    const [lista, setLista] = useState([]);
    const [pp, setPp] = useState('');
    const defaultFolder = 'Principal';
    var [pastas, setPastas] = useState([defaultFolder]);
    var folder = '';
    var conta = 0;
    var conta2 = 0;
    useEffect(()=>{
        fetch('http://localhost:3003/actors/getImages', {
            method: 'POST'
        })
        .then((response)=>response.json())
        .then((json)=>{
            if(conta<1){
                setLista(json);
                console.log(json)
                conta++;
            }
        })
        .catch((erro)=>{
            console.log('Erro encontrado: '+erro);
        })
    }, []);

    const getFilesByFolder = (obj, type) => {
        console.log('Dentro do getFilesByFilder: '+pp)
        if(type!=''){
            if(obj==defaultFolder){
                setPastas([defaultFolder]);
                folder='';
            }else{
                //Se o usuário clicou na linha do tempo para voltar para uma pasta específica
                let pa = '';
                let updateFolder = []
                for(let i=0; i<pastas.length; i++){
                    updateFolder.push(pastas[i])
                    if(obj!=pastas[i]){
                        pa+=pastas[i]+'/'
                    }else{
                        pa+=obj+'/'
                        break;
                    }
                }
                folder = pa;
                setPastas(updateFolder)
            }
        }else{
            //Se o usuário clicou em uma pasta
            const partes = folder.split('/');
            var pts = [defaultFolder]
            if(partes.length>0){
                for(let r=0; r<(partes.length-1); r++){
                    pts.push(partes[r]);
                }
                setPastas(pts);
            }
            // pastas.push(obj)
            console.log('*********************************')
            console.log(pastas)
            console.log('-------------------------------')
        }
        fetch('http://localhost:3003/actors/getImages', {
            method: 'POST',
            headers: {
                Accept: 'application/json', 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                pasta: folder
            })
        })
        .then((response)=>response.json())
        .then((json)=>{
            if(conta2<1){
                setLista(json);
                setPp(folder)
                console.log(json)
                conta2++;
            }
        })
        .catch((erro)=>{
            console.log('Erro encontrado: '+erro);
        })
    }
    const foldeOrFile = (obj) => {
        const partes = obj.split('.');
        if(partes[1]!=undefined){
            console.log(folder)
            return (
                <DirImage image={obj} dir={pp} />
            )
        }else{
            folder+=pp+obj+'/';
            return (
                <a onClick={()=>getFilesByFolder(obj, '')}>
                    <DirImage image={obj} />
                </a>
            )
        }
    }
    // const linhaTempo = ()=>{
    //     if(pastas.length>0){
    //         let arrayLinks = []
    //         for(let j=0; j<pastas.length; j++){
    //             arrayLinks.push(<a onClick={()=>getFilesByFolder(pastas[j], 'find')}>{pastas[j]}</a>)
    //         }
    //         return arrayLinks;
    //     }
    //     return [];
    // }
    return (
        <div style={{display: 'ruby-text', paddingTop: '25px'}}>
            <div>Pasta: {lista.length>0?pastas.map(link=>(
                <span>
                    <a style={{cursor: 'pointer'}} onClick={()=>getFilesByFolder(link, 'find')}>{link.toUpperCase()}</a>
                    <span> / </span>
                </span>
            )):console.log(pastas)}</div><br />
            {lista.length>0?lista.map(obj=>(
                <div key={obj}>
                    {foldeOrFile(obj)}
                </div>
            )):console.log('')}
        </div>
    )
}

export default ImageList