function configIfEditLink(){
    const link = localStorage.getItem('link');
    const target = localStorage.getItem('target');
    console.log(target)
    if(link != '' && link!=null && link!=undefined){
        let linkForm = document.getElementById('link');
        linkForm.value = link;
        const option = document.createElement('option');
        option.value = target;
        option.selected = true
        if(target=='_blank'){
            option.innerHTML = 'Atual -> Abrir em uma nova janela';
        }else{
            option.innerHTML = 'Atual -> Abrir na janela atual';
        }
        document.getElementById('targets').appendChild(option)
    }
}
configIfEditLink();
function inserirLink(){
    var link = document.getElementById("link");
    
    if(link != null && link != ''){
        var targets = document.getElementById("targets");
        if(targets!=null && targets.value=='_blank'){
            targets= ' target="'+targets.value+'"';
        }else{
            targets = ' target="_self"';
        }
        top.opener.link(link.value, targets);
        window.close();
    }else{
        console.log("selecione uma imagem e Clique no botão Carregar e visualizar antes de inserir")
    }
    //top.opener.document.getElementById("porcento").innerHTML = "UHUUUUUUUUUUUUUUUUUUU"
    //top.opener.insertImg();
    localStorage.removeItem('link')
    localStorage.removeItem('target')
}

function cancel(){
    localStorage.removeItem('link')
    localStorage.removeItem('target')
    window.close();
}
