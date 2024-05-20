
function insertUrlVideo(){
    var url = document.getElementById("url").value;
    console.log(url);
    if(url!=null || url!=''){
        var width = document.getElementById("largura").value;
        if(width<=0 || width==null || width==''){
            width='auto';
        }
        var height=document.getElementById("altura").value;
        if(height<=0 || height==null || height==''){
            height='auto';
        }
        if(width=='auto' && height=='auto'){
            width=400;
        }
        var arrayURL = url.split("/");
        console.log(arrayURL[3]);
        var array2 = arrayURL[3].split("?");
        var codVideo = array2[0];
        var array3 = array2[1].split("=");
        var si = array3[1];
        top.opener.insertVideo(codVideo, si, width, height);
        window.close();
    }else{
        alert("Cole o endereço que você copiou no campo de URL");
    }
    
    /*
    if(img != null){
        var url = img.getAttribute("src");
        console.log(url)
        var width = document.getElementById("largura").value;
        if(width<=0 || width==null || width==''){
            width='auto';
        }
        var height=document.getElementById("altura").value;
        if(height<=0 || height==null || height==''){
            height='auto';
        }
        top.opener.document.getElementById("porcento").innerHTML = '<img src="'+url+'" id="previewImage" width="'+width+'" height="'+height+'">';
        top.opener.insertImg();
        window.close();
    }else{
        console.log("selecione uma imagem e Clique no botão Carregar e visualizar antes de inserir")
    }*/
    //top.opener.document.getElementById("porcento").innerHTML = "UHUUUUUUUUUUUUUUUUUUU"
    //top.opener.insertImg();
}

function cancel(){
    window.close();
}
//var dados = JSON.stringify($('input').val());
//sessionStorage.setItem('chave', dados );
