// pages/index/index.js
let appInstance = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

    searchContent:"",
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    advertisement:['去发洗发露','老八秘制小汉堡','拖拉机'],
    authority:0,
    showTitle:0,
    messageList:[],
    titleItemList:['全部','教务处','学院','班级']
  },
  searchMessage(e) {
    console.log(e.detail)
    this.setData({
      searchContent:e.detail
    })
  },
  changeTitleItem(event){
    console.log(event.currentTarget.dataset.status)
    
    this.setData({
      showTitle:event.currentTarget.dataset.status
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      authority:appInstance.globalData.userInfo.authority
    })
    console.log(appInstance.globalData.userInfo)
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
    wx.request({
      url:appInstance.globalData.URL+'/message/',
      method:'POST',
      data:{
        action:'getAllCompletedMessage',
      },
      success:(res)=>{
        console.log(res.data)
        console.log(res.data.message_list)
        this.setData({
          messageList:res.data.message_list
        })
      }
    })

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