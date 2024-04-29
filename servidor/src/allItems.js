const connection = require('./connection');

const arrayMonth = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

var md5 = require('md5');

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

const getAutorById = async (id) => {
    const [query] = await connection.execute('SELECT * FROM base.usuarios WHERE id=?', [id]);
    return query;
}

const paginateCommonQuestions = async (page, numberOfRecords) => {
    const regBegin = page*numberOfRecords;
    const [query] = await connection.execute('SELECT * FROM base.artigo ORDER BY id DESC LIMIT ?, ?', [regBegin, numberOfRecords]);
    return query;
}

const getNumberOfAllCommonQuestions = async () => {
    const [query] = await connection.execute('SELECT COUNT(*) FROM base.artigo');
    console.log('------------------------------------------------')
    console.log(query)
    return [{"NumReg": query[0]['COUNT(*)']}];
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

const blockNextEvent = async () => {
    let dateCurrent = new Date();
    let dt = dateCurrent.getFullYear()+'-'+arrayMonth[(dateCurrent.getMonth()+1)]+'-'+dateCurrent.getDate();
    console.log(dt)
    const [query] = await connection.execute('SELECT * FROM base.agenda WHERE dtinicio >= ?', [dt]);
    return query;
}

const returnAllCategories = async () => {
    const [query] = await connection.execute('SELECT * FROM base.categoria');
    var listObjQuery = [];
    for(let i=0;i<query.length;i++){
        // console.log(query[i]);
        let objLineQuery = {"categoria": query[i], "NumReg": await returnAllCommonQuestions(query[i].id)};
        listObjQuery.push(objLineQuery);
    }
    return listObjQuery;
}

const returnAllCommonQuestions = async (categoria) => {
    const [query] = await connection.execute('SELECT COUNT(*) FROM base.artigo WHERE categoria = ?', [categoria]);
    // console.log(query[0]['COUNT(*)']);
    return query[0]['COUNT(*)'];
}

const returnAllCommonQuestionsForCategoryById = async (idCat, page, numberOfRecords) => {
    const [query] = await connection.execute('SELECT * FROM base.artigo WHERE categoria=? ORDER BY id DESC LIMIT ?, ?', [idCat, page, numberOfRecords]);
    return query;
}

const getNumberCommonQuestionPesq = async (pesq) => {
    const [query] = await connection.execute('SELECT COUNT(*) FROM base.artigo WHERE titulo like ? OR conteudo like ? OR resumo like ?', [('%'+pesq+'%'), ('%'+pesq+'%'), ('%'+pesq+'%')]);
    console.log(query);
    return query[0]['COUNT(*)'];
}

const getCommonQuestionPesq = async (pesq, page, numberOfRecords) => {
    const [query] = await connection.execute('SELECT * FROM base.artigo WHERE  titulo like ? OR conteudo like ? OR resumo like ? ORDER BY id DESC LIMIT ?, ?', [('%'+pesq+'%'), ('%'+pesq+'%'), ('%'+pesq+'%'), page, numberOfRecords]);
    // console.log(query);
    return query;
}

const returnCategoryById = async (id) => {
    const [query] = await connection.execute('SELECT * FROM base.categoria WHERE id=?', [id]);
    return query;
}

const logar = async (email, password) => {
    const [query] = await connection.execute('SELECT * FROM base.usuarios WHERE email=? AND senha=?', [email, md5(password)]);
    return query;
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
    registerTreining,
    blockNextEvent,
    returnAllCategories,
    returnAllCommonQuestions,
    returnAllCommonQuestionsForCategoryById,
    getNumberCommonQuestionPesq,
    getCommonQuestionPesq,
    getAutorById,
    returnCategoryById,
    logar
};