// pages/loginpage/loginpage.js
import {
    getmarknum,
    login
} from '../../api/api'
let app = getApp().globalData;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        phonenumber: '',
        marknumber: '',
        ismark: '',
        // 是否显示倒计时按钮
        iscountdown: "true",
        countdowntime: 60,
        mark_inter: '',
        // 是否可点击立即报名
        loginbtn: false,
        errophone: false,
        erromark: false,
        // sence值
        querydata:''
        // pageBackgroundColor: '#5cb85c'
    },
    // 获取电话号码
    changephone: function (e) {
        this.setData({
            phonenumber: e.detail.value
        })
    },
    // 获取验证码input
    changemark: function (e) {
        this.setData({
            marknumber: e.detail.value,
        });
        if (this.data.marknumber) {
            this.setData({
                loginbtn: true,
            });
        }
    },
    // 立即登录
    getsignup: function (e) {
        let _this = this;
        if(this.data.marknumber.length != 6){
            wx.showToast({
                title: '请输入正确的验证码',
                icon: 'error',
                duration: 2000
            })
            return;
        }
        const parms = {
            mobile: _this.data.phonenumber,
            vcode: _this.data.marknumber,
        }
        login({
            mobile: _this.data.phonenumber,
            vcode: _this.data.marknumber,
            invite:_this.data.querydata
        }).then(res => {
            if (res.code == 0) {
                // wx.showToast({
                //     title: '登录成功',
                //     icon: 'success',
                //     duration: 1000
                // })
                wx.setStorageSync('isloginstaus', true);
                wx.setStorageSync('logindata', res.data);
                wx.navigateTo({
                    url: "/pages/my_resume/my_resume",
                    success: (result) => {
        
                    },
                    fail: () => {},
                    complete: () => {}
                });
            } else {
                //登录错误时显示红色的下划线 10手机 11验证码不够 12验证码错误
                _this.setData({
                    phonebot: "1px solid red",
                    markbot: "1px solid red"
                });
                wx.showToast({
                    title: res.msg,
                    icon: 'error',
                    duration: 2000
                })
            }
        })
    },
    // 获取验证码
    vercode: function () {
        let _this = this;
        console.log(123)
        if (!_this.data.phonenumber || _this.data.phonenumber.length < 11) {
            wx.showToast({
                title: '请输入正确的手机号码',
                icon: 'none',
                duration: 2000
            })
            return false;
        }
        if (_this.data.iscountdown) {
            _this.setData({
                iscountdown: false,
            })
            let currentTime = _this.data.countdowntime;
            clearInterval(_this.mark_inter);
            _this.mark_inter = setInterval(() => {
                if (currentTime > 0) {
                    currentTime--;
                } else {
                    clearInterval(_this.mark_inter);
                    currentTime = 20;
                    _this.setData({
                        iscountdown: true
                    })
                }
                _this.setData({
                    countdowntime: currentTime
                })
            }, 1000)
            const parms = {
                mobile: _this.data.phonenumber
            }
            getmarknum(parms).then(res => {
                if (res.code == 0) {

                } else {
                    wx.showToast({
                        title: res.msg,
                        icon: 'none',
                        duration: 2000
                    })
                }
            })
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        if(options.scene){
            this.setData({
                querydata: options.scene
            })
        }else{
            this.setData({
                querydata: ''
            })
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