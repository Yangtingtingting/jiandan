// pages/partrecord_deatil/partrecord_deatil.js
import {
  getOrderDetail,
  getAddressCode
} from '../../api/api'
const normalCallout = {
    id: 1,
    latitude: wx.getStorageSync('joblatitude'),
    longitude: wx.getStorageSync('joblongitude'),
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
    latitude: wx.getStorageSync('joblatitude'),
    longitude: wx.getStorageSync('joblongitude'),
    iconPath: '/image/location.png',
    customCallout: {
      anchorY: 0,
      anchorX: 0,
      display: 'ALWAYS'
    },
  }
  
  const customCallout2 = {
    id: 3,
    latitude: wx.getStorageSync('joblatitude'),
    longitude: wx.getStorageSync('joblongitude'),
    iconPath: '/image/location.png',
    customCallout: {
      anchorY: 10,
      anchorX: 0,
      display: 'ALWAYS',
    },
  }
  
  const customCallout3 = {
    id: 4,
    latitude: wx.getStorageSync('joblatitude'),
    longitude: wx.getStorageSync('joblongitude'),
    iconPath: '/image/location.png',
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
        latitude: '',
        longitude: '',
        markers: [],
        customCalloutMarkerIds: [],
        num: 1,
        // 是否未报名状态
        issign:'false',
        detaillist:{},
        recordid:'',
        jobid:''
    },
    // 点击打开地图
    openmap: function(){
      let _this = this;
      wx.getLocation({
       type: 'gcj02', //返回可以用于wx.openLocation的经纬度
       success (res) {
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
    getOrderDetail:function(){
      let _this = this;
      getOrderDetail({
        order_id:_this.data.recordid
      }).then(res => {
        if(res.code == 0){
          _this.setData({
            detaillist:res.data
          })
        }else{
          wx.showToast({
            title: res.msg,
            icon: 'none',
            duration: 2000
        })
        }
      })
    },
    getAddressCode:function(){
      let _this = this;
      getAddressCode({
        job_id:_this.data.jobid
      }).then(res => {
        if(res.code == 0){
          wx.setStorageSync('joblatitude',res.data.lat)
          wx.setStorageSync('joblongitude',res.data.lng)
          _this.setData({
            latitude:res.data.lat,
            longitude:res.data.lng
          })
          console.log(res.data)
        }else{
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
      this.setData({
        recordid:options.recordid,
        jobid:options.jobid
      })
      this.getOrderDetail();
      this.getAddressCode()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        this.mapCtx = wx.createMapContext('myMap')
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