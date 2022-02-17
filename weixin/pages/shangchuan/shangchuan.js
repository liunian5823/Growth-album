// pages/shangchuan/shangchuan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image: [],
    textreat:"",
    xinimage:[]
  },
  chooseImageTap: function () {
    var that = this;
    wx.chooseMedia({
      count: 9,
      mediaType: ['mix'],
      sourceType: ['album', 'camera'],
      maxDuration: 30,
      camera: 'back',
      success(res) {
        console.log(res.tempFiles[0].tempFilePath)
        wx.uploadFile({
          url: 'https://vuestudy.chuangxiangit.cn/image', //仅为示例，非真实的接口地址
          filePath: res.tempFiles[0].tempFilePath,
          name: 'file',

          success(res) {
            var obj = JSON.parse(res.data);
            let image = that.data.image
            var as = that.data.xinimage
            image.push('http://gz.chuangxiangit.cn/ertong' + obj.data)
            as.push(obj.data)
            that.setData({
              image: image,
              xinimage: as
            })

          },
          fail(error) {
            console.log(error)
          }
        })
      }
    })
  },

  chakan(e) {
    console.log()
    let than = this
    wx.showActionSheet({
      itemList: ['查看', '删除'],
      success(res) {
        console.log(res.tapIndex)
        if (res.tapIndex == 0) {
          wx.previewMedia({
            sources: [{ url: e.currentTarget.dataset.url, type: 'image' }],
          })
        } else {
          wx.showModal({
            title: '确认删除',
            content: '删除后无法恢复',
            success (res) {
              if (res.confirm) {
                var list =  than.data.image
                list.splice(e.currentTarget.dataset.index, 1);
                than.data.xinimage.splice(e.currentTarget.dataset.index, 1);
                console.log(list)
                than.setData({
                  image: list
                })
              } else if (res.cancel) {
                
              }
            }
          })
        }
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
    // wx.previewMedia({
    //   sources: [{ url: e.currentTarget.dataset.url, type: 'image' }]
    // })

  },
  shuru(e){
    console.log(e.detail.value)
    this.setData({
      textreat:e.detail.value
    })
  },

  tijiao(){
    var than = this
    wx.request({
      url: 'https://vuestudy.chuangxiangit.cn/shangchuan', //仅为示例，并非真实的接口地址
      method:"POST",
      data: {
        id:wx.getStorageSync('id'),
        remarks: than.data.textreat,
        url:than.data.xinimage
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
        if(res.data.code == '200'){
          var pages = getCurrentPages();
          var beforePage = pages[pages.length - 2];
          beforePage.huoquYear();
          wx.navigateBack({
            delta: 1
          })
        }
      }
    })    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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