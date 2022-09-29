// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs) 

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    // URL:'http://127.0.0.1:8080/api/liban',
    URL:'http://139.196.46.55:80/api/liban',
    writeMessageCache:{
      filePathList:[],
      iindex:0,
      jindex:0,
      title:"",
      text_content:"",
      text_length:0
    }
  }
})
