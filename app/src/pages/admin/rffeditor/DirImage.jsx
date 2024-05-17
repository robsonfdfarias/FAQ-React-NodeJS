import { useEffect, useState } from "react";
import { ConfigUrlImg } from "../../ConfigUrlImg";

function DirImage(props){
    const partes = props.image.split('.');
    const extencao = partes[(partes.length-1)];
    const [styleConfig, setStyleConfig] = useState(false);
    const urlImg = 'http://localhost:3003/upload/'+props.dir+props.image;
    // console.log(urlImg)

    const styles = {
        bkImg: {
            // background: 'url(http://localhost:3003/upload/'+props.image+')',
            background: 'url('+urlImg+')',
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
        bkFolder: {
            background: 'url('+ConfigUrlImg('rffeditor/imgs/pasta.png')+')',
            // background: 'url('+urlImg+')',
            backgroundSize: '60%',
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
        bkFolderHover: {
            backgroundSize: '80%',
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

    useEffect(()=>{
        const scriptInterno = document.createElement('script');
        scriptInterno.src = ConfigUrlImg("rffeditor/DirImg.js");
        document.getElementById('scripts').appendChild(scriptInterno);
    })

    const verifyImgOrFolder = () => {
        var partes = props.image.split('.');
        if(partes[1]!=undefined && partes[1]!=null && partes[1]!=''){
            return (
                <div style={styleConfig?{...styles.bkImg, ...styles.bkImgHover}:styles.bkImg}
                    onMouseEnter={()=>setStyleConfig(true)}
                    onMouseLeave={()=>setStyleConfig(false)}
                    onClick={()=>clickFile('imagem', urlImg)}>
                    <div style={styleConfig?{...styles.divExt, ...styles.divExtHover}:styles.divExt}>{extencao}</div>
                    <div id="scripts"></div>
                </div>
            )
        }else{
            return (
                <div style={styleConfig?{...styles.bkFolder, ...styles.bkFolderHover}:styles.bkFolder}
                    onMouseEnter={()=>setStyleConfig(true)}
                    onMouseLeave={()=>setStyleConfig(false)}>
                    <div style={styleConfig?{...styles.divExt, ...styles.divExtHover}:styles.divExt}>{extencao}</div>
                    <div id="scripts"></div>
                </div>
            )
        }
    }

    return (
        // <div style={{position: 'relative', width: '300px', border: '1px solid #cdcdcd', borderRadius: '4px', boxShadow: '2px 2px 6px rgba(0,0,0,0.5)', margin: '5px'}}>
        //     <div style={{position: 'absolute', top: '-15px', right: '10px', backgroundColor: 'yellow', fontSize: '20px', padding: '7px'}}>{extencao}</div>
        //     <img src={"http://localhost:3003/upload/"+props.image} title={partes[0]} width={300} />
        // </div>
        <div>
            {verifyImgOrFolder()}
        </div>
        // <div style={styleConfig?{...styles.bkImg, ...styles.bkImgHover}:styles.bkImg}
        //     onMouseEnter={()=>setStyleConfig(true)}
        //     onMouseLeave={()=>setStyleConfig(false)}
        //     onClick={()=>clickFile('imagem', urlImg)}>
        //     <div style={styleConfig?{...styles.divExt, ...styles.divExtHover}:styles.divExt}>{extencao}</div>
        //     <div id="scripts"></div>
        // </div>
    )
}

export default DirImage