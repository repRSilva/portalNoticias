var dbConn = require('../../config/dbConnection');
var connection = dbConn();

module.exports.formulario_inclusao_noticia = function(app,req,res){
    res.render('admin/form_add_noticia', { jsonValidacao: {} });
}

module.exports.noticias_salvar = function(app,req,res){
    var jsonNoticia = req.body;

    req.assert('titulo','Título é obrigatório!').notEmpty();
    req.assert('resumo','Resumo é obrigatório!').notEmpty();
    req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100);
    req.assert('autor','Autor é obrigatório!').notEmpty();
    req.assert('data_noticia','Data é obrigatório!').notEmpty();
    //req.assert('data_noticia','Date tem estar no formato "DD/MM/AAAA"').isDate({format: 'YYYY/MM/DD'});
    //req.assert('data_noticia','Date tem estar no formato "DD/MM/AAAA"').isDate({format:'YYYY/MM/DD'});
    req.assert('noticia','Notícia é obrigatório!').notEmpty();
    var erros = req.validationErrors();

    if(erros){
        res.render('admin/form_add_noticia', { jsonValidacao: erros });
        return;
    }

    var noticiasModel = new app.app.models.NoticiasDAO(connection);

      noticiasModel.salvarNoticia(jsonNoticia,function(err, result){
        res.redirect('/noticias');
    });
}