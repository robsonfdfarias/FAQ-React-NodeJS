import PerguntasCategoriaBloco from "./PerguntasCategoriaBloco"
import PerguntasPaginator from "./PerguntasPaginator"

function PerguntasContent(props){
    return (
        <div id="itemdoisHome">
            <PerguntasCategoriaBloco />
            <PerguntasPaginator
                idCategoria={1}
                page={props.page}
                numberOfRecords={props.numberOfRecords}
                urlPergQuery={'http://localhost:3003/actors/commonQuestions'}
                urlPergPaginator={'http://localhost:3003/actors/numberAllQuestions'}
            />
        </div>
    )
}

export default PerguntasContent