//EXPORTA UMA FUNÇÃO PARA SER EXECUTADA
module.exports = function(app){
    //DIRECIONA A ROTA PARA A PÁGINA FORM_ADD_NOTICIA
    app.get('/formulario_inclusao_noticia', function(req, res){
        app.app.controllers.admin.formulario_inclusao_noticia(app,req,res);
    })

    //DIRECIONA A ROTA PARA A PÁGINA FORM_ADD_NOTICIA
    app.post('/noticias/salvar', function(req, res){
        app.app.controllers.admin.noticias_salvar(app,req,res);
    })
};