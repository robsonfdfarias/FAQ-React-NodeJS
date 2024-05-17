
var folder = 'imagens';
// function getListFiles(files){
//     const xhttp = new XMLHttpRequest();
//     xhttp.onload=function(){
//         document.getElementById('lista').innerHTML = this.responseText;
//     }
//     xhttp.open("GET", "getListFiles.php?pasta="+files);
//     xhttp.send();
// }
// getListFiles(folder);
function clickFile(arquivo, files){
    //alert(files);
    if(arquivo=='pasta'){
        //pasta
        //alert(files)
        getListFiles(files);
    }else{
        //arquivo
        if(files!=null && files != '' && files != undefined){
            var imgDiv = top.opener.document.getElementById('porcento');
            // imgDiv.innerHTML = '<img src="'+folder+"/"+files+'" id="previewImage" width="300">';
            // imgDiv.innerHTML = '<img src="'+files+'" id="previewImage" width="300">';
            imgDiv.innerHTML = '<img src="'+files+'" id="imgSel" width="300">';
        }else{
            //se não existir nada em files
            alert("Não existe o arquivo");
        }
    }
    window.close();
    
}
