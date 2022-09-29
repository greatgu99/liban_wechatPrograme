// pages/login/login.js
let appInstance = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    UserId:"",
    UserPwd:"",
    showfalse:false,
    warningMessage:"*用户名或密码不能为空",
    errorMessage:"1123123"
  },
  inputId: function (e) {
    var text = e.detail.value;
    console.log(text)
    this.setData({
      UserId: text
    }) 
  },
  inputPwd: function (e) {
    var text = e.detail.value;
    console.log(text)
    this.setData({
      UserPwd:text,
    }) 
  },
  Submit(){
    console.log(JSON.stringify({"1":"2"}) )
    this.setData({
      errorMessage:"点击登录了"
    })
    console.log(this.data.UserId)
    console.log(this.data.UserPwd)
    if (this.data.UserId=="" || this.data.UserPwd==""){
      console.log(11111)
      this.setData({
        showfalse:true,
        warningMessage:"*用户名或密码不能为空"
      })
    } else {
      wx.request({
        url:appInstance.globalData.URL+'/user/',
        method:'POST',
        data:{
          action:'login',
          data:{
            userName:this.data.UserId,
            password:this.data.UserPwd
          }
        },
        success:(res)=>{
          this.setData({
            errorMessage:JSON.stringify(res) 
          })
          console.log(res.data)
          if (res.data.msg=='error'){
            this.setData({
              showfalse:true,
              warningMessage:"*用户名不存在或密码不正确",
              UserPwd:"",
              UserId:"",
            })
          } else {
            appInstance.globalData.userInfo = res.data.userData
            wx.reLaunch({
              url: '/pages/index/index',
            })
          }

        },
        fail:(res)=>{
          
          this.setData({
            errorMessage:JSON.stringify(res) 
          })
          console.log('error')
        }
      })
    }
  },
  GetCode(){
   let pro = new Promise((resolve,reject)=>{
      wx.login({
        success:res=>{
          resolve(res);
        }
      })
    }).then(res=>{
      console.log(res);
      if (res.code){
        return new Promise((resolve,reject)=>{
          wx.request({
            url: 'https://example.com/Login',
            data: {
              code: res.code
            },
            success:res=>{
              resolve(res)
            }
          })
        })
      } else {
        console.log('登录失败！' + res.errMsg)
      }
    })
    return pro;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // let pro = this.GetCode();
    // pro.then(res=>{
    //   console.log(res.data);
    // });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})