// pages/salaryselect/salaryselect.js
import {
    getSelectCondition
} from '../../api/api'
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
    // 获取列表信息
    getsalary:function(){
        let _this = this;
        getSelectCondition().then(res => {
            if (res.code == 0) {
                let arrlist = res.data.slary;
                _this.setData({
                    salaryintervallist: arrlist
                })
            } else {
                wx.showToast({
                    title: res.msg,
                    icon: 'none',
                    duration: 2000
                })
            }
        })
    },
    salarytap:function(el){
        let salaryid = el.currentTarget.dataset.id;
        let pages = getCurrentPages();
        let prevPage = pages[pages.length - 2];
        prevPage.setData({ // 将我们想要传递的参数在这里直接setData。上个页面就会执行这里的操作。
            slaryid: salaryid,
        })
        wx.navigateBack({
            delta: 1  // 返回上一级页面。
        })
        console.log(salaryid)
        // this.setData({
        //     intertypes : el.currentTarget.dataset.intertype
        // })
        // wx.switchTab({
        //     // 拼接传参，标签上通过data-xxx="0000"，接收在onload里面0000
        //     // 通过option.传递的参数名
        //     url: '/pages/partjob/partjob',
        //     success: (result) => {

        //     },
        //     fail: () => {},
        //     complete: () => {}
        // });
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
        this.getsalary()
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