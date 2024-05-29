import RecordQuery from "./RecordQuery";
import { useEffect, useState } from "react";

function RecordPaginator(props){
    const [pagin, setPagin] = useState();
    var quantidade;
    var totalPages;
    var testa=0;

    // const convertForArray = (num) => {
    //     let rows = [];
    //     for(let i=0; i<num; i++){
    //         rows.push((i+1));
    //     }
    //     return rows;
    // }

    var printLink = (link, tipo, tot) => {
        // console.log(props.page+' - '+link)
        if(tipo==0){
            if((props.page+1)==link){
                return (<a className="selectedPage" key={link}>{link}</a>);
            }else{
                return (<a href={"./"+link} key={link}>{link}</a>);
            }
        }else if(tipo==1){
            if((props.page+1)==1){
                return (<a style={{backgroundColor: '#cdcdcd'}} key={'prev-'+link}>{'<'}</a>);
            }else{
                return (<a href={"./"+link} key={'prev-'+link}>{'<'}</a>);
            }
        }else if(tipo==2){
            if((props.page+1)==tot){
                return (<a style={{backgroundColor: '#cdcdcd'}} key={'next-'+link}>{'>'}</a>);
            }else{
                return (<a href={"./"+link} key={'next-'+link}>{'>'}</a>);
            }
        }
    }

    const idCat = props.idCateg!=undefined?props.idCateg:1;

    useEffect(()=>{
        // fetch('http://localhost:3003/actors/numberAllQuestions',{
        fetch(props.urlPaginator,{
            method: 'POST',
            headers: {
                Accept: 'application/json', 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idCategoria: idCat
            })
        })
        .then((resposta) => resposta.json())
        .then((dados) => {
            quantidade = dados.NumReg;
            // console.log(quantidade+'--------------')
            // setPagin(Math.ceil(quantidade/props.numberOfRecords));
            if(testa<1){
                setPagin(Math.ceil(quantidade/props.numberOfRecords));
                testa++;
            }
        })
        .catch((error) => {
            console.log('Ocorreu o erro: '+error);
        })
    }, [])

    const print = (valor) => {
        // console.log('--->>>>>> ')
        // console.log(valor)
        if(valor>0){
            let array = [];
            for(let i=1; i<=valor; i++){
                array.push(printLink(i,0,0));
            }
            // console.log(array)
            return array;
        }
    }

    const print2 = (valor) => {
        var objs = print(valor);
        let links = [];
        let page = props.page+1;
        // console.log('Page = '+page)
        links.push(printLink(props.page,1,objs.length));
        if(objs.length>5){
            for(let i = 1; i<=objs.length; i++){
                if(page<=2 && i<=5){
                    links.push(objs[(i-1)]);
                }else if(page==(objs.length-1) && i>(objs.length-5) && i<=(objs.length-1)){
                    links.push(objs[(i-1)]);
                }else if(page==objs.length && i>(objs.length-5) && i<=(objs.length-1)){
                    links.push(objs[(i-1)]);
                }else if(i>=(page-2) && i<=(page+2)){
                    links.push(objs[(i-1)]);
                }
            }
            links.push(printLink((props.page+2),2,objs.length));
            // console.log(links)
            return links;
        }else{
            objs.map(op => {
                links.push(op);
            })
            links.push(printLink((props.page+2),2,objs.length));
            return links;
        }
    }

    return (
        <div>
            <div>
                <RecordQuery
                    idCateg={props.idCateg}
                    page={props.page}
                    numberOfRecords={props.numberOfRecords}
                    urlQuery={props.urlQuery}
                    linkEditRegist={props.linkEditRegist}
                    linkDeleteRegist={props.linkDeleteRegist}
                />
            </div>
            <br />
            <div className="paginator">
                {pagin>0?print2(pagin).map(link => ( link )):testa=testa}
            </div>
        </div>
    )
}

export default RecordPaginator