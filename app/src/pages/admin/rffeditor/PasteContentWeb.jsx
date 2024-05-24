function PasteContentWeb(){
    function insertContent(obj){
        top.opener.pasteContentOfWeb(obj);
        window.close();
    }
    return (
        <div style={{marginTop: '20px', padding: '15px'}}>
            <div name="content" id="content" style={{width: '100%', minHeight: '400px', border: '1px solid #cdcdcd'}} 
             contentEditable="true" autoFocus="" required="" autoComplete="off" spellCheck="true"></div>
            <br />
            <button onClick={()=>insertContent(document.getElementById('content'))}>Inserir</button>
        </div>
    )
}

export default PasteContentWeb