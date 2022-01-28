const express = require('express')

const denglu = require('./api/denglu')
const weixin = require('./api/weixin')
const router = express.Router()
// //检测token是否过期
// router.post('/auth',users.checkToken)
//换取token
router.post('/login', denglu.denglu)
router.post('/image', denglu.imgae)
router.post('/Year', denglu.Year)
router.post('/Mouth', denglu.Mouth)
router.post('/xiangqing', denglu.xiangqing)
router.post('/weixin', weixin.weixin)
module.exports = router
