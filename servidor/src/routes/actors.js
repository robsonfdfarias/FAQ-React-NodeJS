const {Router} = require('express');
const querys = require('../allItems');
const multer = require('multer');
// const cors = require('cors');
const fs = require('fs')
const { mkdir } = require('node:fs/promises');



const storage = multer.diskStorage({
    destination: async function (req, file, cb){
        const dt = new Date();
        const pasta = '/'+dt.getFullYear()+'/'+dt.getMonth()+'/'+dt.getDay();
        await mkdir('./public/upload'+pasta, { recursive: true });
        cb(null, './public/upload'+pasta);
    },
    filename: function (req, file, cb){
        const extensaoArquivo = file.originalname.split('.')[1];
        // const nomeArquivo = file.originalname.split('.')[0];
        const data = Date.now();
        console.log(data);
        // const novoNome = require('crypto').randomBytes(64).toString('hex');
        cb(null, `${data}.${extensaoArquivo}`);
    }
})
const upload = multer({storage});

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
    console.log(id)
    const query = await querys.getNewsById(id);
    console.log('pesquisa por ID')
    console.log(query)
    if(query.length === 0){
        return res.status(400).json({message: 'Actor not found'});
    }
    return res.status(200).json(query);
});

router.post('/numberAllQuestions', async (req, res) => {
    const {idCategoria} = req.body;
    const query = await querys.getNumberOfAllCommonQuestions();
    console.log('Quantidade de registros: '+query);
    console.log(query)
    if(query.length>0){
        return res.status(200).json(query);
    }else{
        return res.status(400).json({'Erro': 'Houve um problema na consulta do numberAllQUestions'});
    }
})

router.post('/commonQuestions', async (rec, res) => {
    const {id, page} = rec.body;
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
});

router.post('/returnAllCategories', async (req, res) => {
    const query = await querys.returnAllCategories();
    console.log(query);
    if(query.length>0){
        return res.status(200).json(query);
    }else{
        return res.status(400).json({'retorno': 'Nenhum registro encontrado'});
    }
});

router.post('/returnAllCommonQuestions', async (req, res) => {
    const {idCategoria} = req.body;
    console.log("Id da categoria: "+idCategoria);
    console.log("Função returnAllCommonQuestions");
    const query = await querys.returnAllCommonQuestions(idCategoria);
    if(query>0){
        return res.status(200).json([{"NumReg": query}]);
    }else{
        return res.status(400).json({'NumReg': 'Nenhum registro encontrado'})
    }
});

router.post('/returnAllCommonQuestionsForCategoryById', async (req, res) => {
    const {idCategoria, page, numberOfRecords} = req.body;
    console.log("Id da categoria: "+idCategoria);
    console.log("Página: "+page);
    console.log("Número de registro: "+numberOfRecords);
    console.log("função returnAllCommonQuestionsForCategoryById");
    const query = await querys.returnAllCommonQuestionsForCategoryById(idCategoria, page, numberOfRecords);
    console.log(query)
    if(query.length>0){
        return res.status(200).json(query);
    }else{
        return res.status(400).json({'retorno': 'Nenhum registro encontrado'})
    }
});

router.post('/getNumberCommonQuestionPesq', async (req, res) => {
    const {idCategoria} = req.body;
    console.log("Pesquisa: "+idCategoria);
    const query = await querys.getNumberCommonQuestionPesq(idCategoria);
    if(query>0){
        return res.status(200).json([{"NumReg": query}]);
    }else{
        return res.status(400).json({'NumReg': 'Nenhum registro encontrado'});
    }
});

router.post('/getCommonQuestionPesq', async (req, res) => {
    const {idCategoria, page, numberOfRecords} = req.body;
    console.log('Pesquisa: '+idCategoria);
    console.log('Página: '+page);
    console.log('Número de registros: '+numberOfRecords);
    const query = await querys.getCommonQuestionPesq(idCategoria, page, numberOfRecords);
    // console.log(query);
    if(query.length>0){
        return res.status(200).json(query);
    }else{
        return res.status(400).json({'retorno': 'Nenhum registro encontrado'})
    }
});

router.post('/getAutorById', async (req, res) => {
    const {id} = req.body;
    console.log('O ID pesquisado foi: '+id);
    const query = await querys.getAutorById(id);
    console.log(query);
    if(query.length>0){
        return res.status(200).json(query);
    }else{
        return res.status(400).json({'retorno': 'Nenhum registro encontrado'});
    }
});

router.post('/returnCategoryById', async (req, res) => {
    const {id} = req.body;
    console.log('O ID da categoria pesquisada foi: '+id);
    const query = await querys.returnCategoryById(id);
    if(query.length>0){
        return res.status(200).json(query);
    }else{
        return res.status(400).json({'retorno': 'Nenhum registro encontrado'});
    }
});

router.post('/logar', async (req, res) => {
    const {email, password} = req.body;
    console.log('email: '+email)
    console.log('senha: '+password);
    const query = await querys.logar(email, password);
    // console.log(query)
    if(query.length>0){
        return res.status(200).json(query);
    }else{
        return res.status(400).json({'id': false});
    }
});

