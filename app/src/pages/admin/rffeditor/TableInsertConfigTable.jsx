import { useEffect } from "react"
import { ConfigUrlImg } from "../../ConfigUrlImg";

function TableInsertConfigTable(){
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
        scriptInterno.src = ConfigUrlImg("rffeditor/windowTableConfigTable.js");
        document.getElementById('scripts').appendChild(scriptInterno);
    })
    return (
        <div>
            <h2>Configuração da célula</h2>
            <div>
                <button onClick={()=>window.open('windowInsertImageBackgroundTable.php', '_blank', 'height=600, width=800, top=50, left=100, scrollbar=no, fullscreen=no')}>Selecionar Imagem</button><div id="viewImage"></div>
            </div>
            <div>Tamanho da imagem: 
            <input type="range" list="tickmarks" min="0" max="100" step="1" defaultValue={"1"} id="size" name="size" />
            <datalist id="tickmarks">
                <option value="0" label="0%">
                </option><option value="5">
                </option><option value="10">
                </option><option value="15">
                </option><option value="20">
                </option><option value="25">
                </option><option value="30">
                </option><option value="35">
                </option><option value="40">
                </option><option value="45">
                </option><option value="50" label="50%">
                </option><option value="55">
                </option><option value="60">
                </option><option value="65">
                </option><option value="70">
                </option><option value="75">
                </option><option value="80">
                </option><option value="85">
                </option><option value="90">
                </option><option value="95">
                </option><option value="100" label="100%">
                </option>
            </datalist>
            <span id="valueSize"></span>
            </div><br />
            <div>Margem esquerda: 
            <input type="range" list="listMarginLeft" min="0" max="100" step="1" defaultValue={"1"} id="marginLeft" name="marginLeft" />
            <datalist id="listMarginLeft">
                <option value="0" label="0%">
                </option><option value="5">
                </option><option value="10">
                </option><option value="15">
                </option><option value="20">
                </option><option value="25">
                </option><option value="30">
                </option><option value="35">
                </option><option value="40">
                </option><option value="45">
                </option><option value="50" label="50%">
                </option><option value="55">
                </option><option value="60">
                </option><option value="65">
                </option><option value="70">
                </option><option value="75">
                </option><option value="80">
                </option><option value="85">
                </option><option value="90">
                </option><option value="95">
                </option><option value="100" label="100%">
                </option>
            </datalist>
            <span id="valueMarginLeft"></span>
            </div><br />
            <div>Margem topo: 
            <input type="range" list="listMarginTop" min="0" max="100" step="1" defaultValue={"1"} id="marginTop" name="marginTop" />
            <datalist id="listMarginTop">
                <option value="0" label="0%">
                </option><option value="5">
                </option><option value="10">
                </option><option value="15">
                </option><option value="20">
                </option><option value="25">
                </option><option value="30">
                </option><option value="35">
                </option><option value="40">
                </option><option value="45">
                </option><option value="50" label="50%">
                </option><option value="55">
                </option><option value="60">
                </option><option value="65">
                </option><option value="70">
                </option><option value="75">
                </option><option value="80">
                </option><option value="85">
                </option><option value="90">
                </option><option value="95">
                </option><option value="100" label="100%">
                </option>
            </datalist>
            <span id="valueMarginTop"></span>
            </div><br />
            Repetir imagem: 
            <select name="typeBorder" id="repeatImage" required="repeatImage">
                <option value="no-repeat">Não repetir</option>
                <option value="repeat-y">Repetir na vertial</option>
                <option value="repeat-x">Repetir na horizontal</option>
            </select>
            <br /><br />
            Começar imagem: 
            <select name="typeBorder" id="originImage" required="originImage">
                <option value="padding-box">Começar da margem da tabela</option>
                <option value="border-box">Começar da borda da tabela</option>
                <option value="content-box">Começar do limite da janela</option>
            </select>
            <br /><br />
            <div><button id="aplicar" onClick={()=>insertConfig()}>Aplicar</button>
            <button id="removeCor" onClick={()=>removeConfig()}>Remover Configurações</button></div><br />
            <div id="scripts"></div>
        </div>
    )
}

export default TableInsertConfigTable