// pages/pick/pick.js
Component({

  properties: {

  },

  data: {
    modalHidden: true,
    pai: null,
    pai1: null,
    pai2: null,
    pai3: null,
    totalPai: 0,
    confirmText: "确认",
    confirmDisabled: true
  },

  ready: function () {
    this.setConfirmTxt(0);
  },

  methods: {
    setPaiLen: function (len) {
      this.setData({
        totalPai: len
      })
    },

    show: function () {
      this.initData();
      this.setData({
        modalHidden: false
      })
    },

    hide: function () {
      this.setData({
        modalHidden: true
      })
    },

    initData: function () {
      this.checkPai = 0;
      let p = [];
      let p1 = [];
      let p2 = [];
      let p3 = [];
      for (let i = 0; i < 78; i++) {
        let item = { checked: false };
        item.id = i;
        p.push(item);
        if (i < 26) {
          p1.push(item);
        } else if (i < 52) {
          p2.push(item);
        } else {
          p3.push(item);
        }
      }

      this.setData({
        pai: p,
        pai1: p1,
        pai2: p2,
        pai3: p3,
      })
    },

    setPickPaiListener: function (listener) {
      this.pickPaiListener = listener;
    },

    touchmove: function () {

    },

    close: function () {
      this.hide();
    },

    confirm: function () {
      this.hide();
      this.pickPaiListener();
    },

    pai: function (res) {
      if (this.checkPai >= this.data.totalPai) {
        let overTxt = "最多选择" + this.data.totalPai + "牌";
        wx.showToast({
          title: overTxt,
          icon : "none"
        })
        return;
      }
      let item = res.target.dataset.item;
      let newPai = this.data.pai;
      newPai[item.id].checked = !newPai[item.id].checked;

      let targetPai1 = this.data.pai1;
      let targetPai2 = this.data.pai2;
      let targetPai3 = this.data.pai3;
      let targetPai = null;

      if (item.id < 26) {
        targetPai = targetPai1;
      } else if (item.id < 52) {
        targetPai = targetPai2;
      } else {
        targetPai = targetPai3;
      }
      let targetId = item.id % 26;
      targetPai[targetId].checked = targetPai[targetId].checked == true;;
      this.setData({
        pai : newPai,
        pai1: targetPai1,
        pai2: targetPai2,
        pai3: targetPai3,
      })
      let num = this.checkPaiNum();
      this.setConfirmDisabled(num);
      this.setConfirmTxt(num);
      this.checkPai = num;
    },

    setConfirmDisabled: function (num) {
      let disabled = num == this.data.totalPai ? false : true;
      this.setData({
        confirmDisabled: disabled
      })
    },

    setConfirmTxt: function(cur) {
      let conTxt = "确认 ( " + cur + " / " + this.data.totalPai + " )"
      this.setData({
        confirmText: conTxt
      })
    },

    checkPaiNum: function () {
      let data = this.data.pai;
      let num = 0;
      for (let i = 0; i < data.length; i ++) {
        if (data[i].checked) {
          num ++;
        }
      }
      return num;
    }
  }
})
