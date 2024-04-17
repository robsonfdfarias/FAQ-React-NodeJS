function Button({name, barra}){
    return (<span>
        <button>{name ? name : "Clique"}</button>
        { barra ?
            <span> - </span>
            :
            <span></span>
        }
         </span>)
}

export default Button