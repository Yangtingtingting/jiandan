// pages/mypersonal/mypersonal.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        headsrc:'../../images/head.jpg',
        per_name:'小果冻',
        per_id:'191205'
    },
    // 我的简历
    toresume:function(){
        wx.navigateTo({
            // 拼接传参，标签上通过data-xxx="0000"，接收在onload里面0000
            // 通过option.传递的参数名
            // url: '/pages/addressli_edit/addressli_edit?edit_addressid=' + el.currentTarget.dataset.addressliid,
            url:"/pages/my_resume/my_resume",
            success: (result) => {

            },
            fail: () => {},
            complete: () => {}
        });
    },
    // 微信分享
    goshare:function(){
        wx.navigateTo({
            url:"/pages/my_share/my_share",
            success: (result) => {

            },
            fail: () => {},
            complete: () => {}
        });
    },
    // 我的钱包
    gowallet:function(){
        wx.navigateTo({
            url:"/pages/my_wallet/my_wallet",
            success: (result) => {

            },
            fail: () => {},
            complete: () => {}
        });
    },
    // 兼职记录
    partrecord:function(el){
        wx.navigateTo({
            // 拼接传参，标签上通过data-xxx="0000"，接收在onload里面0000
            // 通过option.传递的参数名
            // url: '/pages/addressli_edit/addressli_edit?edit_addressid=' + el.currentTarget.dataset.addressliid,
            url:"/pages/partrecord/partrecord",
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