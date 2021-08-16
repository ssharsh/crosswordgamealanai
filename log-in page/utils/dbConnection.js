const mysql = require('mysql2');

const dbConnection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'vindevkriroh.5',
    database: 'pythonlogin'
});

module.exports = dbConnection.promise();