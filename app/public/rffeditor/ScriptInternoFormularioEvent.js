
var today = new Date();
today.setDate(today.getDate()); //Voalá
today = today.toISOString().split('T')[0];

var dtinicio = document.getElementById("dtinicio");
var dtfim = document.getElementById("dtfim");

dtinicio.setAttribute('min', today);
dtfim.setAttribute('min', today);
dtinicio.addEventListener("change", function(){
    dtfim.disabled = false;
    dtfim.setAttribute('min', this.value);
    if(dtfim.value<this.value){
        dtfim.value = this.value;
    }
})


var enviar = document.getElementById("enviar");
enviar.addEventListener("click", function(){
    insertTextoEmTextarea();
})
function insertTextoEmTextarea(){
    var campoTexto = document.getElementById("texto").innerHTML;
    console.log(campoTexto)
    var conteudoArtigo = document.getElementById("conteudoArtigo");
    conteudoArtigo.innerHTML = campoTexto;
}

function ValidateContactForm(){
    var conteudoArtigo = document.getElementById("conteudoArtigo");
    insertTextoEmTextarea();
    if(conteudoArtigo.value==''){
        alert("O campo conteudoArtigo não pode ficar em branco!");
        return false;
    }
}
