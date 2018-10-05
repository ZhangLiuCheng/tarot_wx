//index.js

const app = getApp()

Page({
  data: {
    showWay: false
  },

  onLoad: function () {
   
  },

  start: function () {
    this.setData({
      showWay: true
    })
  },

  friend: function () {
    wx.navigateTo({
      url: '../friend/friend',
    })
  },

  lover: function () {
    wx.navigateTo({
      url: '../lover/lover',
    })
  }
})
