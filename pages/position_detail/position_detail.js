// pages/position_detail/position_detail.js
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
        posilist: [{
            title: '餐饮小时工管饭',
            adress: '北京',
            platform: '平台担保',
            persnum: '可报名人数11',
            price: '300/天',
            posintro: '负责门店内商品、无聊和设备收货、监督和对所没收商品无聊和设备的数量、质量、效期、时间',
            workrequire: ["1、男女不限(18—45周岁)", "2、手机能上3G或4G网，会用电子地图；", "3、踏实肯干、吃苦耐劳、责任心强、服从管理；"],
            worktime: '每日工作8小时',
            pricestructure: [
                "正常干7000---9000元/月；", "努力干10000---15000元/月；", "使劲干15000元/月以上；"
            ],
            workplace: '北京市顺义区东兴第一社区 21号',
            latitude: 39.90960456049752,
            longitude: 116.3972282409668,
            markers: [],
            customCalloutMarkerIds: [],
            num: 1,
        }],
        isconfirm:false,
        partradio: '1',
        adressradio:''
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
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options.posiId)
    },
    // 立即报名
    oncesign:function(){
      this.setData({
        isconfirm:true
      })
    },
    // 报名取消
    diacancel:function(){
      this.setData({
        isconfirm:false
      })
    },
    // 投递简历
    deliveryres:function(el){
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
                  isconfirm:false
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