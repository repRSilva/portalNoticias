var dbConn = require('../../config/dbConnection');
var connection = dbConn();

module.exports.noticias = function(app,req,res){
    var noticiasModel = new app.app.models.NoticiasDAO(connection);
    noticiasModel.getNoticias(function (err, result) {
        if (err) {
            console.log(err);
        } else {
            res.render('noticias/noticias', { jsonNoticias: result.recordset });
        }
    });
}

module.exports.noticia = function(app,req,res){
    var noticiasModel = new app.app.models.NoticiasDAO(connection);
    var id_noticia = req.query.id_noticia;
    noticiasModel.getNoticia(id_noticia,function(err,result){
        if (err) {
            console.log(err);
        } else {
            res.render('noticias/noticia', { jsonNoticia: result.recordset });
        }
    });
}