
function selColor(color){
    let valor = document.getElementById('valor');
    // valor.setAttribute('style', 'background-color: '+color+'; width:60px; height: 50px;');
    valor.style.backgroundColor = color
    let hex = document.getElementById('hex');
    hex.innerHTML=color;
}
function inseriColor(){
    let hex = document.getElementById('hex');
    // alert(hex.innerHTML)
    if(localStorage.getItem('type')=='colorTexto'){
        top.opener.corText(hex.innerHTML);
    }else if(localStorage.getItem('type')=='colorBkTexto'){
        top.opener.backColorTextNew(hex.innerHTML);
    }
    localStorage.removeItem('type')
    window.close();
}

console.log(localStorage.getItem('type')+'----------')