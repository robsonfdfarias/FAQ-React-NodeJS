
function insert(img){
    // var img = document.getElementById("previewImage");
    
    if(img != null){
        var url = img.getAttribute("src");
        // console.log(url)
        // url = url.replace('../', '');
        
        // alert(top.opener.document.getElementById("viewImage").innerHTML)
        top.opener.document.getElementById("viewImage").innerHTML = '<img src="'+url+'" id="previewImage" width="50" height="50">';
        // top.opener.insertImg();
        window.close();
    }else{
        console.log("selecione uma imagem e Clique no botão Carregar e visualizar antes de inserir")
    }
    //top.opener.document.getElementById("porcento").innerHTML = "UHUUUUUUUUUUUUUUUUUUU"
    //top.opener.insertImg();
}

function cancel(){
    window.close();
}

function openFolders(){
    document.getElementById('filesCentral').style.display='block';
}

function fecharFoldersJan(){
    document.getElementById('filesCentral').style.display='none';
}
//var dados = JSON.stringify($('input').val());
//sessionStorage.setItem('chave', dados );
