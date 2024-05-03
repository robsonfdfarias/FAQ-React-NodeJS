import { useState } from "react"
import NoticiasPaginator from "../NoticiasPaginator";

function NoticiaAdminContent(props){

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
        alert('Novo');
    }
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '20px', marginBottom: '15px'}}>
                <div id="tituloCatMenuPag" style={{fontWeight: 'bold', fontSize: '2rem'}}>Últimas notícias</div>
                <div id="addCatMenuPag">
                    <button id="insertArticle" onClick={()=>newArticle()}
                        style={isHovered?{...estiloBase, ...estiloHover}:estiloBase}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >+ Nova Notícia</button>
                </div>
            </div>
            <NoticiasPaginator
                idCategoria={1}
                page={props.page}
                numberOfRecords={props.numberOfRecords}
                urlPergQuery={'http://localhost:3003/actors/getAdmNewsPage'}
                urlPergPaginator={'http://localhost:3003/actors/getNumberNews'}
            />
        </div>
    )
}

export default NoticiaAdminContent