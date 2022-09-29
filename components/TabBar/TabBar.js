// components/TabBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    page_num:{
      type: Number,
    },
    authority:{
      type:Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    jumpIndex(){
      wx.reLaunch({
        url: '/pages/index/index',
      })
    },
    jumpProfile(){
      wx.reLaunch({
        url: '/pages/profile/profile',
      })
    },
    jumpAddMessage(){
      wx.reLaunch({
        url: '/pages/addMessage/addMessage',
      })
    },
  }
})
