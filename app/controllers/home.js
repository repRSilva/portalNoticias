var dbConn = require('../../config/dbConnection');
var connection = dbConn();

module.exports.index = function(app,req,res){
    var noticiasModel = new app.app.models.NoticiasDAO(connection);
    noticiasModel.get5UltimasNoticias(function(error,result){
        res.render('home/index',{json5UltimasNoticias: result.recordset});
    });
}