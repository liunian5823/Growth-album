var request = require('request');
exports.weixin = (req, res) => {
    var url = "https://api.weixin.qq.com/sns/jscode2session?appid=wx6ba576dc4ec74f8a&secret=a2a273f6317cc91bfe9409d2694c6c8c&js_code="+ req.body.code +"&grant_type=authorization_code";
    var requestData = "需要传输的数据";
    request({
        url: url,
        method: "GET",
        json: true,
        headers: {
            "content-type": "application/json",
        },
    }, function (error, response, body) {
        res.json({ code: '200', data: body, message: "获取成功" })

    });
}
