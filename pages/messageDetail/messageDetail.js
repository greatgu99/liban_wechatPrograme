// pages/messageDetail/messageDetail.js
let appInstance = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messageItem:{},
    authority:0
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
  },
  readMessage(){
    wx.request({
      url:appInstance.globalData.URL+'/message/',
      method:'POST',
      data:{
        action:"readMessage",
        data:{
          userId:appInstance.globalData.userInfo.id,
          messageId:this.properties.messageItem.id
        }
      },
      success:res=>{
        let messageItemTemp = this.properties.messageItem
        messageItemTemp.Read = true
        this.setData({
          messageItem:messageItemTemp
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      authority:appInstance.globalData.userInfo.authority
    })
    console.log(options)
    let messageItem = JSON.parse(options.messageItem)
    console.log(options)
    this.setData({
      messageItem: messageItem,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})