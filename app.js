//REQUIRE DO SERVER PARA DIRECIONAR AS ROTAS
var app = require('./config/server');

//ROTA PARA DIRECIONAR PARA HOME, E JÁ EXECUTA A FUNÇÃO RETORNADA
//var rotaHome = require('./app/routes/home')(app);
//EXECUTA FUNÇÃO EXPORTADA PELA ROTA
//rotaHome(app);

//ROTA PARA DIRECIONAR PARA NOTÍCIAS, E JÁ EXECUTA A FUNÇÃO RETORNADA
//var rotaNoticias = require('./app/routes/noticias')(app);
//EXECUTA FUNÇÃO EXPORTADA PELA ROTA
//rotaNoticias(app);

//ROTA PARA DIRECIONAR PARA INCLUSÃO NOTÍCIAS, E JÁ EXECUTA A FUNÇÃO RETORNADA
//var rotaInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);
//EXECUTA FUNÇÃO EXPORTADA PELA ROTA
//rotaInclusaoNoticia(app);

//SERVIDOR FICARÁ ESCUTANDO AS REQUISIÇÕES DA PORTA 8080
app.listen(8080, function(){
    console.log('Servidor ON');
    //console.log(msg);
});
