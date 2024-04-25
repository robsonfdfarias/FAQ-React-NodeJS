import PerguntasPaginator from "./PerguntasPaginator"

function PesquisarContent(props){
    return (
        <div>
            <div>
                <h2>Você pesquisou por: <span style={{color: "#0c582c"}}>{props.idCategoria}</span></h2>
            </div>
            <PerguntasPaginator
                idCategoria={props.idCategoria}
                page={props.page}
                numberOfRecords={props.numberOfRecords}
                urlPergQuery={props.urlPergQuery}
                urlPergPaginator={props.urlPergPaginator}
            />
        </div>
    )
}

export default PesquisarContent