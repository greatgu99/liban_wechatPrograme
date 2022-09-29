// components/Message/Message.js
let appInstance = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    messageItem:{
      type:Object
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
    jumpMessageDetail(){
      wx.navigateTo({
        url: '/pages/messageDetail/messageDetail?messageItem=' + JSON.stringify(this.properties.messageItem),
      })
    },
    collectMessage(){
      wx.request({
        url:appInstance.globalData.URL+'/message/',
        method:'POST',
        data:{
          action:"collectMessage",
          data:{
            userId:appInstance.globalData.userInfo.id,
            messageId:this.properties.messageItem.id
          }
        },
        success:res=>{
          let messageItemTemp = this.properties.messageItem
          messageItemTemp.Collect = !messageItemTemp.Collect
          console.log(messageItemTemp)
          this.setData({
            messageItem:messageItemTemp
          })
          
        }
      })
    }
  }
})
