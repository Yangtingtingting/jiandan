// pages/my_wallet/my_wallet.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        incometol:'￥85132',
        iserrowprd:false,
        btnshow:false,
        // 体现金额
        refvalue:'',
        walllist:[
            {
                title:'微信提现',
                date:'2020-04-01',
                price:'+60元',
                src:'../../images/icon_wx.png'
            },
            {
                title:'微信提现',
                date:'2020-04-01',
                price:'+60元',
                src:'../../images/icon_wx.png'
            },
            {
                title:'微信提现',
                date:'2020-04-01',
                price:'+60元',
                src:'../../images/icon_wx.png'
            },
            {
                title:'积分兑换',
                date:'2020-04-01',
                price:'-20元',
                src:'../../images/icon_jb.png'
            },
            {
                title:'积分兑换',
                date:'2020-04-01',
                price:'-20元',
                src:'../../images/icon_jb.png'
            },
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    txprice:function(e){
        this.setData({
            refvalue: e.detail.value
        });
        console.log(this.data.refvalue.length)
        if(this.data.refvalue.length > 0){
            this.setData({
                btnshow:true
            });
        }else{
            this.setData({
                btnshow:false
            });
        }
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