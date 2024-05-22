import { useEffect } from "react"
import { ConfigUrlImg } from "../../ConfigUrlImg";
import Emotions from "./Emotions";
import EfeitoTexto from "./EfeitoTexto";

function Editor(){

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
        scriptInterno.src = ConfigUrlImg("rffeditor/scriptInterno.js");
        document.getElementById('scripts').appendChild(scriptInterno);
        
    }, []);

    const styles = {
        esquerda: {
            backgroundImage: 'url('+ConfigUrlImg('rffeditor/imgEditor/alignMedia-float-left.svg')+')'
        },
        direita: {
            backgroundImage: 'url('+ConfigUrlImg('rffeditor/imgEditor/alignMedia-float-right.svg')+')'
        },
        breakTextLeft: {
            backgroundImage: 'url('+ConfigUrlImg('rffeditor/imgEditor/alignMedia-breakText-left.svg')+')'
        },
        breakTextCenter: {
            backgroundImage: 'url('+ConfigUrlImg('rffeditor/imgEditor/alignMedia-breakText-center.svg')+')'
        },
        breakTextRight: {
            backgroundImage: 'url('+ConfigUrlImg('rffeditor/imgEditor/alignMedia-breakText-right.svg')+')'
        },
    }

    
    return (
        <div style={{width: '100%', position: 'relative'}}>
            <div id="editVideo" onMouseDown={()=>getEventDrag(document.getElementById('editVideo'))}>
                <table width="100%" onMouseDown={()=>removeDrag()}>
                    <tbody><tr>
                        <td width="50"><img src={ConfigUrlImg("rffeditor/imgEditor/config-tam-width.svg")} alt="Largura" title="Largura" width="100%" height="100%" /></td>
                        <td style={{width: "calc(100% - 50px)"}}><input type="number" name="larg" id="larg" /></td>
                    </tr>
                    <tr>
                        <td width="50"><img src={ConfigUrlImg("rffeditor/imgEditor/config-tam-height.svg")} alt="Altura" title="Altura" width="100%" height="100%" /></td>
                        <td style={{width: "calc(100% - 50px)"}}><input type="number" name="alt" id="alt" /></td>
                    </tr>
                    <tr>
                        <td width="50"><img src={ConfigUrlImg("rffeditor/imgEditor/config-resource-alt.svg")} alt="Recurso alt" title="Recurso alt" width="100%" height="100%" /></td>
                        <td style={{width: "calc(100% - 50px)"}}><input type="text" name="resourceAlt" id="resourceAlt" title="Adicionar recurso de alt" alt="Adicionar recurso de alt" /></td>
                    </tr>
                    <tr>
                        <td width="50"><img src={ConfigUrlImg("rffeditor/imgEditor/config-resource-title.svg")} alt="Recurso title" title="Recurso title" width="100%" height="100%" /></td>
                        <td style={{width: "calc(100% - 50px)"}}><input type="text" name="resourceTitle" id="resourceTitle" title="Adicionar recurso de title" alt="Adicionar recurso de title" /></td>
                    </tr>
                </tbody></table>
                
                <button onClick={()=>getSetCaption()} id="addCaption" onMouseDown={()=>removeDrag()}>Adicionar Caption</button>
                <ul className="payment-methods" onMouseDown={()=>removeDrag()}>
                    <li className="payment-method esquerda">
                        <input name="payment_methods" type="radio" id="esquerda" />
                        <label htmlFor="esquerda" style={styles.esquerda}>esquerda</label>
                    </li>
            
                    <li className="payment-method direita">
                        <input name="payment_methods" type="radio" id="direita" />
                        <label htmlFor="direita" style={styles.direita}>direita</label>
                    </li>
            
                    <li className="payment-method breakTextLeft">
                        <input name="payment_methods" type="radio" id="breakTextLeft" />
                        <label htmlFor="breakTextLeft" style={styles.breakTextLeft}>solto</label>
                    </li>
            
                    <li className="payment-method breakTextCenter">
                        <input name="payment_methods" type="radio" id="breakTextCenter" />
                        <label htmlFor="breakTextCenter" style={styles.breakTextCenter}>breakTextCenter</label>
                    </li>
            
                    <li className="payment-method breakTextRight">
                        <input name="payment_methods" type="radio" id="breakTextRight" />
                        <label htmlFor="breakTextRight" style={styles.breakTextRight}>breakTextRight</label>
                    </li>
                </ul><br />
                <span id="tipoObj" style={{display: "none"}}></span>
                <button onClick={()=>salveUpdateIframe()} onMouseDown={()=>removeDrag()}>alterar</button>
                <button onClick={()=>cancelEditMedia()} onMouseDown={()=>removeDrag()}>Cancelar</button>
            </div>
            
            {/* Inserir efeito de texto */}
            <EfeitoTexto />
            
            {/* Inserir emotions */}
            <Emotions />
                        
            <div id="ferramentas">
                
                <select name="typefontface" id="typefontface">
                    {/* <option value="padrao" name="padrao" id="padrao" disabled="" selected>Font</option> */}
                    <option value="padrao" name="padrao" id="padrao" disabled="" defaultValue>Font</option>
                    <option value="monospace" name="monospace" id="monospace">Monospace</option>
                    <option value="Arial" name="Arial" id="Arial">Arial</option>
                    <option value="Courier" name="Courier" id="Courier">Courier</option>
                    <option value="Verdana" name="Verdana" id="Verdana">Verdana</option>
                    <option value="Tahoma" name="Tahoma" id="Tahoma">Tahoma</option>
                    <option value="Inter" name="Inter" id="Inter">Inter</option>
                    <option value="Bebas Neue" name="Bebas Neue" id="Bebas Neue">Bebas Neue</option>
                </select>
                
                
                <img src={ConfigUrlImg("rffeditor/imgEditor/bold.svg")} title="Colocar em Negrito" onClick={()=>{negrito(), document.getElementById('negrito').setAttribute('style', 'background-color:#cdcdcd;'), selectElem()}} unselectable="on" spaw_state="true" id="negrito" />
                <img src={ConfigUrlImg("rffeditor/imgEditor/italic.svg")} title="Colocar em Itálico" onClick={()=>{italico(), document.getElementById('italico').setAttribute('style', 'background-color:#cdcdcd;'), selectElem()}} id="italico" />
                <img src={ConfigUrlImg("rffeditor/imgEditor/underline.svg")} title="Colocar em Sublinhado" onClick={()=>{sublinhado(), document.getElementById('sublinhado').setAttribute('style', 'background-color:#cdcdcd;'), selectElem()}} id="sublinhado" />
                <img src={ConfigUrlImg("rffeditor/imgEditor/strikeout.svg")} title="Adicionar linha riscada" onClick={()=>{addStrikeThrough(), document.getElementById('strike').setAttribute('style', 'background-color:#cdcdcd;'), selectElem()}} id="strike" />
                <img src={ConfigUrlImg("rffeditor/imgEditor/alignright.svg")} title="Alinhar a direita" onClick={()=>alinharDireita()} />
                <img src={ConfigUrlImg("rffeditor/imgEditor/alignleft.svg")} title="Alinhar a esquerda" onClick={()=>alinharEsquerda()} />
                <img src={ConfigUrlImg("rffeditor/imgEditor/alignhorizontalcenter.svg")} title="Centralizar" onClick={()=>alinharCentro()} />
                <img src={ConfigUrlImg("rffeditor/imgEditor/alignblock.svg")} title="Justificar" onClick={()=>justificar()} />
                <select name="tamFont" id="tamFont">
                    <option value="1" name="1" id="1">1</option>
                    <option value="2" name="2" id="2">2</option>
                    <option value="3" name="3" id="3">3</option>
                    <option value="4" name="4" id="4">4</option>
                    <option value="5" name="5" id="5">5</option>
                    <option value="6" name="6" id="6">6</option>
                    <option value="7" name="7" id="7">7</option>        
                    {/* <option value="padrao" name="padrao" id="padrao" disabled="" selected="">Size</option> */}
                    <option value="padrao" name="padrao" id="padrao" disabled="" defaultValue="">Size</option>
                </select>
                
                <img src={ConfigUrlImg("rffeditor/imgEditor/defaultbullet.svg")} title="Marcador" onClick={()=>unOrdenarLista()} />
                <img src={ConfigUrlImg("rffeditor/imgEditor/defaultnumbering.svg")} title="Numeração" onClick={()=>{ordenarLista()}} />
                
            
                <img src={ConfigUrlImg("rffeditor/imgEditor/color.svg")} title="Mudar a cor do texto" onClick={()=>{window.open('rffeditor/windowColorText.php', 'janela', 'height=350, width=500, top=50, left=100, scrollbar=no, fullscreen=no')}} />
                
                <img src={ConfigUrlImg("rffeditor/imgEditor/backcolor.svg")} title="Cor de destaque do texto" onClick={()=>{window.open('rffeditor/windowColorBackGroundText.php', 'janela', 'height=350, width=500, top=50, left=100, scrollbar=no, fullscreen=no')}} />
            
                <img src={ConfigUrlImg("rffeditor/imgEditor/resetattributes.svg")} title="Remover formatação" onClick={()=>{removeFormatT()}} />
                <img src={ConfigUrlImg("rffeditor/imgEditor/subscript.svg")} title="Colocar em subescrito" onClick={()=>{addSubScript(), document.getElementById('subescrito').setAttribute('style', 'background-color:#cdcdcd;'), selectElem()}} id="subescrito" />
                <img src={ConfigUrlImg("rffeditor/imgEditor/superscript.svg")} title="Colocar em superescrito" onClick={()=>{addSuperScript(), document.getElementById('superescrito').setAttribute('style', 'background-color:#cdcdcd;'), selectElem()}} id="superescrito" />
                <img src={ConfigUrlImg("rffeditor/imgEditor/changecasetoupper.svg")} title="Deixar texto em caixa alta" onClick={()=>{insertTag("span", "style=\"text-transform:uppercase;\"")}} />
                <img src={ConfigUrlImg("rffeditor/imgEditor/changecasetolower.svg")} title="Deixar texto em caixa baixa" onClick={()=>{insertTag("span", "style=\"text-transform:lowercase;\"")}} />
                <img src={ConfigUrlImg("rffeditor/imgEditor/capitalize.svg")} title="Deixar iniciais das palavras em caixa alta" onClick={()=>{insertTag("span", "style=\"text-transform:capitalize;\"")}} />
                <img src={ConfigUrlImg("rffeditor/imgEditor/capitular.svg")} title="Inserir capitular" onClick={()=>{insertTag("p", "className=\"p\""), document.getElementById('p').setAttribute("style", "background-color:#cdcdcd;"), selectElem()}} id="p" />
                
                <img src={ConfigUrlImg("rffeditor/imgEditor/insertShadowText.svg")} title="Inserir sombra no texto" onClick={()=>{insertTagsNew('rffTextShadow'), document.getElementById('rffTextShadow').setAttribute('style', 'background-color:#cdcdcd;'), selectElem()}} id="rffTextShadow" />
                <img src={ConfigUrlImg("rffeditor/imgEditor/insertNeonText.svg")} title="Inserir um neon no texto" onClick={()=>{insertTagsNew('rffNeonText'), document.getElementById('rffNeonText').setAttribute('style', 'background-color:#cdcdcd;'), selectElem()}} id="rffNeonText" />
                <img src={ConfigUrlImg("rffeditor/imgEditor/insertNeonTextEColorWhite.svg")} title="Inserir um neon no texto e deixar o texto transparente" onClick={()=>{insertTagsNew('rffNeonTextEColorWhite'), document.getElementById('rffNeonTextEColorWhite').setAttribute('style', 'background-color:#cdcdcd;'), selectElem()}} id="rffNeonTextEColorWhite" />
                
                
                <img src={ConfigUrlImg("rffeditor/imgEditor/rffText3D.svg")} title="rffText3D" onClick={()=>{insertTagsNew('rffText3D'), document.getElementById('rffText3D').setAttribute('style', 'background-color:#cdcdcd;'), selectElem()}} id="rffText3D" />
                <img src={ConfigUrlImg("rffeditor/imgEditor/rffTextSimples.svg")} title="rffText3DSimples" onClick={()=>{insertTagsNew('rffText3DSimples'), document.getElementById('rffText3DSimples').setAttribute('style', 'background-color:#cdcdcd;'), selectElem()}} id="rffText3DSimples" />
                <img src={ConfigUrlImg("rffeditor/imgEditor/rffTextExtreme.svg")} title="rffText3DExtreme" onClick={()=>{insertTagsNew('rffText3DExtreme'), document.getElementById('rffText3DExtreme').setAttribute('style', 'background-color:#cdcdcd;'), selectElem()}} id="rffText3DExtreme" />
                <img src={ConfigUrlImg("rffeditor/imgEditor/rffTextDegrade.svg")} title="rffTextDegrade" onClick={()=>{insertTagsNew('rffTextDegrade'), document.getElementById('rffTextDegrade').setAttribute('style', 'background-color:#cdcdcd;'), selectElem()}} id="rffTextDegrade" />
                <img src={ConfigUrlImg("rffeditor/imgEditor/coroa2.svg")} title="rffEfeitoBGText" onClick={()=>{abreJanEfeitosTexto()}} />
                
                <select name="formatH" id="formatH">
                    <option value="h1">H1</option>
                    <option value="h2">H2</option>
                    <option value="h3">H3</option>
                    <option value="h4">H4</option>
                    <option value="h5">H5</option>
                    <option value="reset">Normal</option>
                    {/* <option value="padrao" disabled="" selected="" name="padrao" id="padrao">Hs</option> */}
                    <option value="padrao" disabled="" defaultValue={""} name="padrao" id="padrao">Hs</option>
                </select>
                <img src={ConfigUrlImg("rffeditor/imgEditor/hangingindent.svg")} title="Identar linha" onClick={()=>{addIdent()}} />
                <img src={ConfigUrlImg("rffeditor/imgEditor/hangingindentremove.svg")} title="Remove a identação" onClick={()=>{addOutIdent()}} />
            
                <img src={ConfigUrlImg("rffeditor/imgEditor/copy.svg")} title="Copiar" onClick={()=>{copiar()}} />
                <img src={ConfigUrlImg("rffeditor/imgEditor/paste.svg")} title="Colar" onClick={()=>{colar()}} />
                <img src={ConfigUrlImg("rffeditor/imgEditor/cut.svg")} title="Recortar" onClick={()=>{recortar()}} />
            
                <img src={ConfigUrlImg("rffeditor/imgEditor/redo.svg")} title="Refazer" onClick={()=>{refazer()}} />
                <img src={ConfigUrlImg("rffeditor/imgEditor/undo.svg")} title="Desfazer" onClick={()=>{desfazer()}} />
                <img src={ConfigUrlImg("rffeditor/imgEditor/insertvideo.svg")} title="Inserir Vídeo" onClick={()=>{openWindowInsertVideo()}} />
                <img src={ConfigUrlImg("rffeditor/imgEditor/graphic.svg")} title="Inserir Imagem" onClick={()=>{openWindowInsertImage()}} />
                {/* <img src={ConfigUrlImg("rffeditor/imgEditor/editImage.svg")} title="Acrescentar a função de editar as imagens" onClick={()=>{funcBtImg()}} /> */}
                <img src={ConfigUrlImg("rffeditor/imgEditor/inserttable.svg")} title="Inserir tabela" onClick={()=>{insertTable()}} />
                
            
                
                <img src={ConfigUrlImg("rffeditor/imgEditor/inserthyperlinkcontrol.svg")} title="Inserir hiperlink" onClick={()=>{openWindowLink()}} id="insertHyperLink" />
                <img src={ConfigUrlImg("rffeditor/imgEditor/removehyperlink.svg")} title="Remover hiperlink" onClick={()=>{unlink()}} />
            
                <img src={ConfigUrlImg("rffeditor/imgEditor/emotions.svg")} title="Inserir emotions" style={{width: "40px", height: "auto"}} onClick={()=>{abreJanEmotions()}} />
                <img src={ConfigUrlImg("rffeditor/imgEditor/citacao.png")} title="Inserir uma citação" onClick={()=>{insertTagsNew('cite'), document.getElementById('cite').setAttribute('style', 'background-color:#cdcdcd;'), selectElem()}} id="cite" />
                
            
                <img src={ConfigUrlImg("rffeditor/imgEditor/breakPage.svg")} title="Inserir quebra de página" onClick={()=>{insertBreakPage()}} unselectable="on" spaw_state="true" id="breakPage" />
                <img src={ConfigUrlImg("rffeditor/imgEditor/summary.svg")} title="Inserir/remover Sumário" onClick={()=>{setOrRemoveHeading()}} unselectable="on" spaw_state="true" id="sumario" />
                
                <img src={ConfigUrlImg("rffeditor/imgEditor/print.svg")} title="Imprimir" onClick={()=>{printPageDiv()}} unselectable="on" spaw_state="true" id="print" />
                                
                
            </div>
            <div id="conteiner">
                <div id="texto" contentEditable="true" autoFocus="" required="" autoComplete="off" spellCheck="true" className="box">
                    <div>Digite o seu artigo aqui...</div>
                    <div><br /></div>
                    <div><br /></div>
                    <div><br /></div>
                </div>
                
            </div>
                        
                    <div id="preview"></div>
                    <div id="porcento"></div>
                    {/* <div id="viewImage"></div> */}
                <div id="scripts"></div>
            
        </div>
    )
}

export default Editor