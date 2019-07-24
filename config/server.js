//INICIANDO SERVIDOR COM O EXPRESS
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator'); 
//INICIALIZANDO O EXPRESS
var app = express();
//UTILIZANDO A ENGINE EJS PARA RENDERIZAÇÃO DAS PÁGINAS HTML
app.set('view engine','ejs');
app.set('views','./app/views');

app.use(express.static('./app/public'));

//INCLUINDO BODY-PARSER
app.use(bodyParser.urlencoded({extended: true}));
//INCLUINDO EXPRESS VALIDATOR
app.use(expressValidator());

//INCLUINDO AS ROTAS COM O CONSIGN
consign()
    .include('app/routes')
    //.then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);
//EXPORTANDO MÓDULO SERVER PARA SER UTLIZADO NO MÓDULO APP DE ROTAS
module.exports = app;