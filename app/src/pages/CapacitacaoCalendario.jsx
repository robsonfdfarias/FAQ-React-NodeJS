import { useEffect, useState } from "react";

function CapacitacaoCalendario(props){
    const [table, setTable] = useState([]);
    const [data, setData] = useState([]);
    const [urlPrevMonth, setUrlPrevMonth] = useState();
    const [urlNextMonth, setUrlNextMonth] = useState();
    const [urlPrevYear, setUrlPrevYear] = useState();
    const [urlNextYear, setUrlNextYear] = useState();
    const [treiningOfTheDay, setTreiningOfTheDay] = useState([]);
    var valor = [];
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];


    var teste=0;
    useEffect(()=>{
        // console.log('mes selecionado: '+(data[0]+1))
        fetch('http://localhost:3003/actors/getTreiningBymonth',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                year: data[1],
                month: (data[0]+1)
            })
        })
        .then(response => response.json())
        .then((json) => {
            if(teste<2) {
                valor = json;
                ++teste;
                if(teste==1){
                    getTab();
                }
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }, [])

    Date.prototype.diasNoMesCorrente = function(){
        var days = [30, 31];
        let m = this.getMonth();
        if(m==1){
            return ((this.getFullYear() % 4 == 0) && ((this.getFullYear() % 100 != 0) || this.getFullYear() % 400 == 0)) ? 29 : 28;
        }else{
            return days[( m + ( m < 7 ? 1 : 0)) % 2];
        }
    }
    const calendario = () => {
        let vd = new Date();
        // console.log('Mes: '+(props.month-1)+' - Ano: '+props.year+' - Mes atual: '+vd.getMonth())
        var dataAtual, currentDay, currentMonth, currentYear, daysOfMonth, dayOfWeek, dayReturn;
        if(props.month!=undefined && props.year!=undefined){
            dayReturn = props.day!=undefined?props.day:0;
            dataAtual = new Date(props.year, (props.month-1), 1);
            // let daysOfMonth = dataAtual.diasNoMesCorrente();
            currentDay = dayReturn;
            currentMonth = dataAtual.getMonth();
            currentYear = dataAtual.getFullYear();
            daysOfMonth = numberOfDaysOfMonth(currentMonth, currentYear);
            dayOfWeek = dataAtual.getDay();
            // console.log('Entrou aqui....')
        }else{
            dataAtual = new Date();
            // let daysOfMonth = dataAtual.diasNoMesCorrente();
            currentDay = dataAtual.getDate();
            currentMonth = dataAtual.getMonth();
            currentYear = dataAtual.getFullYear();
            daysOfMonth = numberOfDaysOfMonth(currentMonth, currentYear);
            dayOfWeek = new Date(1, currentMonth, currentYear).getDay();
        }
        let table = document.createElement('table');
        let tbody = document.createElement('tbody');
        let tr = document.createElement('tr');
        let nameDaysWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
        for(let d=0;d<7;d++){
            let td = document.createElement('td');
            td.setAttribute('style', 'background-color: #fff; color: #000; cursor:default;');
            td.innerHTML = nameDaysWeek[d];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
        let testa = 0;
        let days=1;
        let print = true;
        for(let j=1; j<=5; j++){
            if(days==daysOfMonth){
                continue;
            }
            let tr = document.createElement('tr');
            for(let i=1; i<=7; i++){
                if(testa<dayOfWeek){
                    let td = document.createElement('td');
                    td.setAttribute('style', 'background-color: #fff; cursor:default;');
                    tr.appendChild(td);
                    testa++;
                    // i=0;
                    continue;
                }
                if(days<=daysOfMonth){
                    if(i==1 || i==7){
                        let td = document.createElement('td');
                        td.setAttribute('style', 'background-color: #fff; color: #cdcdcd; cursor:default;');
                        if(vd.getDate()==days && vd.getMonth()==currentMonth && vd.getFullYear()==currentYear){
                            td.style.backgroundColor = '#0c582c';
                            td.children[0].style.color = '#ffffff';
                        }
                        if(verifyCurrentDay(days, currentDay)){
                            td.style.backgroundColor = '#cdcdcd';
                            td.style.color = '#fff';
                        }
                        td.innerHTML = days;
                        tr.appendChild(td);
                    }else{
                        let a = document.createElement('a');
                        a.href = linkDate(days, (currentMonth+1), currentYear);
                        a.innerHTML = days;
                        let td = document.createElement('td');
                        td.appendChild(a)
                        if(vd.getDate()==days && vd.getMonth()==currentMonth && vd.getFullYear()==currentYear){
                            td.style.backgroundColor = '#0c582c';
                            td.children[0].style.color = '#ffffff';
                        }
                        if(verifyCurrentDay(days, currentDay)){
                            td.style.backgroundColor = '#cdcdcd';
                            td.children[0].style.color = '#ffffff';
                        }
                        tr.appendChild(td);
                    }
                }else{
                    let td = document.createElement('td');
                    td.setAttribute('style', 'background-color: #fff; cursor:default;');
                    tr.appendChild(td);
                }
                days++;
            }
            tbody.appendChild(tr);
        }
        table.appendChild(tbody);
        // console.log(table);
        let arr = [];
        let dtt = [];
        if(print){
            arr.push(table)
            setTable(arr);
            print=false;
            dtt.push(currentMonth);
            dtt.push(currentYear);
            setData(dtt);
            setUrlPrevYear(linkDate(0, (currentMonth+1), (currentYear-1)))
            setUrlNextYear(linkDate(0, (currentMonth+1), (currentYear+1)))
            let mm = (currentMonth+1);
            let aa = currentYear;
            if(currentMonth==0){
                mm=12;
                aa-=1;
            }else{
                mm-=1;
            }
            let mm2 = (currentMonth+1);
            let aa2 = currentYear;
            // console.log(currentMonth)
            if(currentMonth==11){
                mm2=1;
                aa2++;
            }else{
                mm2++;
            }
            setUrlPrevMonth(linkDate(0, mm, aa))
            setUrlNextMonth(linkDate(0, mm2, aa2))
        }
    }

    const verifyCurrentDay = (day, currentDay) => {
        if(currentDay == day){
            return true;
        }else{
            return false;
        }
    }


    const numberOfDaysOfMonth = (month, year)  => {
        var days = [30, 31];
        let m = month;
        if(m==1){
            return ((year % 4 == 0) && ((year % 100 != 0) || year % 400 == 0)) ? 29 : 28;
        }else{
            return days[( m + ( m < 7 ? 1 : 0)) % 2];
        }
    }

    const linkDate = (day, month, year) => {
        let currentDt = window.location.href;
        let parte = currentDt.split('/');
        let url = parte[0]+'/'+parte[1]+'/'+parte[2]+'/capacitacao/'+day+'/'+month+'/'+year;
        return url;
    }

    const getTab = () => {
        var arrayMonth = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        let tab = document.getElementById('calendar');
        let tbody = tab.children[0];
        for(let i=1; i<tbody.children.length; i++){
            var tr = tbody.children[i];
            for(let j=0; j<tr.children.length; j++){
                let td = tr.children[j];
                if(td.innerHTML!=''){
                    let content;
                    if(td.children[0]!=undefined){
                        let a = td.children[0];
                        // console.log(a.innerHTML)
                        content = a.innerHTML
                    }else{
                        // console.log(td.innerHTML)
                        content = td.innerHTML
                    }
                    let dd = (data[0]+1);
                    // console.log(arrayMonth[dd])
                    let d = data[1]+'-'+arrayMonth[dd]+'-'+content;
                    // console.log(d)
                    //     console.log(valor[0].dtinicio)
                    for(let r=0; r<valor.length; r++){
                        if(d==valor[r].dtinicio){
                            td.style.border = '2px solid green';
                        }
                    }
                    
                }else{
                    // console.log('vazio...'+j)
                }
            }
        }
    }

    // calendario();
    return (
        <div id="divCalendario">
            <div style={{display: 'row', textAlign: 'center', borderBottom: '1px solid #cdcdcd'}}>
                <span style={{padding: '0 5px', fontSize: '1.2rem', float: 'left'}}><a href={urlPrevYear}>{'<<'}</a></span>
                <span style={{padding: '0 5px', fontSize: '1.2rem', float: 'left'}}><a href={urlPrevMonth}>{'<'}</a></span>
                <span style={{fontSize: '1.2rem', fontWeight: 'bold', padding: '0 5px'}}>{meses[data[0]]+' de '+data[1]}</span>
                <span style={{padding: '0 5px', fontSize: '1.2rem', float: 'right'}}><a href={urlNextYear}>{'>>'}</a></span>
                <span style={{padding: '0 5px', fontSize: '1.2rem', float: 'right'}}><a href={urlNextMonth}>{'>'}</a></span>
            </div>
            <div>
                {table.length>0?<table id="calendar" dangerouslySetInnerHTML={{ __html: table[0].innerHTML }}></table>:calendario()}
                
            </div>
        </div>
    )
}

export default CapacitacaoCalendario