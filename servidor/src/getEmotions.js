const fs = require('fs');
function getEmotions(){
    const pasta = './public/emotions';
    const files = fs.readdirSync(pasta);
    var pastas = [];
    for(let i=0; i<files.length; i++){
        const partes = files[i].split('.');
        let filesDir = [];
        if(partes[1]==undefined || partes[1]==null || partes[1]==''){
            const pastaInterna = fs.readdirSync(pasta+'/'+files[i]);
            filesDir=pastaInterna;
        }else{
            continue;
        }
        pastas.push({pasta: files[i], files: filesDir})
    }
    return pastas;
}

module.exports = {
    getEmotions
}