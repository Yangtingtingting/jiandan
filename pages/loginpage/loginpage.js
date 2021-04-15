// pages/loginpage/loginpage.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        phonenumber:'',
        marknumber:'',
        ismark:'',
        // 是否显示倒计时按钮
        iscountdown:"true",
        countdowntime:60,
        mark_inter:''
        // pageBackgroundColor: '#5cb85c'
    },
    // 获取电话号码
    changephone:function(e){
        console.log(e.detail.value)
        this.setData({
            phonenumber:e.detail.value
        })
    },
    // 获取验证码input
     changemark:function(e){
         console.log(this.data.iscountdown)
        this.setData({
            marknumber:e.detail.value,
        })
    },
    // 立即报名
    getsignup:function(e){
        this.setData({
            phonebot:"1px solid red",
            markbot:"1px solid red"
          });
        console.log(this.data.phonenumber,this.data.marknumber);
        
    },
    // 获取验证码
    vercode:function(){
        let _this = this;
        if(_this.data.iscountdown){
            _this.setData({
                iscountdown:false,
            })
            let currentTime = _this.data.countdowntime;
            clearInterval(_this.mark_inter);
            _this.mark_inter = setInterval(()=>{
                if(currentTime>0){
                    currentTime --;
                }else{
                    clearInterval(_this.mark_inter);
                    currentTime = 60;
                    _this.setData({
                        iscountdown:true
                    })
                }
                _this.setData({
                    countdowntime: currentTime
                })
            },1000)
         }
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