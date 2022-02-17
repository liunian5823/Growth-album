// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    loading: false,
    username: "",
    password: "",
  },
  // 事件处理函数

  onLoad() {

  },
  username(e) {
    var than = this;
    than.setData({
      username: e.detail.value
    })
  },
  password(e) {
    var than = this;
    than.setData({
      password: e.detail.value
    })
  },
  denglu() {
    var than = this;
    than.setData({
      loading: true,
    })
    wx.request({
      url: 'https://vuestudy.chuangxiangit.cn/login', //仅为示例，并非真实的接口地址
      method: "POST",
      data: {
        'name': this.data.username,
        'password': this.data.password
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        if (res.data.code == '200') {
          wx.showToast({
            title: res.data.message,
            icon: 'success',
            duration: 2000
          })
          wx.setStorage({
            key: "id",
            data: res.data.data.id
          })
          wx.setStorage({
            key: "name",
            data: res.data.data.name
          })
          var pages = getCurrentPages();

          var beforePage = pages[pages.length - 2];

          beforePage.huoquYear();
          wx.navigateBack({
            delta: 1
          })
        } else {
          than.setData({
            loading: false,
          })
          wx.showToast({
            title: res.data.message,
            icon: 'none',
            duration: 2000
          })
        }
      }
    })
  },
  weixin(){
    wx.login({
      success (res) {
        console.log(res)
        wx.request({
          url: 'http://localhost:3000/weixin', //仅为示例，并非真实的接口地址
          method: "POST",
          data: {
            'code': res.code,
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success(res) {
            console.log(res)
          }
        })
      }
    })
  }
})
