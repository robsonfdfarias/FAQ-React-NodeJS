import { useEffect } from "react"
import { ConfigUrlImg } from "../../ConfigUrlImg";

function TableInsertConfigCell(){
    useEffect(()=>{
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
        scriptInterno.src = ConfigUrlImg("rffeditor/windowTableInsert.js");
        document.getElementById('scripts').appendChild(scriptInterno);
    })
    return (
        <div>
            <h2>Configuração da célula</h2>
            <div>Expessura da borda: 
            <input type="range" list="tickmarks" min="0" max="7" step="1" defaultValue={"1"} id="expessura" name="expessura" />
            <datalist id="tickmarks">
                <option value="0" label="0%">
                </option><option value="1">
                </option><option value="2">
                </option><option value="3" label="50%">
                </option><option value="4">
                </option><option value="5">
                </option><option value="6">
                </option><option value="7" label="100%">
                </option>
            </datalist>
            </div><br />
            <div>Cor da borda: <input type="color" name="colorBorder" id="colorBorder" required="required" defaultValue={"#000000"} /></div><br />
            <div>Cor de fundo: <input type="color" name="colorbackg" id="colorbackg" required="required" defaultValue={"#ffffff"} /></div><br />
            <div>Tipo da borda: 
            <select name="typeBorder" id="typeBorder" required="required">
                <option value="solid">Sólido</option>
                <option value="dotted">Pontilhado</option>
                <option value="dashed">Tracejado</option>
                <option value="double">Borda dupla</option>
                <option value="groove">Groove</option>
                <option value="ridge">Ridge</option>
                <option value="inset">Inset</option>
                <option value="outset">Outset</option>
                <option value="none">Remover borda</option>
                <option value="hidden">Esconder borda</option>
            </select></div><br />

            <div>Direção do texto: 
            <select name="textDirection" id="textDirection" required="required">
                <option value="limpar">Normal</option>
                <option value="vertical-rl;upright">De cima para baixo</option>
                <option value="vertical-rl;null">Tracejado</option>
            </select></div><br />

            Distância do texto para a borda: <span id="valorPadding"></span> <br />
            0 px<input type="range" list="tickmarksPadding" min="0" max="40" step="1" defaultValue={"0"} id="paddingBorder" name="paddingBorder" style={{width: '200px'}} />40 px
            <datalist id="tickmarksPadding">
                <option value="0" label="0%">
                </option><option value="5">
                </option><option value="10">
                </option><option value="15">
                </option><option value="20" label="50%">
                </option><option value="25">
                </option><option value="30">
                </option><option value="35">
                </option><option value="40" label="100%">
                </option>
            </datalist>
            <br /><br />

            <div><button id="aplicar" onClick={()=>insertConfig()}>Aplicar</button>
            <button id="removeCor" onClick={()=>removeConfig()}>Remover Configurações</button></div><br />
            <div id="scripts"></div>
        </div>
    )
}

export default TableInsertConfigCell