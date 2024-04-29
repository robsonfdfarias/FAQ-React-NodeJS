function criptRff(texto){
   if(texto=='' || texto==undefined){
      return false;
   }
     let key = {
        'a': '0',
        'á': '1',
        'à': '2',
        'â': '3',
        'ã': '4',
        'b': '5',
        'c': '6',
        'd': '7',
        'e': '8',
        'é': '9',
        'è': 'a',
        'ê': 'b',
        'ẽ': 'c',
        'f': 'd',
        'g': 'e',
        'h': 'f',
        'i': 'g',
        'í': 'h',
        'ì': 'i',
        'î': 'j',
        'ĩ': 'k',
        'j': 'l',
        'k': 'm',
        'l': 'n',
        'm': 'o',
        'n': 'p',
        'o': 'q',
        'ó': 'r',
        'ò': 's',
        'ô': 't',
        'õ': 'u',
        'p': 'v',
        'q': 'w',
        'r': 'x',
        's': 'y',
        't': 'z',
        'u': '-',
        'ú': '*',
        'ù': '+',
        'û': '.',
        'ũ': '=',
        'v': '!',
        'w': '@',
        'x': '#',
        'y': '$',
        'z': '%',
        '0': '&',
        '1': '*',
        '2': '<',
        '3': '>',
        '4': '?',
        '5': '§',
        '6': '_',
        '7': '¢',
        '8': '¬',
        '9': '£',
        '!': 'º',
        '@': 'ª',
        '#': '°',
        '$': '¹',
        '.': '²',
        '_': '³',
        '-': '|',
        ' ': '58'
     }
     let cripto = '';
     texto = texto.toLowerCase();
     for(let i=0;i<texto.length;i++){
         cripto+=key[texto[i]];
         if(texto.length<35){
            if(i%3==0){
               // console.log(texto)
               if((i+10)<Object.keys(key).length){
                  if(texto.length>28 && i%12==0){
                     // console.log('......................')
                     if(cripto.length<30){
                        cripto+=Object.keys(key)[(i+5)];
                     }
                  }else if(texto.length>24 && texto.length<29 && i%9==0){
                     if(cripto.length<30){
                        // console.log('kjdbkjad')
                        cripto+=Object.keys(key)[(i+5)];
                        cripto+=Object.keys(key)[(i+8)];
                        cripto+=Object.keys(key)[(i+1)];
                     }
                  }else if(texto.length>21 && texto.length<25 && i%6==0){
                     if(cripto.length<30){
                        cripto+=Object.keys(key)[(i+5)];
                        cripto+=Object.keys(key)[(i+8)];
                        cripto+=Object.keys(key)[(i+3)];
                        cripto+=Object.keys(key)[(i+4)];
                     }
                  }else if(texto.length>18 && texto.length<22){
                     if(cripto.length<30){
                        cripto+=Object.keys(key)[(i+5)];
                        cripto+=Object.keys(key)[(i+8)];
                        cripto+=Object.keys(key)[(i+3)];
                        cripto+=Object.keys(key)[(i+1)];
                        cripto+=Object.keys(key)[(i+8)];
                        cripto+=Object.keys(key)[(i+3)];
                     }
                  }else if(texto.length>15 && texto.length<19){
                     if(cripto.length<30){
                        cripto+=Object.keys(key)[(i+5)];
                        cripto+=Object.keys(key)[(i+8)];
                        cripto+=Object.keys(key)[(i+3)];
                        cripto+=Object.keys(key)[(i+1)];
                        cripto+=Object.keys(key)[(i+8)];
                        cripto+=Object.keys(key)[(i+3)];
                     }
                  }else if(texto.length>12 && texto.length<16){
                     if(cripto.length<30){
                        cripto+=Object.keys(key)[(i+5)];
                        cripto+=Object.keys(key)[(i+8)];
                        cripto+=Object.keys(key)[(i+3)];
                        cripto+=Object.keys(key)[(i+1)];
                        cripto+=Object.keys(key)[(i+9)];
                        cripto+=Object.keys(key)[(i+7)];
                        cripto+=Object.keys(key)[(i+5)];
                        cripto+=Object.keys(key)[(i+3)];
                        cripto+=Object.keys(key)[(i+1)];
                     }
                  }else if(texto.length>9 && texto.length<13){
                     if(cripto.length<30){
                        cripto+=Object.keys(key)[(i+5)];
                        cripto+=Object.keys(key)[(i+8)];
                        cripto+=Object.keys(key)[(i+3)];
                        cripto+=Object.keys(key)[(i+1)];
                        cripto+=Object.keys(key)[(i+9)];
                        cripto+=Object.keys(key)[(i+7)];
                        cripto+=Object.keys(key)[(i+5)];
                        cripto+=Object.keys(key)[(i+8)];
                        cripto+=Object.keys(key)[(i+3)];
                        cripto+=Object.keys(key)[(i+7)];
                        cripto+=Object.keys(key)[(i+5)];
                        cripto+=Object.keys(key)[(i+7)];
                        cripto+=Object.keys(key)[(i+5)];
                     }
                  }else if(texto.length>6 && texto.length<10){
                     if(cripto.length<30){
                        cripto+=Object.keys(key)[(i+5)];
                        cripto+=Object.keys(key)[(i+8)];
                        cripto+=Object.keys(key)[(i+3)];
                        cripto+=Object.keys(key)[(i+1)];
                        cripto+=Object.keys(key)[(i+9)];
                        cripto+=Object.keys(key)[(i+7)];
                        cripto+=Object.keys(key)[(i+5)];
                        cripto+=Object.keys(key)[(i+8)];
                        cripto+=Object.keys(key)[(i+3)];
                        cripto+=Object.keys(key)[(i+1)];
                        cripto+=Object.keys(key)[(i+7)];
                        cripto+=Object.keys(key)[(i+5)];
                        cripto+=Object.keys(key)[(i+7)];
                        cripto+=Object.keys(key)[(i+5)];
                     }
                  }else if(texto.length>3 && texto.length<7){
                     if(cripto.length<30){
                        cripto+=Object.keys(key)[(i+5)];
                        cripto+=Object.keys(key)[(i+8)];
                        cripto+=Object.keys(key)[(i+3)];
                        cripto+=Object.keys(key)[(i+1)];
                        cripto+=Object.keys(key)[(i+9)];
                        cripto+=Object.keys(key)[(i+7)];
                        cripto+=Object.keys(key)[(i+5)];
                        cripto+=Object.keys(key)[(i+8)];
                        cripto+=Object.keys(key)[(i+9)];
                        cripto+=Object.keys(key)[(i+7)];
                        cripto+=Object.keys(key)[(i+3)];
                        cripto+=Object.keys(key)[(i+1)];
                        cripto+=Object.keys(key)[(i+9)];
                        cripto+=Object.keys(key)[(i+8)];
                        cripto+=Object.keys(key)[(i+3)];
                        cripto+=Object.keys(key)[(i+1)];
                        cripto+=Object.keys(key)[(i+3)];
                        cripto+=Object.keys(key)[(i+1)];
                     }
                  }else if(texto.length>0 && texto.length<4){
                     if(cripto.length<30){
                        cripto+=Object.keys(key)[(i+5)];
                        cripto+=Object.keys(key)[(i+8)];
                        cripto+=Object.keys(key)[(i+3)];
                        cripto+=Object.keys(key)[(i+1)];
                        cripto+=Object.keys(key)[(i+9)];
                        cripto+=Object.keys(key)[(i+8)];
                        cripto+=Object.keys(key)[(i+3)];
                        cripto+=Object.keys(key)[(i+7)];
                        cripto+=Object.keys(key)[(i+5)];
                        cripto+=Object.keys(key)[(i+8)];
                        cripto+=Object.keys(key)[(i+3)];
                        cripto+=Object.keys(key)[(i+1)];
                        cripto+=Object.keys(key)[(i+9)];
                        cripto+=Object.keys(key)[(i+7)];
                        cripto+=Object.keys(key)[(i+8)];
                        cripto+=Object.keys(key)[(i+3)];
                        cripto+=Object.keys(key)[(i+7)];
                        cripto+=Object.keys(key)[(i+5)];
                        cripto+=Object.keys(key)[(i+3)];
                        cripto+=Object.keys(key)[(i+1)];
                        cripto+=Object.keys(key)[(i+9)];
                        cripto+=Object.keys(key)[(i+8)];
                        cripto+=Object.keys(key)[(i+3)];
                        cripto+=Object.keys(key)[(i+7)];
                        cripto+=Object.keys(key)[(i+5)];
                        cripto+=Object.keys(key)[(i+3)];
                        cripto+=Object.keys(key)[(i+7)];
                        cripto+=Object.keys(key)[(i+5)];
                        cripto+=Object.keys(key)[(i+3)];
                        cripto+=Object.keys(key)[(i+1)];
                        cripto+=Object.keys(key)[(i+9)];
                        cripto+=Object.keys(key)[(i+5)];
                        cripto+=Object.keys(key)[(i+3)];
                        cripto+=Object.keys(key)[(i+1)];
                     }
                  }
               }
            }
         }
     }
     let clean = '';
     for(let j=0;j<35;j++){
      if(j<cripto.length){
         clean+=cripto[j];
      }
     }
   //   console.log('quanto é i%2? '+(5%3))
   //   console.log(cripto);
   //   console.log(clean);
   return clean;
}