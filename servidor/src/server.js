const express = require('express');
const allItems = require('./allItems');
const cors = require('cors');
const actors = require('./routes/actors');

var allowlist = ['http://localhost', 'http://localhost:5173/', 'http://127.0.0.1', 'http://127.0.0.1:5173/'];
var corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    console.log('Origem: '+req.header('Origin'))
    if (allowlist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true };// reflect (enable) the requested origin in the CORS response
    }else{
        corsOptions = { origin: false };// disable CORS for this request
    }
    corsOptions = {
                    origin: '*', // Wildcard is NOT for Production
                    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
                    credentials: true,
                }
    callback(null, corsOptions);// callback expects two parameters: error and options
}


const app = express();

app.use(express.json());

app.use('/actors', cors(corsOptionsDelegate), actors);

const PORT = 3003;

app.listen(3003, () => {console.log(`Funcionando na porta ${PORT}`)});


app.use(express.urlencoded({ extended: true }));

app.get('/', cors(corsOptionsDelegate), async (req, res) => {
    console.log('Funcionando até aqui');
    const query = await allItems.allItems2();
    return res.status(200).json(query);
});