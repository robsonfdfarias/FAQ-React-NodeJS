import { useEffect } from "react"
import { ConfigUrlImg } from "../../ConfigUrlImg";

function InsertLink(){
    useEffect(()=>{
        const script = document.createElement('script');
        script.src=ConfigUrlImg('rffeditor/ScriptInternoInsertLink.js');
        document.getElementById('scripts').appendChild(script);
    });
    const styles={
        geral: {
            width: '98vw',
            height: '98vh',
            margin: 'auto',
            marginTop: '25px'
        },
        spanTitle: {
            fontSize: '1.2rem',
            fontWeight: 'bold',
            marginBottom: '10px'
        },
        linkCentro: {
            padding: '25px',
            margin: 'auto',
            width: '500px',
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid #cdcdcd',
            borderRadius: '4px',
            boxShadow: '2px 2px 2px rgba(0,0,0,0.3)',
            padding: '20px',
        },
        tools: {
            display: 'flex',
            flexDirection: 'column'
        },
        inputConfig: {
            // height: '25px',
            // lineHeight: '25px',
            fontSize: '1.2rem',
            padding: '10px',
            marginBottom: '5px',
            border: '0.5px solid #cdcdcd',
            borderRadius: '4px'
        },
        bt: {
            padding: '15px',
            fontSize: '1.2rem',
            border: '0.5px solid #cdcdcd',
            borderRadius: '4px',
            marginLeft: '5px',
            marginTop: '10px'
        }
    }
    return (
        <div id="geralEditImagem" style={styles.geral}>
            <div id="glassImageBackground"></div>
            <div id="insertLinkCentro" style={styles.linkCentro}>
                <span id="titleSpan" style={styles.spanTitle}>Linserir link na seleção:</span>
                <div id="ferramentas" style={styles.tools}>
                    <input type="url" placeholder="Insira aqui o link" id="link" required="" style={styles.inputConfig} />
                    {/* <input type="text" placeholder="digite _blank para abrir em outra janela" id="targets" style={styles.inputConfig} /> */}
                    <select name="targets" id="targets" style={styles.inputConfig}>
                        <option value="_blank">Abrir em uma nova janela</option>
                        <option value="_self">Abrir na janela atual</option>
                    </select>
                    <div id="bts">
                        <button onClick={()=>inserirLink()} id="inserir" style={styles.bt}>Inserir link</button>
                        <button onClick={()=>cancel()} id="cancelar" style={styles.bt}>Cancelar</button>
                    </div>
                </div>
            </div>
            <div id="scripts"></div>
        </div>
    )
}

export default InsertLink