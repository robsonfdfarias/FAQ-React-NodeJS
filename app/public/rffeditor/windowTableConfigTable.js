var originChar = [['padding-box', 'Começar da margem da tabela'], ['border-box', 'Começar da borda da tabela'], ['content-box', 'Começar do limite da janela']];
var repeatChar = [['no-repeat', 'Não repetir'], ['repeat-y', 'Repetir na vertial'], ['repeat-x', 'Repetir na horizontal']];
console.log(localStorage.getItem('style'))
const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
}).join('');
// console.log(rgbToHex(255, 5, 255));
if(localStorage.getItem('style')!=null){
    let style = localStorage.getItem('style');
    let styleChar = style.split(';');
    let dirText = '';
    for(let i =0; i<styleChar.length; i++){
        let attrib = styleChar[i].split(':');
        console.log(attrib[0])
        if(attrib[0]==' background-image' || attrib[0]=='background-image'){
            let url = styleChar[i].split('(\'');
            url = url[1].split('\')');
            url=url[0];
            console.log(url)
            let divIm = document.getElementById('viewImage');
            divIm.innerHTML = '<img src="'+url+'" width="50" height="50">';
        }else if(attrib[0]==' background-position' || attrib[0]=='background-position'){
            let position = attrib[1].split(' ');
            //Alinhamento LEFT
            let leftAl=position[2].replace('px', '');
            console.log('Left: '+leftAl);
            document.getElementById('marginLeft').value = leftAl;
            //Alinhamento TOP
            let topAl=position[4].replace('px', '');
            console.log('Topo: '+topAl)
            document.getElementById('marginTop').value = topAl;
        }else if(attrib[0]==' background-size' || attrib[0]=='background-size'){
            let sizeImg = attrib[1].replace('%', '');
            sizeImg = sizeImg.replace(' ', '');
            console.log('SIze: '+sizeImg)
            document.getElementById('size').value = sizeImg;
        }else if(attrib[0]==' background-repeat' || attrib[0]=='background-repeat'){
            let repeat = attrib[1].replace(' ', '');
            console.log('repeat: '+repeat)
            let nomeRep = '';
            for(let i=0; i<repeatChar.length; i++){
                if(repeatChar[i][0]==repeat){
                    nomeRep = repeatChar[i][1];
                }
            }
            let option = new Option('-> Atual - '+nomeRep, repeat);
            option.setAttribute('selected', 'selected');
            document.getElementById('repeatImage').add(option);
        }else if(attrib[0]==' background-origin' || attrib[0]=='background-origin'){
            let origin = attrib[1].replace(' ', '');
            console.log('Origin: '+origin);
            let nomeOrig = '';
            for(let i=0; i<originChar.length; i++){
                if(originChar[i][0]==origin){
                    nomeOrig = originChar[i][1];
                }
            }
            let option2 = new Option('-> Atual - '+nomeOrig, origin);
            option2.setAttribute('selected', 'selected');
            document.getElementById('originImage').add(option2);
        }else if(attrib[0]==' opacity' || attrib[0]=='opacity'){
            let opacity = attrib[1].replace(' ', '');
            opacity = opacity.replace('px', '');
            document.getElementById('opacity').value = opacity;
        }
    }
    if(dirText!=''){
        let option = new Option('Opção atual', dirText);
        option.setAttribute('selected', 'selected');
        document.getElementById('textDirection').add(option);
    }
}
document.getElementById('size').addEventListener('input', function(){
    let valor = document.getElementById('size').value;
    if(valor == 0 && valor == '0'){
        valor = 'contain';
    }else{
        valor +='%';
    }
    document.getElementById('valueSize').innerHTML = '<strong>'+valor+'</strong>';
})
document.getElementById('marginLeft').addEventListener('input', function(){
    let valor = document.getElementById('marginLeft').value;
    if(valor == 0 && valor == '0'){
        valor = '0px';
    }else{
        valor +=' px';
    }
    document.getElementById('valueMarginLeft').innerHTML = '<strong>'+valor+'</strong>';
})
document.getElementById('marginTop').addEventListener('input', function(){
    let valor = document.getElementById('marginTop').value;
    if(valor == 0 && valor == '0'){
        valor = '0px';
    }else{
        valor +=' px';
    }
    document.getElementById('valueMarginTop').innerHTML = '<strong>'+valor+'</strong>';
})

document.getElementById('opacity').addEventListener('input', function(){
    let valor = document.getElementById('opacity').value;
    // if(valor == 0 && valor == '0'){
    //     valor = '0px';
    // }else{
    //     valor +=' px';
    // }
    document.getElementById('valueOpacity').innerHTML = '<strong>'+valor+'</strong>';
})
function insertConfig(){

    let divImg = document.getElementById('viewImage');
    if(divImg.innerHTML==''){
        alert('Nenhuma imagem selecionada. Selecione uma imagem ou clique em cancelar.')
        return false;
    }
    let img = divImg.children[0];
    if(img.src!='' && img.src!=null && img.src!='undefined'){
        let size = document.getElementById('size').value;
        size=size+'%';
        let repeatImage = document.getElementById('repeatImage').value;
        let originImage = document.getElementById('originImage').value;
        let marginLeft = document.getElementById('marginLeft').value;
        marginLeft='left '+marginLeft+'px';
        let marginTop = document.getElementById('marginTop').value;
        marginTop='top '+marginTop+'px';
        let opacity = document.getElementById('opacity').value;
        opacity=opacity/10;
        opacity='opacity '+opacity+'px';
        if(size==0 && size=='0'){
            size = 'contain';
        }
        let config = 'url(\''+img.src+'\')@-@'+marginLeft+' '+marginTop+'@-@'+size+'@-@'+repeatImage+'@-@'+originImage+'@-@'+opacity;
        console.log(config)
        top.opener.configBackgroundTable(config);
        localStorage.setItem('style', null);
        window.close();
    }
}
function removeConfig(){
    let remove = 'limpar';
    top.opener.configBackgroundTable(remove);
        localStorage.setItem('style', null);
    window.close();
}