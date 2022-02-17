const config = require('../config/config')
const formidable = require('formidable')
var sd = require('silly-datetime');
var fs = require("fs");
var path = require("path");
exports.denglu = (req, res) => {
    const sqlStr = 'SELECT * FROM user WHERE name = "' + req.body.name + '" AND password = "' + req.body.password + '";'
    config.query(sqlStr, (error, results) => {

        if (results.length == 0 || results == undefined) {
            res.json({ code: '500', message: "用户名或密码不正确，请重新输入" })
        } else {
            res.json({ code: '200', data: results[0].id, message: "登陆成功" })
        }
    })
},

    exports.Year = (req, res) => {
        const sqlStr = 'SELECT distinct Year FROM image;'
        config.query(sqlStr, (error, results) => {
            res.json({ code: '200', data: results, message: "获取成功" })
        })
    },
    exports.Mouth = (req, res) => {
        const sqlStr = 'SELECT MONTH , url FROM image WHERE YEAR=' + req.body.Year + ';'
        config.query(sqlStr, (error, results) => {
            res.json({ code: '200', data: results, message: "获取成功" })
        })
    },
    exports.xiangqing = (req, res) => {
        const sqlStr = 'SELECT * FROM image WHERE Month = ' + req.body.mouth + ' and Year = ' + req.body.Year + ''
        config.query(sqlStr, (error, results) => {

            res.json({ code: '200', data: results, message: "获取成功" })
        })
    },

    exports.imgae = (req, res) => {
        var form = new formidable.IncomingForm();
        form.encoding = 'utf-8';
        form.uploadDir = path.join(__dirname + "/../upload");
        form.keepExtensions = true;
        form.maxFieldsSize = 2 * 1024 * 1024;
        form.parse(req, function (err, fields, files) {

            var filename = files.file.originalFilename
            var nameArray = filename.split('.');
            var type = nameArray[nameArray.length - 1];
            var name = '';
            for (var i = 0; i < nameArray.length - 1; i++) {
                name = name + nameArray[i];
            }
            var date = new Date();
            var time = '_' + date.getFullYear() + "_" + date.getMonth() + "_" + date.getDay() + "_" + date.getHours() + "_" + date.getMinutes();

            var avatarName = name + time + '.' + type;
            var newPath = form.uploadDir + "/" + avatarName;
            fs.renameSync(files.file.filepath, newPath);
            const sqlStr1 = 'SELECT * FROM image WHERE Year=' + sd.format(new Date(), 'YYYY') + ' and Month = ' + sd.format(new Date(), 'MM') + ' and date = ' + +sd.format(new Date(), 'DD') + ';'
            config.query(sqlStr1, (error, results) => {
                var id = results[0].id;
                if (results.length == 0) {
                    const sqlStr = "INSERT INTO image(url,sid,time,Year,Month,date,remarks) VALUE ('" + "/node/upload/" + avatarName + "', " + fields.id + ", '" + sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss') + "','" + sd.format(new Date(), 'YYYY') + "','" + sd.format(new Date(), 'MM') + "','" + sd.format(new Date(), 'DD') + "'" + fields.remarks + "  );"
                    config.query(sqlStr, (error, results) => {
                        if (results.length == 0 || results == undefined) {
                            res.json({ code: 500, message: '出错' })
                        } else {
                            res.json({ code: 200, message: "/node/upload/" + avatarName })
                        }
                    })
                } else {
                    const sqlStr2 = 'SELECT url FROM image WHERE id=' + results[0].id + ';'
                    config.query(sqlStr2, (error, results) => {
                        var a = results[0].url + ',' + "/node/upload/" + avatarName
                        let sqlStr3 = ""
                        if (fields.remarks == "") {
                            sqlStr3 = 'UPDATE image SET url = "' + a + '", remarks = "' + fields.remarks + '" WHERE id = ' + id;
                        } else {
                            sqlStr3 = 'UPDATE image SET url = "' + a + '", remarks = "' + fields.remarks + '" WHERE id = ' + id;
                        }
                        config.query(sqlStr3, (error, results) => {
                            console.log(error)
                            if (results.length == 0 || results == undefined) {
                                res.json({ code: 500, message: '出错' })
                            } else {
                                res.json({ code: 200, data: a, message: "已修改" })
                            }
                        })

                    })
                }
            })

        })
    }
