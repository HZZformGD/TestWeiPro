const app = getApp()

Page({
  data: {
    inputShowed: false,
    inputVal: "",
    isSearch: false
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  inputSearch: (e) =>{
    let keywords = e.detail.value
    let url = 'http://www.huangzhenzhan.club/blog_api/song/search/' + keywords
    wx.request({
      url: url, //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        Object.is(res.sta, true) ? this.setData({isSearch: true}) : console.log("所搜出错")
      }
    })
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  }
});