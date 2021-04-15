// pages/partrecord_deatil/partrecord_deatil.js
const normalCallout = {
    id: 1,
    latitude: 44.519960,
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
    latitude: 23.097994,
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
        latitude: 39.90960456049752,
        longitude: 116.3972282409668,
        markers: [],
        customCalloutMarkerIds: [],
        num: 1,
        // 是否未报名状态
        issign:'false',
        detaillist:[
            {
                status:'兼职已结束',
                date:'2020-04-01',
                title:'京东超市送货员',
                partsource:'京东超市',
                partnumber:'6513206150561320',
                partcpncat:'王麻子',
                partphone:'78945612302',
                partadress:'北京市顺义区东兴第一社区 21号',
                partintroduce:"负责门店内商品无聊和设备收货监督和对所没收商品、无聊和设备的数量质量效期时间"
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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