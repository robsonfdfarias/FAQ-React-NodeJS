function Sair(){
    const out = ()=>{
        localStorage.clear();
        window.location.href='/home'
    }
    return (
        <div>
            {out()} 
        </div>
    )
}

export default Sair