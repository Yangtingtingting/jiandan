// pages/position_detail/position_detail.js
import {
  jobDetail,
  saveOrder,
  getAddressCode
} from '../../api/api'
const app = getApp();
const normalCallout = {
  id: 1,
  latitude: wx.getStorageSync('dealatitude'),
  longitude: 130.265330,
  iconPath: '/image/location.png',
  callout: {
    content: '文本内容',
    color: '#ff0000',
    fontSize: 14,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#000000',
    bgColor: '#fff',
    padding: 5,
    display: 'ALWAYS',
    textAlign: 'center'
  },
  // label: {
  //   content: 'label 文本',
  //   fontSize: 24,
  //   textAlign: 'center',
  //   borderWidth: 1,
  //   borderRadius: 5,
  //   bgColor: '#fff',
  //   padding: 5
  // }
}

const customCallout1 = {
  id: 2,
  latitude: wx.getStorageSync('dealatitude'),
  longitude: 113.323520,
  iconPath: '/image/location.png',
  customCallout: {
    anchorY: 0,
    anchorX: 0,
    display: 'ALWAYS'
  },
}

const customCallout2 = {
  id: 3,
  latitude: 23.096994,
  longitude: 113.324520,
  iconPath: '/image/location.png',
  customCallout: {
    anchorY: 10,
    anchorX: 0,
    display: 'ALWAYS',
  },
}

const customCallout3 = {
  id: 4,
  latitude: 23.095994,
  longitude: 113.325520,
  iconPath: '/image/location.png',
  jobid: '',
  customCallout: {
    anchorY: 0,
    anchorX: 20,
    display: 'ALWAYS',
  },
}

const allMarkers = [normalCallout, customCallout1, customCallout2, customCallout3]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jobdelist: [],
    isconfirm: false,
    partradio: '1',
    adressradio: '',
    jobDetailid: '',
    // 工作id
    bminid: '',
    latitude: '',
    longitude: ''
  },
  // 点击打开地图
  openmap: function () {
    let _this = this;
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success(res) {
        const latitude = _this.data.latitude
        const longitude = _this.data.longitude
        wx.openLocation({
          latitude,
          longitude,
          scale: 18
        })
      }
    })
  },
  // 上班时间
  partChang(event) {
    this.setData({
      partradio: event.detail,
    });
  },
  // 工作时间
  adressChang(event) {
    this.setData({
      adressradio: event.detail,
    });
  },
  getAddressCode: function () {
    let _this = this;
    getAddressCode({
      job_id: _this.data.jobDetailid
    }).then(res => {
      if (res.code == 0) {
        wx.setStorageSync('dealatitude', res.data.lat)
        wx.setStorageSync('dealongitude', res.data.lng)
        _this.setData({
          latitude: res.data.lat,
          longitude: res.data.lng
        })
        console.log(res.data)
      } else {
        wx.showToast({
          title: res.msg,
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.posiId)
    this.setData({
      jobDetailid: options.posiId
      // jobDetailid: 4
    });
    this.getdetailjob();
    this.getAddressCode();
  },
  // 立即报名
  oncesign: function () {
    let _this = this;
    console.log(_this.data.bminid)
    wx.showModal({
      title: '温馨提示',
      content: '确认要报名吗',
      success(res) {
        if (res.confirm) {
          saveOrder({
            job_id: _this.data.bminid
          }).then(res => {
            if (res.code == 0) {
              wx.showToast({
                title: '报名成功',
                icon: 'none',
                duration: 2000
              })
              wx.navigateTo({
                // 拼接传参，标签上通过data-xxx="0000"，接收在onload里面0000
                // 通过option.传递的参数名
                url: '/pages/sign_success/my_success',
                success: (result) => {

                },
                fail: () => {},
                complete: () => {}
              });
            } else {
              wx.showToast({
                title: res.msg,
                icon: 'none',
                duration: 2000
              })
            }
          })
        } else if (res.cancel) {
          // console.log('用户点击取消')
        }
      }
    })
    // 弹出确认报名信息
    // this.setData({
    //   isconfirm:true
    // })
  },
  // 报名取消
  diacancel: function () {
    this.setData({
      isconfirm: false
    })
  },
  // 获取兼职详情
  getdetailjob: function () {
    let _this = this;
    jobDetail({
      job_id: _this.data.jobDetailid
      // job_id: 4
    }).then(res => {
      if (res.code == 0) {
        _this.setData({
          jobdelist: res.data,
          bminid: res.data.id
        })
        console.log(res.data)
      } else {
        wx.showToast({
          title: res.msg,
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
  // 投递简历（现在已经隐藏）
  deliveryres: function (el) {
    // 这块需要判断是跳转到成功页面还是填写简历页面
    // console.log(el.currentTarget.dataset.posid)
    console.log(12346)
    wx.navigateTo({
      // 拼接传参，标签上通过data-xxx="0000"，接收在onload里面0000
      // 通过option.传递的参数名
      url: '/pages/sign_success/my_success',

      // url: '/pages/my_resume/my_resume',
      success: (result) => {
        this.setData({
          isconfirm: false
        })
      },
      fail: () => {},
      complete: () => {}
    });
  },
  // 地图
  markertap(e) {
    console.log('@@@ markertap', e)
  },
  callouttap(e) {
    console.log('@@@ callouttap', e)
  },
  labeltap(e) {
    console.log('@@@ labeltap', e)
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