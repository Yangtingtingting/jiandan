// app.js
// import {
//   checkLogin
// } from 'api/api'
App({
  onLaunch() {
    // console.log()
    // // 判断登录状态
    // if(!wx.getStorageSync('isloginstaus')){
    //   if (options.query.scene) {
    //     setTimeout(() => {
    //       wx.navigateTo({
    //         url: '/pages/loginpage/loginpage?queryscene=' + options.query.scene,
    //         success: (result) => {
    
    //         },
    //         fail: () => {},
    //         complete: () => {}
    //       });
    //     },1)
    //   }
    // }
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
    const updateManager = wx.getUpdateManager()
    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      // console.log(res.hasUpdate)
    })
    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success(res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        }
      })
    })
    updateManager.onUpdateFailed(function () {
      // 新版本下载失败
    })
  },
  globalData: {
    userInfo: null,
    //BASE_URL:'https://xcx.yougababy.com' //项目测试地址或项目正式地址
    //BASE_URL:'http://192.168.0.105:8089'
    // BASE_URL:'www.jtegger.com',
    BASE_URL: 'https://www.jtegger.com'
  }
})