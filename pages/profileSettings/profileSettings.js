// pages/profileSettings/profileSettings.js
let appInstance = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:"",
    authority:0,
    // tempFilePath:""
  },
  chooseImg(){
    let that = this
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      camera: 'back',
      success(res) {
        console.log(res)
        console.log(res.tempFiles[0].tempFilePath)
        wx.uploadFile({
          filePath: res.tempFiles[0].tempFilePath,
          name: 'file',
          url: appInstance.globalData.URL+"/addpic/",
          success:(res)=>{
            console.log(res.data)
            res.data = JSON.parse(res.data);
            console.log(res.data)
            console.log(res.data.filePath)
            wx.request({
              url: appInstance.globalData.URL+"/user/",
              method:'POST',
              data:{
                action:'changeUserImg',
                data:{
                  filePath:res.data.filePath,
                  id:appInstance.globalData.userInfo.id
                }
              },
              success:res=>{
                console.log(res)
                if (res.data.msg=='success'){
                  let userInfoTemp = appInstance.globalData.userInfo;
                  userInfoTemp.userImg = res.data.filePath
                  appInstance.globalData.userInfo = userInfoTemp
                  that.setData({
                    userInfo:userInfoTemp
                  })
                  console.log(that.data.userInfo)
                }
              }
            })
          }
        })

      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      userInfo:appInstance.globalData.userInfo,
      authority:appInstance.globalData.userInfo.authority
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