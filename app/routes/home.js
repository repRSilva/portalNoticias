//EXPORTA UMA FUNÇÃO PARA SER EXECUTADA
module.exports = function(app){
    //DIRECIONA A ROTA PARA A PÁGINA INDEX
    app.get('/', function(req, res){
        app.app.controllers.home.index(app,req,res);
    })
};
