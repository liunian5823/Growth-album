const express = require('express')

const denglu = require('./api/denglu')

const router = express.Router()
// //检测token是否过期
// router.post('/auth',users.checkToken)
//换取token
router.post('/login', denglu.denglu)
router.post('/image', denglu.imgae)
module.exports = router
