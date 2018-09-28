// pages/pick/pick.js
Component({
 
  properties: {

  },

  data: {
    modalHidden: true,
  },

  methods: {
    show: function () {
      this.setData({
        modalHidden: false
      })
    },

    hide: function () {
      this.setData({
        modalHidden: true
      })
    },
  }
})
