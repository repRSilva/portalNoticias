
var sql = require('mssql');

module.exports = function () {
    var config = {
        server: '',
        user: '',
        password: '',
        database: ''
    };
    var connection = new sql.ConnectionPool(config, function (err) {
        if (err) {
            console.log(err);
        } else {
            var request = new sql.Request(connection);
        }
    });
    return connection;
}

