// pages/addImg/addImg.js
let appInstance = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePathList:[]
  },
  cancelImg(event){
    let index = event.currentTarget.dataset.status;
    // let temp1= this.data.tempFilePathList.slice(0,index)
    this.setData({
      tempFilePathList:[...(this.data.tempFilePathList.slice(0,index)),...(this.data.tempFilePathList.slice(index+1))]
    })
    console.log(index)
    console.log(this.data.tempFilePathList)
  },
  addImg(){
    let that = this
    wx.chooseMedia({
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      camera: 'back',
      success:res => {
        let tempFilePathListt = this.data.tempFilePathList;
        for (let i in res.tempFiles){
          tempFilePathListt.push(res.tempFiles[i].tempFilePath)
          console.log(i)
        }
        console.log(res.tempFiles)
        console.log(res.tempFiles[0].tempFilePath)
        this.setData({
          tempFilePathList:tempFilePathListt
        })
        console.log(this.data.tempFilePathList)
        // let promiseList = []
        // for (let i=0;i<res.tempFiles.length;i++){
        //   console.log(res.tempFiles[i].tempFilePath)
        //   promiseList.push(new Promise((resolve,reject)=>{
        //     wx.uploadFile({
        //       filePath: res.tempFiles[i].tempFilePath,
        //       name: 'file',
        //       url: appInstance.globalData.URL+"/addpic/",
        //       success:(res)=>{
        //         resolve([i,res.data])
        //       },
        //       fail:(res)=>{
        //         reject()
        //       }
        //     })
        //   }))
        // }
        // Promise.all(promiseList).then((rsplist)=>{
        //   rsplist.map((val)=>{
        //     console.log(val)
        //     console.log(val[0],val[1])
        //   })
        // })
        //--------------------------------------------
        // wx.uploadFile({
        //   filePath: res.tempFiles[0].tempFilePath,
        //   name: 'file',
        //   url: appInstance.globalData.URL+"/addpic/",
        //   success:(res)=>{
        //     console.log(res.data)
        //     res.data = JSON.parse(res.data);
        //     console.log(res.data)
        //     console.log(res.data.filePath)
        //     wx.request({
        //       url: appInstance.globalData.URL+"/user/",
        //       method:'POST',
        //       data:{
        //         action:'changeUserImg',
        //         data:{
        //           filePath:res.data.filePath,
        //           id:appInstance.globalData.userInfo.id
        //         }
        //       },
        //       success:res=>{
        //         console.log(res)
        //         if (res.data.msg=='success'){
        //           let userInfoTemp = appInstance.globalData.userInfo;
        //           userInfoTemp.userImg = res.data.filePath
        //           appInstance.globalData.userInfo = userInfoTemp
        //           that.setData({
        //             userInfo:userInfoTemp
        //           })
        //           console.log(that.data.userInfo)
        //         }
        //       }
        //     })
        //   }
        // })

      }
    })
  },
  finish(){
    appInstance.globalData.writeMessageCache.filePathList=this.data.tempFilePathList
    wx.navigateBack()
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
      tempFilePathList:messageCache.filePathList
    })
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    appInstance.globalData.writeMessageCache.filePathList=this.data.tempFilePathList
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    appInstance.globalData.writeMessageCache.filePathList=this.data.tempFilePathList
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