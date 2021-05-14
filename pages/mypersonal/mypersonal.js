// pages/mypersonal/mypersonal.js;
let app = getApp(); 
const BASE_URL =  app.globalData.BASE_URL;
import {
    getUserInfo
} from '../../api/api'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        headsrc:'../../images/loginhead.png',
        per_name:'',
        per_id:'',
        islogin:false,
        // 余额
        reminsum:''
    },
    // 我的简历
    toresume:function(){
        if(this.data.islogin){
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
        }else{
            wx.showToast({
                title:'请先登录！',
                icon: 'none',
                duration: 2000
            })
        }
    },
    // 微信分享
    goshare:function(){
        if(this.data.islogin){
            wx.navigateTo({
                url:"/pages/my_share/my_share",
                success: (result) => {
    
                },
                fail: () => {},
                complete: () => {}
            });
        }else{
            wx.showToast({
                title:'请先登录！',
                icon: 'none',
                duration: 2000
            })
        }
        
    },
    // 我的钱包
    gowallet:function(){
        if(this.data.islogin){
            wx.navigateTo({
                url:"/pages/my_wallet/my_wallet",
                success: (result) => {
    
                },
                fail: () => {},
                complete: () => {}
            });
        }else{
            wx.showToast({
                title:'请先登录！',
                icon: 'none',
                duration: 2000
            })
        }
    },
    // 兼职记录
    partrecord:function(el){
        console.log(this.data.islogin)
        if(this.data.islogin){
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
        }else{
            wx.showToast({
                title:'请先登录！',
                icon: 'none',
                duration: 2000
            })
        }
        
    },
    // 未登录时去登陆
    gologin :function(){
        wx.navigateTo({
            // 拼接传参，标签上通过data-xxx="0000"，接收在onload里面0000
            // 通过option.传递的参数名
            url: '/pages/loginpage/loginpage',
            success: (result) => {

            },
            fail: () => {},
            complete: () => {}
        });
    },
    // 联系客服
    callphone:function(){
        console.log(123)
        // wx.makePhoneCall({
        //     phoneNumber: '15346942315' //仅为示例，并非真实的电话号码
        // })
        wx.navigateTo({
            url:"/pages/concatservice/concatservice",
            success: (result) => {

            },
            fail: () => {},
            complete: () => {}
        });
    },
    // 获取页面信息
    getperrson:function(){
        let _this = this;
        if(!this.data.islogin){
            _this.setData({
                reminsum:false
            })
            return;
        }
        getUserInfo().then(res => {
            if(res.code == 0){
                _this.setData({
                    per_name:res.data.realname,
                    per_id:res.data.mobile,
                    reminsum:res.data.money
                })
            }else{
                // wx.showToast({
                //     title:'',
                //     icon: 'error',
                //     duration: 2000
                // })
            }
        })
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
        // wx.getStorageSync('logindata');
        // wx.getStorageSync('isloginstaus');
        //获取登录状态
        this.setData({
            islogin: wx.getStorageSync('isloginstaus')
        });
        // 获取个人信息
        this.getperrson();
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