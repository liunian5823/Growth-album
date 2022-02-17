// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:1,
    nian:[],
    yue:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.huoquYear()
  },
  onShow () {
		console.log("页面从后台进入页面时触发")
	},
  lists(e){
    var than = this
    this.setData({
      list:e.target.dataset.id
    })
    than.huoquMouth(e.target.dataset.id)
  },
  huoquYear(){
    var than = this
    wx.request({
      url: 'https://vuestudy.chuangxiangit.cn/Year', //仅为示例，并非真实的接口地址
      method:"POST",
      data: {
        id:wx.getStorageSync('id')
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
        if(res.data.code == '200'){
          than.setData({
            list:res.data.data[0].Year,
            nian:res.data.data
          })
          than.huoquMouth(res.data.data[0].Year)
        }else{
          wx.showToast({
            title: res.data.message,
            icon: 'none',
            duration: 2000
          })
        }
      }
    })    
  },
  huoquMouth(e){
    var than = this
    wx.request({
      url: 'https://vuestudy.chuangxiangit.cn/Mouth', //仅为示例，并非真实的接口地址
      method:"POST",
      data: {
        Year:e,
        id:wx.getStorageSync('id')
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
        if(res.data.code == '200'){
          for (let i = 0; i < res.data.data.length; i++) {
            var n=res.data.data[i].url.split(",")[0];
            res.data.data[i].url = n
          }
          than.setData({
            yue:res.data.data
          })
        }else{
          wx.showToast({
            title: res.data.message,
            icon: 'none',
            duration: 2000
          })
        }
      }
    })    
  },
  xiangqing(e){
    console.log(e.currentTarget.dataset.yue,e.currentTarget.dataset.nian)
    wx.navigateTo({
      url: '/pages/xiangqing/xiangqing?nian='+e.currentTarget.dataset.nian + '&yue=' + e.currentTarget.dataset.yue,
    })
  },
  denglu(){
    wx.navigateTo({
      url: '/pages/shangchuan/shangchuan'
    })
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