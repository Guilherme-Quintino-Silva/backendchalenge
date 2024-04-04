const express = require("express");
const app = express();
const cors = require('cors');
const indexRoute = require('../src/routes/index');
const mongoose = require('mongoose');

const url = 'mongodb+srv://q5181641:0OUkRHL3Iz025eFI@cluster0.tg6zhvh.mongodb.net/';

mongoose.connect(url).then(() => {
    console.log('Conectado ao banco de dados...');
}).catch((error) => {
    console.log('Ops, houve algum erro... ' + error);
});

//indicar para o node express ler body com json.
app.use(express.json());

//Cors disabled.
app.use(cors());

app.use('/', indexRoute);

app.listen(3000, () => console.log('Server start at port 3000.'));

module.exports = app;
