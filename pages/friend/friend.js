// pages/way/way.js
var constant = require("../../utils/constant.js");

Page({

  data: {
    status: 0,
    paiImgs: null,
    btnTxt: "开始占卜"
  },

  onLoad: function (options) {
    this.pickModal = this.selectComponent("#pickModal");
    this.pickModal.setPickPaiListener(this.pickPaiFinish)

    let paiData = [];
    for (let i = 0; i < 5; i++) {
      let item = {
        img: "/images/pai_beimian.png",
        front: true
      }
      paiData.push(item);
    }
    this.setData({
      paiImgs: paiData
    })
  },

  onShow: function () {
    this.data.status = 0;
  },

  onShareAppMessage: function () {

  },

  back: function () {
    wx.navigateBack();
  },

  // 选牌 / 查看结果
  pickPai: function () {
    if (this.data.status == 0) {
      this.pickModal.show();
    } else {
      wx.navigateTo({
        url: '../result/result',
      })
    }
  },

  // 选牌完成
  pickPaiFinish: function () {
    this.data.status = 1;
    let seed = [];
    for (let i = 0; i < 78; i ++) {
      seed.push(i);
    }
    let imgs = constant.imgs;
    let newPai = [];
    for (let i = 0; i < 5; i ++) {
      let random_img = Math.floor(Math.random() * seed.length);
      let random_front = Math.floor(Math.random() * 2)

      let ri = seed[random_img];
      seed.slice(random_img, 1);

      let item = {
        img: constant.imgHost + imgs[ri],
        front: random_front == 0
      }
      newPai.push(item);
    }
    this.setData({
      paiImgs: newPai,
      btnTxt : "查看结果"
    })
  },
})