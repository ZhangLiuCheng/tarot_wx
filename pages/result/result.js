// pages/result/result.js
Page({

  data: {
    title: "",
    pai: null
  },

  onLoad: function (options) {
    console.log(getApp().globalData.result)
    let result = getApp().globalData.result;
    this.setData({
      title: result.title,
      pai: result.pai
    })
  },

  onShareAppMessage: function () {

  },

  back: function () {
    wx.navigateBack({
      delta: 2
    });
  },
})