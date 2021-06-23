// pages/my_txdetail/my_txdetail.js
import {
    zuixintixian
} from '../../api/api'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        datalist:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.datalist()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },
    datalist: function () {
        let _this = this;
        zuixintixian().then(res => {
            console.log(res.data)
            if (res.code == 0) {
                console.log(res.data)
                _this.setData({
                    datalist:res.data
                })
            } else {
                _this.setData({
                    refvalue: '',
                    btnshow: false
                });
                wx.showToast({
                    title: res.msg,
                    icon: 'none',
                    duration: 2000
                })
            }
        })
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