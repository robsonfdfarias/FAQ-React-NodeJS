import { ButtonIcon } from "../../ButtonIcon";

function PasteContentWeb(){
    function insertContent(obj){
        top.opener.pasteContentOfWeb(obj);
        window.close();
    }
    const styles = {
        bt: {
            padding: '10px 20px',
            borderRadius: '4px',
            fontSize: '1.2rem',
            border: '1px solid #cdcdcd'
        }
    }
    return (
        <div style={{marginTop: '20px', padding: '15px'}}>
            <div name="content" id="content" style={{width: '100%', minHeight: '400px', border: '1px solid #cdcdcd'}} 
             contentEditable="true" autoFocus="" required="" autoComplete="off" spellCheck="true"></div>
            <br />
            <ButtonIcon 
                // func={()=>insertContent(document.getElementById('content'))}
                titulo={"Inserir"}
                href={"/divBtEdit/"}
                colorDefault={"#0c582c"}
                colorHover={"#458807"} 
                onClick={()=>insertContent(document.getElementById('content'))}
            />
            {/* <button style={styles.bt} onClick={()=>insertContent(document.getElementById('content'))}>Inserir</button> */}
        </div>
    )
}

export default PasteContentWeb