router.post('/getAdmNewsPage', async (req, res) => {
    const {page, numberOfRecords} = req.body;
    console.log('Início do getAdmNewsPage');
    console.log('Página: '+page);
    console.log('Número de registros: '+numberOfRecords);
    const query = await querys.getAdmNewsPage(page, numberOfRecords);
    if(query.length>0){
        return res.status(200).json(query);
    }else{
        return res.status(400).json({'id': false});
    }
});

router.post('/getNumberNews', async (req, res) => {
    const query = await querys.getNumberNews();
    console.log('Quantidade de registros: '+query);
    return res.status(200).json({'NumReg': query});
});

router.post('/upload', upload.array('file'), async (req, res) => {
    console.log('Files received: '+req.files.length);
    res.send({
        upload: true,
        files: req.files,
    });
});

router.post('/getImages', (req, res) => {
    var { pasta } = req.body;
    console.log('A pasta escolhida foi: '+pasta);
    // const filenames = fs.readdirSync('./public/upload')
    if(pasta!=undefined && pasta!=null){
        pasta = './public/upload/'+pasta;
    }else{
        pasta = './public/upload';
    }
    const filenames = fs.readdirSync(pasta);
    console.log('acessando as imagens');
    console.log(filenames);
    res.status(200).json(filenames);
});


const emotions = require('../getEmotions');
router.get('/getEmotions', (req, res) => {
    const filenames = emotions.getEmotions();
    console.log('acessando as emotion');
    res.status(200).json(filenames);
});

router.post('/insertNews', async (req, res) => {
    const {titulo, resumo, autor, datacad, conteudo, statusNews} = req.body;
    const query = await querys.insertNews(titulo, resumo, autor, datacad, conteudo, statusNews);
    if(query){
        return res.status(200).json({retorno: true});
    }else{
        return res.status(200).json({retorno: true});
    }
});

router.post('/getNumberPerg', async (req, res) => {
    const query = await querys.getNumberPerg();
    // console.log('Quantidade de registros: '+query);
    return res.status(200).json({'NumReg': query});
});

router.post('/getAdmPergPage', async (req, res) => {
    const {page, numberOfRecords} = req.body;
    // console.log('Início do getAdmPergPage');
    // console.log('Página: '+page);
    // console.log('Número de registros: '+numberOfRecords);
    const query = await querys.getAdmPergPage(page, numberOfRecords);
    if(query.length>0){
        return res.status(200).json(query);
    }else{
        return res.status(400).json({'id': false});
    }
});

router.post('/insertPerg', async (req, res) => {
    const {titulo, resumo, conteudo, tags, img, prioridade, categoria, dataPost} = req.body;
    const query = querys.insertPerg(titulo, resumo, conteudo, tags, img, prioridade, categoria, dataPost);
    if(query){
        return res.status(200).json({retorno: true});
    }else{
        return res.status(400).json({retorno: false});
    }
});

router.post('/updateNews', async (req, res) => {
    const {id, titulo, resumo, conteudo, statusNews} = req.body;
    // console.log('_________________________***********-----------')
    const query = await querys.updateNews(id, titulo, resumo, conteudo, statusNews);
    if(query.affectedRows>0){
        return res.status(200).json({retorno: true});
    }else{
        return res.status(400).json({retorno: false});
    }
});

router.delete('/delNewsGetById', async (req, res) => {
    const {id} = req.body;
    const query = await querys.delNewsGetById(id);
    if(query.affectedRows>0){
        return res.status(200).json({retorno: true});
    }else{
        return res.status(400).json({retorno: false});
    }
});

router.get('/getCommonQuestionById/:id', async (req, res) => {
    const {id} = req.params;
    const query = await querys.getCommonQuestionById(id);
    if(query.length>0){
        return res.status(200).json(query);
    }else{
        return res.status(400).json([{'id': false}]);
    }
});

router.post('/updateCommonQuestion', async (req, res) => {
    const {id, titulo, resumo, conteudo, tags, img, prioridade, categoria, dataPost, dataAlter} = req.body;
    const query = await querys.updateCommonQuestion(id, titulo, resumo, conteudo, tags, img, prioridade, categoria, dataPost, dataAlter);
    if(query.affectedRows>0){
        return res.status(200).json({retorno: true});
    }else{
        return res.status(400).json({retorno: false});
    }
});

router.post('/insertCommonQuestion', async (req, res) => {
    const {titulo, resumo, conteudo, tags, img, prioridade, categoria, dataPost} = req.body;
    const query = await querys.insertCommonQuestion(titulo, resumo, conteudo, tags, img, prioridade, categoria, dataPost);
    if(query.affectedRows>0){
        return res.status(200).json({retorno: true});
    }else{
        return res.status(400).json({retorno: false});
    }
});

router.delete('/deleteCommonQuestion', async (req, res) => {
    const {id} = req.body;
    const query = await querys.deleteCommonQuestion(id);
    if(query.affectedRows>0){
        return res.status(200).json({retorno: true});
    }else{
        return res.status(400).json({retorno: false});
    }
})


module.exports = router;