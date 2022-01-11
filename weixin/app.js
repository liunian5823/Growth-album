// app.js
App({
  onLaunch() {
    console.log('123')
    var value = wx.getStorageSync('id')
    if(value == ''){
      console.log('未登录')
      wx.navigateTo({
        url: '/pages/index/index',
      })
    }
  },
  globalData: {
    userInfo: null
  }
})
