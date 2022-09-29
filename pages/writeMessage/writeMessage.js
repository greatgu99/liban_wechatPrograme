// pages/writeMessage/writeMessage.js
let appInstance = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text_length:0,
    text_content:'',
    title:''
  },
  bindTitle: function (e) {
    var title = e.detail.value;
    // console.log(t_text)
    this.setData({
      title: title,
    });
    console.log(this.data.title)
  },
  bindText: function (e) {
    var t_text = e.detail.value.length;
    var text = e.detail.value;
    // console.log(t_text)
    this.setData({
      text_length: t_text,
      text_content: text,
    });
    console.log(this.data.text_content)
  },
  jumpChooseClass(){
    wx.navigateTo({
      url: '/pages/chooseClass/chooseClass',
    })
  },
  addImg(){
    wx.navigateTo({
      url: '/pages/addImg/addImg',
    })
  },
  publish(){
    wx.request({
      url: appInstance.globalData.URL+"/message/",
      method:"POST",
      data:{
        action:"addCompletedMessage",

        data:{
          title:this.data.title,
          content:this.data.text_content,
          classify:appInstance.globalData.writeMessageCache.iindex,
          classifyj:appInstance.globalData.writeMessageCache.jindex,
          publisherId:appInstance.globalData.userInfo.id
        }
      },
      success:res=>{
        console.log(res.data.messageId)
        let messageId = res.data.messageId
        let promiseList = []
        for (let i in appInstance.globalData.writeMessageCache.filePathList){
          promiseList.push(new Promise((resolve,reject)=>{
            wx.uploadFile({
              filePath: appInstance.globalData.writeMessageCache.filePathList[i],
              name: 'file',
              url: appInstance.globalData.URL+"/addpic/",
              success:(res)=>{
                console.log(res.data)
                res.data = JSON.parse(res.data);
                console.log(res.data)
                console.log(res.data.filePath)
                wx.request({
                  url: appInstance.globalData.URL+"/message/",
                  method:'POST',
                  data:{
                    action:'addMessageImg',
                    data:{
                      imgSrc:res.data.filePath,
                      messageId:messageId
                    }
                  },
                  success:res=>{
                    console.log(res)
                    resolve(res)
                  }
                })
              }
            })
          }))
        }
        Promise.all(promiseList).then((rspList)=>{
        }).then(()=>{
          appInstance.globalData.writeMessageCache = {
            filePathList:[],
            iindex:0,
            jindex:0,
            title:"",
            text_content:"",
            text_length:0
          }
          this.setData({
            title:"",
            text_content:"",
            text_length:0
          })
          wx.reLaunch({
            url: '/pages/index/index',
          })
        })
      }
    })
  },
  staging(){
    wx.request({
      url: appInstance.globalData.URL+"/message/",
      method:"POST",
      data:{
        action:"addStagingAreaMessage",

        data:{
          title:this.data.title,
          content:this.data.text_content,
          classify:appInstance.globalData.writeMessageCache.iindex,
          classifyj:appInstance.globalData.writeMessageCache.jindex,
          publisherId:appInstance.globalData.userInfo.id
        }
      },
      success:res=>{
        console.log(res.data.messageId)
        let messageId = res.data.messageId
        let promiseList = []
        for (let i in appInstance.globalData.writeMessageCache.filePathList){
          promiseList.push(new Promise((resolve,reject)=>{
            wx.uploadFile({
              filePath: appInstance.globalData.writeMessageCache.filePathList[i],
              name: 'file',
              url: appInstance.globalData.URL+"/addpic/",
              success:(res)=>{
                console.log(res.data)
                res.data = JSON.parse(res.data);
                console.log(res.data)
                console.log(res.data.filePath)
                wx.request({
                  url: appInstance.globalData.URL+"/message/",
                  method:'POST',
                  data:{
                    action:'addMessageImg',
                    data:{
                      imgSrc:res.data.filePath,
                      messageId:messageId
                    }
                  },
                  success:res=>{
                    console.log(res)
                    resolve(res)
                  }
                })
              }
            })
          }))
        }
        Promise.all(promiseList).then((rspList)=>{
        }).then(()=>{
          appInstance.globalData.writeMessageCache = {
            filePathList:[],
            iindex:0,
            jindex:0,
            title:"",
            text_content:"",
            text_length:0
          }
          this.setData({
            title:"",
            text_content:"",
            text_length:0
          })
          wx.reLaunch({
            url: '/pages/addMessage/addMessage',
          })
        })
      }
    })
  },
  delete(){
    wx.request({
      url: appInstance.globalData.URL+"/message/",
      method:"POST",
      data:{
        action:"addWastepaperBaskectMessage",
        data:{
          title:this.data.title,
          content:this.data.text_content,
          classify:appInstance.globalData.writeMessageCache.iindex,
          classifyj:appInstance.globalData.writeMessageCache.jindex,
          publisherId:appInstance.globalData.userInfo.id
        }
      },
      success:res=>{
        console.log(res.data.messageId)
        let messageId = res.data.messageId
        let promiseList = []
        for (let i in appInstance.globalData.writeMessageCache.filePathList){
          promiseList.push(new Promise((resolve,reject)=>{
            wx.uploadFile({
              filePath: appInstance.globalData.writeMessageCache.filePathList[i],
              name: 'file',
              url: appInstance.globalData.URL+"/addpic/",
              success:(res)=>{
                console.log(res.data)
                res.data = JSON.parse(res.data);
                console.log(res.data)
                console.log(res.data.filePath)
                wx.request({
                  url: appInstance.globalData.URL+"/message/",
                  method:'POST',
                  data:{
                    action:'addMessageImg',
                    data:{
                      imgSrc:res.data.filePath,
                      messageId:messageId
                    }
                  },
                  success:res=>{
                    console.log(res)
                    resolve(res)
                  }
                })
              }
            })
          }))
        }
        Promise.all(promiseList).then((rspList)=>{
        }).then(()=>{
          console.log("调用删除按钮")
          appInstance.globalData.writeMessageCache = {
            filePathList:[],
            iindex:0,
            jindex:0,
            title:"",
            text_content:"",
            text_length:0
          }
          this.setData({
            title:"",
            text_content:"",
            text_length:0
          })
          wx.reLaunch({
            url: '/pages/addMessage/addMessage',
          })
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("调用onLoad")
    let messageCache = appInstance.globalData.writeMessageCache
    console.log(messageCache)

    this.setData({
      title:messageCache.title
    })

    this.setData({
      text_length:messageCache.text_length
    })

    this.setData({
      text_content:messageCache.text_content
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
    console.log("调用onShow")
    let messageCache = appInstance.globalData.writeMessageCache

    this.setData({
      title:messageCache.title
    })

    this.setData({
      text_length:messageCache.text_length
    })
    this.setData({
      text_content:messageCache.text_content
    })

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    appInstance.globalData.writeMessageCache.title=this.data.title
    appInstance.globalData.writeMessageCache.text_length=this.data.text_length
    appInstance.globalData.writeMessageCache.text_content=this.data.text_content
    console.log(appInstance.globalData.writeMessageCache)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    appInstance.globalData.writeMessageCache.title=this.data.title
    appInstance.globalData.writeMessageCache.text_length=this.data.text_length
    appInstance.globalData.writeMessageCache.text_content=this.data.text_content
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

