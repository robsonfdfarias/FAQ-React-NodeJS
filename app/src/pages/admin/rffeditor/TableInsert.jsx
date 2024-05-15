import { useEffect } from "react"
import { ConfigUrlImg } from "../../ConfigUrlImg";

function TableInsert(){
    useEffect(() => {
        const editorRobsonFarias = document.createElement('link');
        editorRobsonFarias.rel = "stylesheet";
        editorRobsonFarias.type = "text/css";
        // editorRobsonFarias.href = "../../../rffeditor/editorRobsonFarias.css";
        editorRobsonFarias.href = ConfigUrlImg("rffeditor/editorRobsonFarias.css");
        document.head.appendChild(editorRobsonFarias);


        const janMovEdiExc = document.createElement('link');
        janMovEdiExc.rel = "stylesheet";
        janMovEdiExc.type = "text/css";
        janMovEdiExc.href = ConfigUrlImg("rffeditor/janMovEdiExc.css");
        document.head.appendChild(janMovEdiExc);


        const styleInterno = document.createElement('link');
        styleInterno.rel = "stylesheet";
        styleInterno.type = "text/css";
        styleInterno.href = ConfigUrlImg("rffeditor/styleInterno.css");
        document.head.appendChild(styleInterno);

        const upload = document.createElement('script');
        upload.src = ConfigUrlImg("rffeditor/upload.js");
        document.getElementById('scripts').appendChild(upload);

        const funcEditoRobson = document.createElement('script');
        funcEditoRobson.src = ConfigUrlImg("rffeditor/func.editor.robson.js");
        document.getElementById('scripts').appendChild(funcEditoRobson);

        const dragDrop = document.createElement('script');
        dragDrop.src = ConfigUrlImg("rffeditor/dragDrop.js");
        document.getElementById('scripts').appendChild(dragDrop);

        const scriptInterno = document.createElement('script');
        scriptInterno.src = ConfigUrlImg("rffeditor/scriptInterno.js");
        document.getElementById('scripts').appendChild(scriptInterno);

        document.getElementById('insertTable').addEventListener('click', function () {
            insertTabWin(ConfigUrlImg(''));
        });

        document.getElementById('cancelInsertTable').addEventListener('click', function () {
            cancel();
        });

    }, []);
    return (
        // <div id="inseriImagemCentro" style={styles.container}>
        <div style={styles.container}>
            <div style={styles.divContainer}>
                <input type="text" style={styles.inputObj} placeholder="Digite o número de linhas" id="numRow" />
                <input type="text" style={styles.inputObj} placeholder="Digite o número de colunas" id="numCol" />
                {/* <button onclick="insertTab()" id="insertTable">Inserir tabela</button><button onclick="cancel()" id="cancelInsertTable">Cancelar</button> */}
                <button id="insertTable">Inserir tabela</button>
                <button id="cancelInsertTable">Cancelar</button>
                <div id="scripts"></div>
            </div>
        </div>
    )
}

const styles = {
    container: {
        height: '99vh',
        width: '99vw',
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        top: '15px',
        left: '0',
        backgroundColor: '#cdcdcd',
        margin: '0',
        padding: '0'
    },
    divContainer: {
        position: 'relative',
        width: '70vw',
        height: '70vh',
        margin: 'auto',
        backgroundColor: '#fff',
        border: '1px solid #cdcdcd',
        boxShadow: '2px 2px 2px rgba(0,0,0,0.5)',
        borderRadius: '6px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '20px'
    },
    inputObj: {
        height: '40px',
        lineHeight: '30px',
        width: '68.5vw',
        fontSize: '1.3rem',
        marginBottom: '10px'
    }
};

export default TableInsert