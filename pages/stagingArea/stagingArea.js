// pages/stagingArea/stagingArea.js
let appInstance = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messageList:[],
    authority:0
  },
  jumpWriteMessage(e){
    console.log(e)
    console.log(e.target.dataset.index)
    let message = this.data.messageList[e.target.dataset.index]
    appInstance.globalData.writeMessageCache={
      filePathList:message.imgList,
      iindex:message.classify,
      jindex:message.classifyj,
      title:message.title,
      text_content:message.content,
      text_length:message.content.length
    }
    wx.navigateTo({
      url: '/pages/writeMessage/writeMessage',
    })
  },
  deleteMessage(e){
    let tempMessageList = [...this.data.messageList]
    console.log(tempMessageList)
    console.log(tempMessageList.splice(e.target.dataset.index,1))
    console.log(e.target.dataset.index)
    let message = this.data.messageList[e.target.dataset.index]
    wx.request({
      url: appInstance.globalData.URL+"/message/",
      method:"POST",
      data:{
        action:"deleteMessageFromStagingArea",
        data:{
          messageId:message.id
        }
      },
      success:res=>{
        this.setData({
          messageList:tempMessageList.splice(e.target.dataset.index,1)
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      authority:appInstance.globalData.userInfo.authority
    })
    wx.request({
      url: appInstance.globalData.URL+"/message/",
      method:"POST",
      data:{
        action:"getStagingAreaMessage",
        data:{
          publisherId:appInstance.globalData.userInfo.id
        }
      },
      success:res=>{
        console.log(res.data)
        console.log(res.data.message_list)
        this.setData({
          messageList:res.data.message_list
        })
      }
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
