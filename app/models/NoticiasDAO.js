function NoticiasDAO(connection) {
  this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback) {
  this._connection.query(
    "SELECT ID_NOTICIA,TITULO,NOTICIA,RESUMO,AUTOR,DATA_NOTICIA FROM tblCursoNodeNoticias",
    callback
  );
};

NoticiasDAO.prototype.getNoticia = function(id_noticia, callback) {
  this._connection.query(
    `SELECT ID_NOTICIA,TITULO,NOTICIA,RESUMO,AUTOR,DATA_NOTICIA FROM tblCursoNodeNoticias WHERE ID_NOTICIA = ${id_noticia}`,
    callback
  );
};

NoticiasDAO.prototype.salvarNoticia = function(jsonNoticia, callback) {
  this._connection.query(
    "INSERT INTO tblCursoNodeNoticias(TITULO,NOTICIA,RESUMO,AUTOR,DATA_NOTICIA) VALUES ('" +
      jsonNoticia.titulo +
      "','" +
      jsonNoticia.noticia +
      "','" +
      jsonNoticia.resumo +
      "','" +
      jsonNoticia.autor +
      "','" +
      jsonNoticia.data_noticia +
      "')",
    callback
  );
};

NoticiasDAO.prototype.get5UltimasNoticias = function(callback) {
  this._connection.query(
    "SELECT TOP 5 ID_NOTICIA,TITULO,NOTICIA,RESUMO,AUTOR,DATA_NOTICIA FROM tblCursoNodeNoticias ORDER BY DATA_CRIACAO DESC",
    callback
  );
};
module.exports = function() {
  return NoticiasDAO;
};
