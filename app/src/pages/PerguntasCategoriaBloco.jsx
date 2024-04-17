function PerguntasCategoriaBloco(){
    return (
        // <div style={{minWidth: '200px'}}>
        //     <span style={{fontWeight: 'bold', fontSize:'1.5rem'}}>Categoria</span><br />
        //     Conhecendo a interface<br />
        //     Pagamentos<br />
        //     Geral<br />
        // </div>
        <div id="categoriaPergFreq" style={{display: 'block', minWidth: '222px'}}>
            <span id="tituloAcessoRapido"><strong>Categorias</strong></span><br />
            <a href="categoria.php?id=1">Conhecendo a interface</a>(4)<br />
            <a href="categoria.php?id=2">Pagamentos</a>(1)<br />
            <a href="categoria.php?id=3">Geral</a>(2)<br />
        </div>
    )
}

export default PerguntasCategoriaBloco