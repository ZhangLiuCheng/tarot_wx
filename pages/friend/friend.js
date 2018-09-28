// pages/way/way.js
Page({

  data: {

  },

  onLoad: function (options) {
    this.pickModal = this.selectComponent("#pickModal");
  },

  onShareAppMessage: function () {

  },

  back: function () {
    wx.navigateBack();
  },

  // 选牌
  pickPai: function () {
    this.pickModal.show();
  }
})