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
                        if(attrib[0]==' border' || attrib[0]=='border'){
                            let borderAtt = attrib[1].split(' ');
                            let exp = borderAtt[1].replace('px', '');
                            document.getElementById('expessura').value = exp;
                            let option = new Option(borderAtt[2]+' -> Atual', borderAtt[2]);
                            option.setAttribute('selected', 'selected');
                            document.getElementById('typeBorder').add(option);

                            let rr = borderAtt[3].split('(')[1];
                            rr= rr.replace(',', '');
                            let gg = borderAtt[4].replace(',', '');
                            let bb = borderAtt[5].replace(')', '');
                            document.getElementById('colorBorder').value = rgbToHex(parseInt(rr), parseInt(gg), parseInt(bb));
                            //
                        }
                        if(attrib[0]==' padding' || attrib[0]=='padding'){
                            let val = attrib[1].replace(' ', '');
                            val = val.replace('px', '');
                            // console.log(val)
                            document.getElementById('paddingBorder').value = val;
                        }
                        if(attrib[0]==' background-color' || attrib[0]=='background-color'){
                            let ops = attrib[1].split(' ');
                            let rr = '';
                            rr = ops[1].replace('rgb(', '');
                            rr = rr.replace(',', '');
                            let gg = ops[2].replace(',', '');
                            let bb = ops[3].replace(')', '');
                            console.log(rr+' - '+gg+' - '+bb)
                            document.getElementById('colorbackg').value = rgbToHex(parseInt(rr), parseInt(gg), parseInt(bb));
                        }
                        if(attrib[0]==' writing-mode' || attrib[0]=='writing-mode'){
                            dirText+= attrib[1].replace(' ', '');
                        }
                        if(attrib[0]==' text-orientation' || attrib[0]=='text-orientation'){
                            dirText+= attrib[1].replace(' ', '');
                        }
                    }
                    if(dirText!=''){
                        let option = new Option('Opção atual', dirText);
                        option.setAttribute('selected', 'selected');
                        document.getElementById('textDirection').add(option);
                    }
                }
                document.getElementById('paddingBorder').addEventListener('input', function(){
                    let valor = document.getElementById('paddingBorder').value;
                    if(valor == 0 && valor == '0'){
                        valor = 'Padrão';
                    }else{
                        valor +=' px';
                    }
                    document.getElementById('valorPadding').innerHTML = '<strong>'+valor+'</strong>';
                })
                function insertConfig(){
                    let paddingBorder = document.getElementById('paddingBorder').value;
                    let colorbackg = document.getElementById('colorbackg').value;
                    let textDirection = document.getElementById('textDirection').value;
                    let expessura = document.getElementById('expessura').value;
                    let corBorder = document.getElementById('colorBorder').value;
                    let typeBorder = document.getElementById('typeBorder').value;
                    let config = expessura+'px '+typeBorder+' '+corBorder;
                    if(paddingBorder==0 && paddingBorder=='0'){
                        paddingBorder = 'limpar';
                    }
                    if((expessura==0 && expessura=='0')){
                        config = 'limpar';
                    }
                    // alert(config)
                    top.opener.configBorderTdSel(config);
                    top.opener.configPaddingTdSel(paddingBorder);
                    top.opener.backGroundColorTdSel(colorbackg);
                    top.opener.rotateTdSel(textDirection);
                        localStorage.setItem('style', null);
                    window.close();
                }
                function removeConfig(){
                    let hex = 'limpar';
                    // alert(hex.innerHTML)
                    top.opener.configBorderTdSel(hex);
                    top.opener.configPaddingTdSel(hex);
                    top.opener.backGroundColorTdSel(hex);
                    top.opener.rotateTdSel(hex);
                        localStorage.setItem('style', null);
                    window.close();
                }