import { useState } from "react"
import RecordPaginator from "./RecordPaginator";

function RegisterAdminContent(props){

    const [isHovered, setIsHovered] = useState(false);
    const estiloBase = {
        padding: '10px 20px',
        color: 'white',
        fontSize: '1.1rem',
        borderRadius: '5px',
        backgroundColor: '#0c582c',
        border: 'none',
        cursor: 'pointer',
        transition: 'all ease-in-out 0.5s'
    };
    const estiloHover = {
        // backgroundColor: '#b1cd49'
        backgroundColor: 'green'
    };
    const newArticle = () =>{
        // window.location.href = '/admin/noticias/insert/'
        window.location.href = props.linkBtNew
    }
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '20px', marginBottom: '15px'}}>
                {/* <div id="tituloCatMenuPag" style={{fontWeight: 'bold', fontSize: '1.5rem'}}>Últimas notícias</div> */}
                <div id="tituloCatMenuPag" style={{fontWeight: 'bold', fontSize: '1.5rem'}}>{props.bigTitle}</div>
                <div id="addCatMenuPag">
                    <button id="insertArticle" onClick={()=>newArticle()}
                        style={isHovered?{...estiloBase, ...estiloHover}:estiloBase}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >{props.titleBtNew}</button>
                </div>
            </div>
            <RecordPaginator
                idCateg={props.idCateg}
                page={props.page}
                numberOfRecords={props.numberOfRecords}
                // urlPergQuery={'http://localhost:3003/actors/getAdmNewsPage'}
                // urlPergPaginator={'http://localhost:3003/actors/getNumberNews'}
                urlQuery={props.urlQuery}
                urlPaginator={props.urlPaginator}
                linkEditRegist={props.linkEditRegist}
                linkDeleteRegist={props.linkDeleteRegist}
            />
        </div>
    )
}

export default RegisterAdminContent