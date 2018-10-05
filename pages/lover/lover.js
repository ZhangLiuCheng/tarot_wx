// pages/lover/lover.js

var explain = require("../../utils/explain.js");

Page({

  data: {
    status: 0,
    paiTxt: ["你们未来的发展",
      "代表你的恋人",
      "代表你自己",
      "你们彼此的关系"],
    paiImgs: null,
    btnTxt: "开始占卜"
  },

  onLoad: function (options) {
    this.pickModal = this.selectComponent("#pickModal");
    this.pickModal.setPaiLen(4);
    this.pickModal.setPickPaiListener(this.pickPaiFinish)

    let paiData = [];
    for (let i = 0; i < 4; i++) {
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
      let result = {
        title: "恋人金字塔",
        pai: this.data.paiImgs
      }
      getApp().globalData.result = result;
      this.data.paiImgs
      wx.navigateTo({
        url: '../result/result',
      })
    }
  },

  // 选牌完成
  pickPaiFinish: function () {
    this.data.status = 1;
    let seed = [];
    for (let i = 0; i < 78; i++) {
      seed.push(i);
    }
    let content = explain.content;
    let newPai = [];
    for (let i = 0; i < 4; i++) {
      let random_img = Math.floor(Math.random() * seed.length);
      let random_front = Math.floor(Math.random() * 2)

      let ri = seed[random_img];
      seed.splice(random_img, 1);

      let oriCon = content[ri];
      let item = {
        id: ri,
        name: oriCon.name,
        txt: this.data.paiTxt[i],
        img: explain.imgHost + oriCon.img + ".png",
        front: random_front == 0
      }
      item.brief = random_front == 0 ? oriCon.front : oriCon.behind;
      newPai.push(item);
    }

    this.setData({
      paiImgs: newPai,
      btnTxt: "查看结果"
    })
  },
})