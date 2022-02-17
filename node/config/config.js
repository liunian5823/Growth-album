
const mysql = require('mysql');
const conn = mysql.createConnection({
    host: '120.27.144.158',
    user: 'root',
    password: 'liunian834940800',
    database: 'growthalbum',
    multipleStatements: true
})
conn.connect(function (e){
    console.log(e)
});

module.exports = conn
