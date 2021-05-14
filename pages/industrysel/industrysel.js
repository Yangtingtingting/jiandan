// pages/industrysel/industrysel.js
import {
    getSelectCondition
} from '../../api/api'
let app = getApp().globalData;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        industlist: [{
                title: '专业技能',
                worklist: [{
                        worktype: '快递派发',
                        workId: "1"
                    },
                    {
                        worktype: '理货员',
                        workId: "2"
                    },
                    {
                        worktype: '快递配送',
                        workId: "3"
                    },
                    {
                        worktype: '打包分炼',
                        workId: "4"
                    },
                    {
                        worktype: '地推拉访',
                        workId: "5"
                    },
                    {
                        worktype: '快递配送',
                        workId: "3"
                    },
                    {
                        worktype: '打包分炼',
                        workId: "4"
                    },
                    {
                        worktype: '地推拉访',
                        workId: "5"
                    },
                    {
                        worktype: '快递配送',
                        workId: "3"
                    },
                    {
                        worktype: '打包分炼',
                        workId: "4"
                    },
                    {
                        worktype: '地推拉访',
                        workId: "5"
                    },
                    {
                        worktype: '快递配送',
                        workId: "3"
                    }
                ]
            },
            {
                title: '简单易做',
                worklist: [{
                        worktype: '快递派发',
                        workId: "1"
                    },
                    {
                        worktype: '理货员',
                        workId: "2"
                    },
                    {
                        worktype: '快递配送',
                        workId: "3"
                    },
                    {
                        worktype: '打包分炼',
                        workId: "4"
                    },
                    {
                        worktype: '地推拉访',
                        workId: "5"
                    },
                    {
                        worktype: '快递配送',
                        workId: "3"
                    },
                    {
                        worktype: '打包分炼',
                        workId: "4"
                    },
                    {
                        worktype: '地推拉访',
                        workId: "5"
                    },
                    {
                        worktype: '快递配送',
                        workId: "3"
                    },
                    {
                        worktype: '打包分炼',
                        workId: "4"
                    },
                    {
                        worktype: '地推拉访',
                        workId: "5"
                    },
                    {
                        worktype: '快递配送',
                        workId: "3"
                    }
                ]
            },
            {
                title: '跑腿办事',
                worklist: [{
                        worktype: '快递派发',
                        workId: "1"
                    },
                    {
                        worktype: '理货员',
                        workId: "2"
                    },
                    {
                        worktype: '快递配送',
                        workId: "3"
                    },
                    {
                        worktype: '打包分炼',
                        workId: "4"
                    },
                    {
                        worktype: '地推拉访',
                        workId: "5"
                    },
                    {
                        worktype: '快递配送',
                        workId: "3"
                    },
                    {
                        worktype: '打包分炼',
                        workId: "4"
                    },
                    {
                        worktype: '地推拉访',
                        workId: "5"
                    },
                    {
                        worktype: '快递配送',
                        workId: "3"
                    },
                    {
                        worktype: '打包分炼',
                        workId: "4"
                    },
                    {
                        worktype: '地推拉访',
                        workId: "5"
                    },
                    {
                        worktype: '快递配送',
                        workId: "3"
                    }
                ]
            },
        ],
        joblist: []
    },
    selectwork: function (el) {
        let workid = el.currentTarget.dataset.id;
        let pages = getCurrentPages();
        let prevPage = pages[pages.length - 2];
        prevPage.setData({ // 将我们想要传递的参数在这里直接setData。上个页面就会执行这里的操作。
            hyxzid: workid,
        })
        console.log(workid)
        
    },
    // 获取行业选择列表
    getindulist: function () {
        let _this = this;
        getSelectCondition().then(res => {
            if (res.code == 0) {
                let arrlist = res.data.cate;
                let newarr = [];
                arrlist.forEach((item, index) => {
                    var obj = {};
                    obj.text = item.text;
                    obj.id = item.id;
                    if (item.cate2[0].length > 0) {
                        obj.cate2 = item.cate2[0];
                    }
                    newarr.push(obj);
                })
                console.log(newarr)
                _this.setData({
                    industlist: newarr
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
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getindulist()
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