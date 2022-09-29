// pages/chooseClass/chooseClass.js
let appInstance = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    className:[{
      name:'全校',
      classList:['全校']
    },{
      name:'教务处',
      classList:['教务处']
    },{
      name:'学院',
      classList:['信息学院','商学院']
    },{
      name:'班级',
      classList:['计191','计192','计193','商456','商789']
    }],
    iindex:0,
    jindex:0
  },
  selectClassItem(e){
    console.log(e.target.dataset)
    this.setData({
      iindex:e.target.dataset.iindex,
      jindex:e.target.dataset.jindex
    })
  },
  readMessage(){
    appInstance.globalData.writeMessageCache.iindex=this.data.iindex
    appInstance.globalData.writeMessageCache.jindex=this.data.jindex
    wx.navigateBack({
      delta: 0,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
    let messageCache = appInstance.globalData.writeMessageCache
    this.setData({
      iindex:messageCache.iindex
    })

    this.setData({
      jindex:messageCache.jindex
    })

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    appInstance.globalData.writeMessageCache.iindex=this.data.iindex
    appInstance.globalData.writeMessageCache.jindex=this.data.jindex
    console.log("调用onHide")
    console.log(appInstance.globalData.writeMessageCache)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    appInstance.globalData.writeMessageCache.iindex=this.data.iindex
    appInstance.globalData.writeMessageCache.jindex=this.data.jindex
    console.log("调用onUnload")
    console.log(appInstance.globalData.writeMessageCache)
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