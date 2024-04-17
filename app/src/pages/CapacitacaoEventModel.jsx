function CapacitacaoEventModel(props){
    var status = props.status;
    console.log(status+'---------------------')
    if(status==''){
        status = false;
    }
    const verifyDate = (date) => {
        let dd = date.split('-');
        const arrayMonth = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        let data = new Date();
        if(dd[0]>=data.getFullYear()){
            if(dd[1]>=data.getMonth()){
                if(dd[2]>=data.getDate()){
                    return true;
                }
            }
        }
        return false;
    }
    return (
        <div>
            {status?<h3>{status}</h3>:
                <div id="divEventDayList">
                    <div id="titleEventDayCurrent" style={{fontWeight: 'bold'}}> {props.titulo} </div>
                    {/* <div id="descriptionEventDayCurrent">Local: <a href="evento.php?dt=2024-05-30">{props.localEvent} -&gt;</a></div> */}
                    <div id="descriptionEventDayCurrent">Local: {verifyDate(props.dtinicio)?<a href={"/evento/"+props.dtinicio}>{props.localEvent} -&gt;</a>:props.localEvent} </div>
                    <div id="timeEventDayCurrent">Horário: {props.horainicio} às {props.horafim} </div>
                </div>
            }
        </div>
    )
}

export default CapacitacaoEventModel