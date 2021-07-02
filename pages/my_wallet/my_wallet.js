// pages/my_wallet/my_wallet.js
import {
    getfitList,
    tixian
} from '../../api/api'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        incometol: '',
        iserrowprd: false,
        btnshow: false,
        // 体现金额
        refvalue: '',
        walllist: [],
        pagenum: 1,
        totalpage: '',
        isshowmsg: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    // 获取列表数据
    getProfitList: function () {
        let _this = this;
        // console.log(wx.getStorageSync('logindata'))
        getfitList({
            page: _this.data.pagenum
        }).then(res => {
            if (res.code == 0) {
                if (res.data.totalpage < 1) {
                    _this.setData({
                        isshowmsg: true
                    })
                } else {
                    _this.setData({
                        walllist: res.data.list,
                        incometol: res.data.money,
                        totalpage: res.data.totalpage
                    })
                }
            } else {
                wx.showToast({
                    title: res.msg,
                    icon: 'none',
                    duration: 2000
                })
            }
        })
    },
    // 加载更多
    loadmore: function () {
        let pagenum = this.data.pagenum;
        if (pagenum >= this.data.totalpage) {
            wx.showToast({
                title: '没有更多数据了',
                icon: 'none',
                duration: 2000
            })
        } else {
            pagenum++;
            this.setData({
                pagenum: pagenum
            });
            this.getProfitList();
        }
    },
    // 提现进度
    txstatustab: function () {
        wx.navigateTo({
            url: '/pages/my_txdetail/my_txdetail',
            success: (result) => {

            },
            fail: () => {},
            complete: () => {}
        });
    },
    // 立即提现
    tixian: function () {
        let _this = this;
        tixian({
            money: _this.data.refvalue
        }).then(res => {
            if (res.code == 0) {
                _this.setData({
                    refvalue: '',
                    btnshow: false
                });
                wx.showToast({
                    title: res.msg,
                    icon: 'none',
                    duration: 2000
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
    txprice: function (e) {
        var money;
        if (/^(\d?)+(\.\d{0,2})?$/.test(e.detail.value)) { //正则验证，提现金额小数点后不能大于两位数字
            money = e.detail.value;
        } else {
            money = e.detail.value.substring(0, e.detail.value.length - 1);
        }
        this.setData({
            refvalue: money
        });
        // console.log(this.data.refvalue)
        if (this.data.refvalue.length > 0) {
            this.setData({
                btnshow: true
            });
        } else {
            this.setData({
                btnshow: false
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
        this.getProfitList()
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