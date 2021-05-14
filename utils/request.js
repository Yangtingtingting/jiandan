let isShowLoading = false
const request = (data) => {
  if (!data.hideloading) {
    if (!isShowLoading) {
      wx.showLoading({
        title: '请稍等...',
        icon: 'loading'
      })
      isShowLoading = true
    }
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: data.url,
      method: data.method,
      data: data.data,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Jwttoken': wx.getStorageSync('logindata') || ''
      },
      success(res) {
        // let flag = true
        setTimeout(function () {
          if (isShowLoading) {
            wx.hideLoading();
            isShowLoading = false
          }
        }, 1000)
        resolve(res.data)
        // 如果登录失效，则跳转登录页面重新登录
        if (res.data.code == 12) {
          wx.setStorageSync('isloginstaus', false);
          wx.showToast({
            title: '登录失效',
            icon: 'error',
            duration: 2000
          })
          wx.navigateTo({
            url: '/pages/loginpage/loginpage',
            success: (result) => {

            },
            fail: () => {},
            complete: () => {}
          });
        }
      },
      fail(error) {
        setTimeout(function () {
          if (isShowLoading) {
            wx.hideLoading();
            isShowLoading = false
            wx.showToast({
              title: error,
              icon: 'none',
              duration: 2000
            })
          }
        }, 1000)

        reject(error)
      },
      complete(aaa) {
        // 加载完成
      }
    })
  })
}
module.exports = {
  request
}