
const mysql = require('mysql');
const conn = mysql.createConnection({
    host: '120.27.144.158',
    user: 'root',
    password: '131415',
    database: 'growthalbum',
    multipleStatements: true
})
conn.connect();

module.exports = conn