import './TopoTitulo.css';
function TopoTitulo(props){
    if(props.titulo=='Home'){
        return (
            <div id="geralTopo" style={{backgroundColor: '#0c582c', color: '#fff'}}>
                    <table id="tabTop">
                        <tbody><tr>
                            <td><img src={"logo_sei_93x60.png"} alt="Logo SEI" style={{marginRight: '20px'}} /></td>
                            <td style={{textAlign: 'left'}}><span style={{fontSize: '40px', fontWeight: 700}}>Sistema Eletrônico de Informações</span></td>
                        </tr>
                    </tbody></table>
            </div>
        ) 
    }
    return (
        <div id="geralTopo">
            <div id="topo">
                <div id="centroTop">
                    <div style={{fontSize: '40px', fontWeight: '700', lineHeight: '65px', marginTop: '-15px'}}>{props.titulo}</div>
                    {props.subtitulo?<div style={{marginTop: '0px'}}>{props.subtitulo}</div>:<span></span>}
                </div>
            </div>
        </div>
    )
}

export default TopoTitulo