// pages/xiangqing/xiangqing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    axis: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var than = this
    wx.request({
      url: 'https://vuestudy.chuangxiangit.cn/xiangqing', //仅为示例，并非真实的接口地址
      method: "POST",
      data: {
        id: wx.getStorageSync('id'),
        Year: options.nian,
        mouth: options.yue
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        if (res.data.code == '200') {
          for (let i = 0; i < res.data.data.length; i++) {
            var date = new Date(res.data.data[i].time)
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            m = m < 10 ? ('0' + m) : m;
            var d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            var h = date.getHours();
            h = h < 10 ? ('0' + h) : h;
            var minute = date.getMinutes();
            var second = date.getSeconds();
            minute = minute < 10 ? ('0' + minute) : minute;
            second = second < 10 ? ('0' + second) : second;
            console.log(y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second)
            res.data.data[i].time = y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second
            var n = res.data.data[i].url.split(",");
            var a = []
            for (let p = 0; p < n.length; p++) {
              var b = {}
              console.log(n[p].split(".")[1] == 'mp4')
              if(n[p].split(".")[1] == 'mp4'){
                b['url'] = n[p];
                b['type'] = 'mp4'
              }else{
                b['url'] = n[p];
                b['type'] = 'image'
              }
              a.push(b)
            }
            res.data.data[i].url = a
          }
          than.setData({
            axis: res.data.data
          })
        } else {
          wx.showToast({
            title: res.data.message,
            icon: 'none',
            duration: 2000
          })
        }
      }
    })
  },
  dianji(e) {
    var a = [];
    for (let i = 0; i < this.data.axis[e.currentTarget.dataset.url].url.length; i++) {
      var b = {};
      console.log(this.data.axis[e.currentTarget.dataset.url].url[i].url.split('.')[1] )
      b['url'] = 'http://gz.chuangxiangit.cn/ertong' + this.data.axis[e.currentTarget.dataset.url].url[i].url;
      if(this.data.axis[e.currentTarget.dataset.url].url[i].url.split('.')[1] == 'mp4'){
        b['type'] = "video"
      }else{
        b['type'] = "image"
      }
      a.push(b)
    }
    console.log(a)
    wx.previewMedia({
      sources:a
    })
    // console.log(e.currentTarget.dataset.url)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})