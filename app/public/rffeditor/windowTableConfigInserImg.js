
function insert(img){
    // var img = document.getElementById("previewImage");
    
    if(img != null){
        if(verifyURL()){
            insertI(img);
        }else{
            var url = img.getAttribute("src");
            // console.log(url)
            // url = url.replace('../', '');
            
            // alert(top.opener.document.getElementById("viewImage").innerHTML)
            top.opener.document.getElementById("viewImage").innerHTML = '<img src="'+url+'" id="previewImage" width="50" height="50">';
            // top.opener.insertImg();
            window.close();
        }
        
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
function verifyURL(){
    let url = top.opener.window.location.href;
    console.log(url)
    let partes = url.split('/');
    console.log(partes)
    console.log(partes[5])
    if(partes[5]=='insert'){
        return true;
    }else{
        return false;
    }
}




function insertI(img){
    // var img = document.getElementById("previewImage");
    
    if(img != null){
        var url = img.getAttribute("src");
        console.log(url)
        // url = url.replace('../', '');
        // var width = document.getElementById("largura").value;
        // if(width<=0 || width==null || width==''){
        //     width='auto';
        // }
        // var height=document.getElementById("altura").value;
        // if(height<=0 || height==null || height==''){
        //     height='auto';
        // }
        // top.opener.document.getElementById("porcento").innerHTML = '<img src="'+url+'" id="previewImage" width="'+width+'" height="'+height+'">';
        top.opener.document.getElementById("porcento").innerHTML = '<img src="'+url+'" id="previewImage" width="100" height="100">';
        top.opener.insertImg();
        window.close();
    }else{
        console.log("selecione uma imagem e Clique no botão Carregar e visualizar antes de inserir")
    }
}
