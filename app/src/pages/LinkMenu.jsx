import { Link } from 'react-router-dom';


// function LinkMenu (props){
//     const [texto, setTexto] = useState(false);
//     const [active, setActive] = useState(false);

//     function handleActive(event){
//         event.preventDefault();
//         setActive(!active)
//     }

//     return (
//         <a onClick={(event) => handleActive(event)}>
//             <li style={active ? {backgroundColor: 'green'} : {backgroundColor: 'red'}}>
//                 {props.texto}
//                 {props.barra}
//             </li>
//         </a>
//     ) 
// }
function LinkMenu (props){
    let valor = false;

    function getURL(){
        let url = window.location.href;
        let parte = url.split('/');
        if(props.chave == parte[3]){
            valor=true;
        }else if(parte[3]=='' && props.chave=='home'){
            valor=true;
        }else{
            valor=false;
        }
    }
    getURL();
    return (
        <Link to={props.href}>
            <li>
                {props.texto}
                <div id={""+props.barraName} style={valor ? {height: '10px'} : {}}></div>
            </li>
        </Link>
    )
}

export default LinkMenu