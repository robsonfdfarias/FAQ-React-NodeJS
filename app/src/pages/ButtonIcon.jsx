import { useState } from "react";
import { ConfigUrlImg } from "./ConfigUrlImg";

export function ButtonIcon(props){
    const [isHovered, setIsHovered] = useState(false);
    const url = ConfigUrlImg(props.img); // props.img = 'pasta/img.formato'
    const estiloBase = {
        padding: '10px 10px',
        color: 'white',
        fontSize: '1.3rem',
        borderRadius: '5px',
        // backgroundColor: '#0c582c',
        backgroundColor: props.colorDefault,
        border: 'none',
        cursor: 'pointer',
        margin: '3px',
        display: 'flex',
        justifyContent: 'center',
        transition: 'all ease-in-out 0.3s'
    };
    const estiloHover = {
        // backgroundColor: '#b1cd49'
        // backgroundColor: 'green'
        backgroundColor: props.colorHover
    };
    const openLink = () =>{
        alert('Clicou no link: '+props.href);
    }

    return (
        // <div id="insertArticle" onClick={()=>openLink()}
        <div id="insertArticle" onClick={props.onClick}
                        style={isHovered?{...estiloBase, ...estiloHover}:estiloBase}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
            {/* <img src={"../../"+props.img} width="20" title="Editar notícia" /> */}
            {/* <img src={url} width="20" title="Editar notícia" /> */}
            {props.img!=undefined?<img src={url} width="20" title="Editar notícia" />:props.titulo}
        </div>
    )
}