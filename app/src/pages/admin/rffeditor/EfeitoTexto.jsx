import { useEffect } from "react";
import { ConfigUrlImg } from "../../ConfigUrlImg";

function EfeitoTexto(){
    useEffect(()=>{
        const editorRobsonFarias = document.createElement('link');
        editorRobsonFarias.rel = "stylesheet";
        editorRobsonFarias.type = "text/css";
        editorRobsonFarias.href = ConfigUrlImg("rffeditor/editorRobsonFarias.css");
        document.head.appendChild(editorRobsonFarias);
    }, [])
    const inserir = (tag)=>{
        top.opener.insertTagsNew(tag);
        window.close();
    }
    const deleteEffect = () => {
        top.opener.delElement();
        window.close();
    }
    const styles = {
        bt: {
            cursor: 'pointer',
            margin: '10px'
        }
    }
    return (
        <div id="efeitosTexto">
            <div id="topEfeitoTexto" style={{marginTop: '20px'}}>
                <div id="tituloEfeitoTexto" style={{fontSize: '1.4rem', fontWeight: 'bold', display: 'flex', justifyContent: 'center', padding: '15px'}}>Efeitos de texto</div>
            </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <button id="testeSel" onClick={()=>{deleteEffect()}} style={{width: '90%'}}>Remover efeito</button>
                </div>
            <div id="listaEfeitoTexto"><br />
                {/* <button onClick={()=>{insertTagsNew('rffEfeitoBGText'), fechaJanEfeitosTexto()}}><rffefeitobgtext>rff Efeito BG Text 1</rffefeitobgtext></button><br />
                <button onClick={()=>{insertTagsNew('rffEfeitoBGText2'), fechaJanEfeitosTexto()}}><rffefeitobgtext2>rff Efeito BG Text 2</rffefeitobgtext2></button><br />
                <button onClick={()=>{insertTagsNew('rffEfeitoBGText3'), fechaJanEfeitosTexto()}}><rffefeitobgtext3>rff Efeito BG Text 3</rffefeitobgtext3></button><br />
                <button onClick={()=>{insertTagsNew('rffEfeitoBGText4'), fechaJanEfeitosTexto()}}><rffefeitobgtext4>rff Efeito BG Text 4</rffefeitobgtext4></button><br />
                <button onClick={()=>{insertTagsNew('rffEfeitoBGText5'), fechaJanEfeitosTexto()}}><rffefeitobgtext5>rff Efeito BG Text 5</rffefeitobgtext5></button><br />
                <button onClick={()=>{insertTagsNew('rffEfeitoBGText6'), fechaJanEfeitosTexto()}}><rffefeitobgtext6>rff Efeito BG Text 6</rffefeitobgtext6></button><br />
                <button onClick={()=>{insertTagsNew('rffEfeitoBGText7'), fechaJanEfeitosTexto()}}><rffefeitobgtext7>rff Efeito BG Text 7</rffefeitobgtext7></button><br />
                <button onClick={()=>{insertTagsNew('rffEfeitoBGText8'), fechaJanEfeitosTexto()}}><rffefeitobgtext8>rff Efeito BG Text 8</rffefeitobgtext8></button><br />
                <button onClick={()=>{insertTagsNew('rffEfeitoBGText9'), fechaJanEfeitosTexto()}}><rffefeitobgtext9>rff Efeito BG Text 9</rffefeitobgtext9></button><br />
                <button onClick={()=>{insertTagsNew('rffEfeitoBGText10'), fechaJanEfeitosTexto()}}><rffefeitobgtext10>rff Efeito BG Text 10</rffefeitobgtext10></button><br />
                <button onClick={()=>{insertTagsNew('rffEfeitoBGText11'), fechaJanEfeitosTexto()}}><rffefeitobgtext11>rff Efeito BG Text 11</rffefeitobgtext11></button><br />
                <button onClick={()=>{insertTagsNew('rffEfeitoBGText12'), fechaJanEfeitosTexto()}}><rffefeitobgtext12>rff Efeito BG Text 12</rffefeitobgtext12></button><br />
                <button onClick={()=>{insertTagsNew('rffEfeitoBGText13'), fechaJanEfeitosTexto()}}><rffefeitobgtext13>rff Efeito BG Text 13</rffefeitobgtext13></button><br />
                <button onClick={()=>{insertTagsNew('rffEfeitoBGText14'), fechaJanEfeitosTexto()}}><rffefeitobgtext14>rff Efeito BG Text 14</rffefeitobgtext14></button><br />
                <button onClick={()=>{insertTagsNew('rffEfeitoBGText15'), fechaJanEfeitosTexto()}}><rffefeitobgtext15>rff Efeito BG Text 15</rffefeitobgtext15></button><br />
                <button onClick={()=>{insertTagsNew('rffEfeitoBGText16'), fechaJanEfeitosTexto()}}><rffefeitobgtext16>rff Efeito BG Text 16</rffefeitobgtext16></button><br />
                <button onClick={()=>{insertTagsNew('rffEfeitoBGText17'), fechaJanEfeitosTexto()}}><rffefeitobgtext17>rff Efeito BG Text 17</rffefeitobgtext17></button><br />
                <button onClick={()=>{insertTagsNew('rffEfeitoBGText18'), fechaJanEfeitosTexto()}}><rffefeitobgtext18>rff Efeito BG Text 18</rffefeitobgtext18></button><br />
                <button onClick={()=>{insertTagsNew('rffEfeitoBGText19'), fechaJanEfeitosTexto()}}><rffefeitobgtext19>rff Efeito BG Text 19</rffefeitobgtext19></button><br /> */}

<a onClick={()=>{inserir('rffEfeitoBGText')}} style={styles.bt}><rffefeitobgtext>rff Efeito BG Text 1</rffefeitobgtext></a><br />
                <a onClick={()=>{inserir('rffEfeitoBGText2')}} style={styles.bt}><rffefeitobgtext2>rff Efeito BG Text 2</rffefeitobgtext2></a><br />
                <a onClick={()=>{inserir('rffEfeitoBGText3')}} style={styles.bt}><rffefeitobgtext3>rff Efeito BG Text 3</rffefeitobgtext3></a><br />
                <a onClick={()=>{inserir('rffEfeitoBGText4')}} style={styles.bt}><rffefeitobgtext4>rff Efeito BG Text 4</rffefeitobgtext4></a><br />
                <a onClick={()=>{inserir('rffEfeitoBGText5')}} style={styles.bt}><rffefeitobgtext5>rff Efeito BG Text 5</rffefeitobgtext5></a><br />
                <a onClick={()=>{inserir('rffEfeitoBGText6')}} style={styles.bt}><rffefeitobgtext6>rff Efeito BG Text 6</rffefeitobgtext6></a><br />
                <a onClick={()=>{inserir('rffEfeitoBGText7')}} style={styles.bt}><rffefeitobgtext7>rff Efeito BG Text 7</rffefeitobgtext7></a><br />
                <a onClick={()=>{inserir('rffEfeitoBGText8')}} style={styles.bt}><rffefeitobgtext8>rff Efeito BG Text 8</rffefeitobgtext8></a><br />
                <a onClick={()=>{inserir('rffEfeitoBGText9')}} style={styles.bt}><rffefeitobgtext9>rff Efeito BG Text 9</rffefeitobgtext9></a><br />
                <a onClick={()=>{inserir('rffEfeitoBGText10')}} style={styles.bt}><rffefeitobgtext10>rff Efeito BG Text 10</rffefeitobgtext10></a><br />
                <a onClick={()=>{inserir('rffEfeitoBGText11')}} style={styles.bt}><rffefeitobgtext11>rff Efeito BG Text 11</rffefeitobgtext11></a><br />
                <a onClick={()=>{inserir('rffEfeitoBGText12')}} style={styles.bt}><rffefeitobgtext12>rff Efeito BG Text 12</rffefeitobgtext12></a><br />
                <a onClick={()=>{inserir('rffEfeitoBGText13')}} style={styles.bt}><rffefeitobgtext13>rff Efeito BG Text 13</rffefeitobgtext13></a><br />
                <a onClick={()=>{inserir('rffEfeitoBGText14')}} style={styles.bt}><rffefeitobgtext14>rff Efeito BG Text 14</rffefeitobgtext14></a><br />
                <a onClick={()=>{inserir('rffEfeitoBGText15')}} style={styles.bt}><rffefeitobgtext15>rff Efeito BG Text 15</rffefeitobgtext15></a><br />
                <a onClick={()=>{inserir('rffEfeitoBGText16')}} style={styles.bt}><rffefeitobgtext16>rff Efeito BG Text 16</rffefeitobgtext16></a><br />
                <a onClick={()=>{inserir('rffEfeitoBGText17')}} style={styles.bt}><rffefeitobgtext17>rff Efeito BG Text 17</rffefeitobgtext17></a><br />
                <a onClick={()=>{inserir('rffEfeitoBGText18')}} style={styles.bt}><rffefeitobgtext18>rff Efeito BG Text 18</rffefeitobgtext18></a><br />
                <a onClick={()=>{inserir('rffEfeitoBGText19')}} style={styles.bt}><rffefeitobgtext19>rff Efeito BG Text 19</rffefeitobgtext19></a><br />
            </div>
        </div>
    )
}

export default EfeitoTexto