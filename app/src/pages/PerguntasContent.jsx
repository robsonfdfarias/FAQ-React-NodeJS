import PerguntasCategoriaBloco from "./PerguntasCategoriaBloco"
import PerguntasPaginator from "./PerguntasPaginator"

function PerguntasContent(props){
    return (
        <div id="itemdoisHome">
            <PerguntasCategoriaBloco />
            <PerguntasPaginator
                page={props.page}
                numberOfRecords={props.numberOfRecords}
            />
        </div>
    )
}

export default PerguntasContent