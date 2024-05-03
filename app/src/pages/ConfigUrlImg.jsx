export function ConfigUrlImg(folder){
    const url = window.location.href;
    const urlPartes = url.split('/');
    var urlImage;
    if(urlPartes[5]!=''){
        urlImage = '../../../'+folder;
    }else if(urlPartes[4]!=''){
        urlImage = '../../'+folder;
    }else if(urlPartes[3]!=''){
        urlImage = '../'+folder;
    }else{
        urlImage = './'+folder;
    }
    return urlImage;
}