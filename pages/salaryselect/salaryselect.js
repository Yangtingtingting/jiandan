// pages/salaryselect/salaryselect.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        salaryintervallist:[
            {
                moneyinter:"50-100元",
                type:1
            },
            {
                moneyinter:"200-300元",
                type:2
            },
            {
                moneyinter:"400-500元",
                type:3
            },
            {
                moneyinter:"600-700元",
                type:4
            }
        ],
        intertypes:''
    },
    salarytap:function(el){
        getApp().globalData.intertype = el.currentTarget.dataset.intertype;
        this.setData({
            intertypes : el.currentTarget.dataset.intertype
        })
        wx.switchTab({
            // 拼接传参，标签上通过data-xxx="0000"，接收在onload里面0000
            // 通过option.传递的参数名
            url: '/pages/partjob/partjob',
            success: (result) => {

            },
            fail: () => {},
            complete: () => {}
        });
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
        if(!this.data.intertypes){
            getApp().globalData.intertype = -1;
        }
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