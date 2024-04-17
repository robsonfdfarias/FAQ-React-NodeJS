const connection = require('./connection');

const allItems = async () => {
    const [query] = await connection.execute('SELECT * FROM apiJavascript.authors');
    return query;
};

const allItems2 = async () => {
    const [query] = await connection.execute('SELECT * FROM base.noticias');
    return query;
};

const getNewsById = async (id) => {
    const [query] = await connection.execute('SELECT * FROM base.noticias WHERE id=?', [id]);
    return query;
}

const returnRecentNews = async () => {
    const [query] = await connection.execute('SELECT * FROM base.noticias WHERE true=true ORDER BY id DESC LIMIT 3');
    return query;
}

const paginateCommonQuestions = async (page, numberOfRecords) => {
    const regBegin = page*numberOfRecords;
    const [query] = await connection.execute('SELECT * FROM base.artigo ORDER BY id DESC LIMIT ?, ?', [regBegin, numberOfRecords]);
    return query;
}

const getNumberOfAllCommonQuestions = async () => {
    const [query] = await connection.execute('SELECT COUNT(*) FROM base.artigo');
    return query;
}

const getTreiningByDay = async (day, month, year) => {
    const arrayMonth = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const data = (year+'-'+arrayMonth[month]+'-'+day);
    const [query] = await connection.execute('SELECT * FROM base.agenda WHERE dtinicio=?', [data]);
    return query;
}

const getTreiningBymonth = async (year, month) => {
    const arrayMonth = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const data = year+'-'+arrayMonth[month]+'-%';
    console.log(data)
    const [query] = await connection.execute('SELECT * FROM base.agenda WHERE dtinicio like ?', [data]);
    return query;
}

const getTreiningByDate = async (data) => {
    const [query] = await connection.execute('SELECT * FROM base.agenda WHERE dtinicio=?', [data]);
    return query;
}

const getAvailableVacanciesToTreining = async (idTreining) => {
    const [query] = await connection.execute('SELECT COUNT(*) FROM base.inscritos WHERE idevento=?', [idTreining]);
    return query;
}

const registerTreining = async (matricula, idEvento, nome, secretaria, email) => {
    var exists = false;
    //recupera a capacitação(Evento)
    const [queryTreining] = await connection.execute('SELECT * FROM base.inscritos WHERE idevento=?', [idEvento]);
    for(let i=0; i<queryTreining.length; i++){
        if(queryTreining[i].matricula==matricula){
            exists=true;
        }
    }
    if(exists){
        return false;
    }else{
        const [query] = await connection.execute('INSERT INTO base.inscritos (nome, secretaria, matricula, email, idevento) VALUES (?, ?, ?, ?, ?)', [nome, secretaria, matricula, email, idEvento]);
        console.log(query);
        return true;
    }
}


module.exports = {
    allItems, 
    allItems2, 
    getNewsById, 
    returnRecentNews, 
    paginateCommonQuestions, 
    getNumberOfAllCommonQuestions, 
    getTreiningByDay, 
    getTreiningBymonth, 
    getTreiningByDate, 
    getAvailableVacanciesToTreining,
    registerTreining
};