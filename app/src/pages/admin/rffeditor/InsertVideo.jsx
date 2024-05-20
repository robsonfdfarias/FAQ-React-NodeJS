import { useEffect } from "react"
import { ConfigUrlImg } from "../../ConfigUrlImg";

function InsertVideo(){

    useEffect(()=>{
        const script = document.createElement('script');
        script.src=ConfigUrlImg('rffeditor/ScriptInternoInsertVideo.js');
        document.getElementById('scripts').append(script);
    })

    const styles = {
        geral: {
            display: 'table-caption',
            marginTop: '30px',
            width: '98vw',
            height: '98vh',
        },
        imageCenter: {
            width: '500px',
            // height: '350px',
            margin: 'auto',
            border: '1px solid #cdcdcd',
            borderRadius: '4px',
            boxShadow: '2px 2px 2px rgba(0,0,0,0.3)',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column'
        },
        inputConfig: {
            height: '25px',
            lineHeight: '25px',
            fontSize: '1.2rem',
            padding: '5px',
            marginBottom: '5px',
            border: '0.5px solid #cdcdcd',
            borderRadius: '4px'
        },
        btConfig: {
            padding: '15px',
            fontSize: '1.2rem',
            border: '0.5px solid #cdcdcd',
            borderRadius: '4px',
            marginLeft: '5px',
            marginTop: '10px'
        },
        divBt: {
            alignSelf: 'center',
        }
    }
    return (
        <div id="geralInseriImagem" style={styles.geral}>
            <div id="glassImageBackground"></div>
            <div id="inseriImagemCentro" style={styles.imageCenter}>
                <input type="text" placeholder="Insira aqui o endereco" id="url" style={styles.inputConfig} />
                <input type="text" placeholder="Digite a Largura ex(400)" id="largura" style={styles.inputConfig} />
                <input type="text" placeholder="Digite a altura ex(300)" id="altura" style={styles.inputConfig} />
                <div id="bt" style={styles.divBt}>
                    <button onClick={()=>insertUrlVideo()} style={styles.btConfig}>Inserir vídeo</button>
                    <button onClick={()=>cancel()} style={styles.btConfig}>Cancelar</button>
                </div>
            </div>
            <div id="scripts"></div>
        </div>
    )
}

export default InsertVideo