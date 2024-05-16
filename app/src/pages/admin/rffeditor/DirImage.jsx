import { useState } from "react";

function DirImage(props){
    const partes = props.image.split('.');
    const extencao = partes[(partes.length-1)];
    const [styleConfig, setStyleConfig] = useState(false);

    const styles = {
        bkImg: {
            background: 'url(http://localhost:3003/upload/'+props.image+')',
            backgroundSize: '150%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            position: 'relative', 
            width: '300px', 
            height: '200px',
            border: '1px solid #cdcdcd', 
            borderRadius: '4px', 
            boxShadow: '1px 1px 3px rgba(0,0,0,0.3)', 
            margin: '5px',
            transition: 'ease-in-out all 0.5s'
        },
        bkImgHover: {
            backgroundSize: '90%',
        },

        divExt: {
            position: 'absolute', 
            top: '0px', 
            right: '10px', 
            backgroundColor: 'yellow', 
            fontSize: '20px', 
            padding: '7px',
            boxShadow: '3px 3px 8px rgba(0,0,0,0.5)',
            transition: 'ease-in-out all 0.5s'
        },
        divExtHover: {
            top: '-15px'
        }
    }

    return (
        // <div style={{position: 'relative', width: '300px', border: '1px solid #cdcdcd', borderRadius: '4px', boxShadow: '2px 2px 6px rgba(0,0,0,0.5)', margin: '5px'}}>
        //     <div style={{position: 'absolute', top: '-15px', right: '10px', backgroundColor: 'yellow', fontSize: '20px', padding: '7px'}}>{extencao}</div>
        //     <img src={"http://localhost:3003/upload/"+props.image} title={partes[0]} width={300} />
        // </div>
        <div style={styleConfig?{...styles.bkImg, ...styles.bkImgHover}:styles.bkImg}
            onMouseEnter={()=>setStyleConfig(true)}
            onMouseLeave={()=>setStyleConfig(false)}>
            <div style={styleConfig?{...styles.divExt, ...styles.divExtHover}:styles.divExt}>{extencao}</div>
        </div>
    )
}

export default DirImage