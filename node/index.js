/* 引入express框架 */
const express = require('express');
const app = express();
 
/* 引入cors */
const cors = require('cors');
app.use(cors());

/* 引入body-parser */
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const apiRouter = require('./routes')
app.use('/', cors(), apiRouter)
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
/* 引入mysql */

 
app.listen(3000, () => console.log('running on port 3000...'))
