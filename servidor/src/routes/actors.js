const {Router} = require('express');
const querys = require('../allItems');

const router = Router();

router.get('/', async (req, res) => {
    const query = await querys.allItems();
    return res.status(200).json(query);
});

router.get('/news/', async (req, res) => {
    console.log('Entrou na função')
    const query = await querys.returnRecentNews();
    return res.status(200).json(query);
});

router.get('/news/:id', async (req, res) => {
    const {id} = req.params;
    const query = await querys.getNewsById(id);
    console.log('pesquisa por ID')
    if(query.length === 0){
        return res.status(400).json({message: 'Actor not found'});
    }
    return res.status(200).json(query);
});

router.get('/numberAllQuestions', async (req, res) => {
    const query = await querys.getNumberOfAllCommonQuestions();
    console.log('Quantidade de registros: '+query);
    if(query.length>0){
        return res.status(200).json(query);
    }else{
        return res.status(400).json({'Erro': 'Houve um problema na consulta...'});
    }
})

router.post('/commonQuestions', async (rec, res) => {
    const page = rec.body.page;
    const numberOfRecords = rec.body.numberOfRecords;
    const query = await querys.paginateCommonQuestions(page, numberOfRecords);
    if(query.length===0){
        return res.status(400).json({message: 'Actor not found Questions'});
    }else{
        return res.status(200).json(query);
    }
});

router.post('/getTreiningByDay', async (req, res) => {
    const {year, month, day} = req.body;
    console.log(year+'-'+month+'-'+day)
    const query = await querys.getTreiningByDay(day, month, year);
    if(query.length>0){
        return res.status(200).json(query);
    }else{
        return res.status(400).json({'titulo': false});
    }
});

router.post('/getTreiningBymonth', async (req, res) => {
    const {year, month} = req.body;
    console.log(year+'-'+month);
    const query = await querys.getTreiningBymonth(year, month);
    // console.log(query)
    if(query.length>0){
        return res.status(200).json(query);
    }else{
        return res.status(400).json({'Error': 'Nenhum registro nesse mes'});
    }
});

router.post('/getTreiningByDate', async (req, res) => {
    const {data} = req.body;
    const query = await querys.getTreiningByDate(data);
    console.log('Chegou aqui no getTreiningByDate');
    if(query.length>0){
        return res.status(200).json(query);
    }else{
        return res.status(400).json({'titulo': 'Nenhum evento para essa data...'});
    }
});

router.post('/getAvailableVacanciesToTreining', async (req, res) => {
    const {id} = req.body;
    const query = await querys.getAvailableVacanciesToTreining(id);
    console.log('ID procurado: '+id);
    console.log(query)
    if(query.length>0){
        return res.status(200).json(query);
    }else{
        return res.status(400).json({'titulo': 0});
    }
});

router.post('/registerTreining', async (req, res) => {
    const {nome, secretaria, matricula, email, idevento} = req.body;
    const query = await querys.registerTreining(matricula, idevento, nome, secretaria, email);
    console.log(query);
    if(query){
        console.log('Inscrição efetuada com sucesso.');
        return res.status(200).json({'titulo': 'Inscrição efetuada com sucesso.'});
    }else{
        console.log('Usuário já inscrito nesta capacitação.');
        return res.status(400).json({'titulo': 'Usuário já inscrito nesta capacitação.'});
    }
});

router.get('/blockNextEvent', async (req, res) => {
    console.log('------------------')
    const query = await querys.blockNextEvent();
    console.log(query)
    if(query.length>0){
        return res.status(200).json(query);
    }else{
        return res.status(400).json({'retorno': 'Nenhum registro encontrado'});
    }
})


module.exports = router;