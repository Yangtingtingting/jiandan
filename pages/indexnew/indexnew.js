// pages/indexnew/indexnew.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        citys:'杭州',
        // 是否垂直滑动
        vertical: false,
        // 自动播放
        autoplay: true,
        // 滑动间隔时长
        interval: 2000,
        // 滑动动画时长
        duration: 500,
        circular:true,
        // 是否展示未登录弹框
        showDialog:false,
        getPhoneObj:{},
        // 轮播图
        bannerlist:[
            {
                srcpath:"../../images/bannerimg.png"
            },
            {
                srcpath:"../../images/bannerimg.png"
            },
            {
                srcpath:"../../images/bannerimg.png"
            }
        ],
        // 兼职列表
        partjoblist:[
            {
                title:'餐饮小时工',
                salary:'310/天',
                parttime:'03.30-04.01',
                partadress:'望京soho',
                id:'00123'
            },
            {
                title:'外卖小哥',
                salary:'340/天',
                parttime:'03.30-04.01',
                partadress:'望京soho',
                id:'00124'
            },
            {
                title:'超市售货员',
                salary:'310/天',
                parttime:'03.30-04.01',
                partadress:'望京soho',
                id:'00125'
            },
            {
                title:'北京百丽鞋业导购员',
                salary:'600/天',
                parttime:'03.30-04.01',
                partadress:'望京soho',
                id:'001256'
            },
            {
                title:'北京百丽鞋业导购员',
                salary:'900/天',
                parttime:'03.30-04.01',
                partadress:'鹿港小镇北京中海...',
                id:'001257'
            },
            {
                title:'打包装袋小时工',
                salary:'200/天',
                parttime:'03.30-04.01',
                partadress:'望京soho',
                id:'001255'
            },
            

        ]
    },
    // 是否登录弹框确定
    getPhoneNumber:function(e){
        console.log(e.detail,this.data.getPhoneObj.encryptedData);
        
    },
    loginfun:function(){
        let that = this
        const params = {
            encryptedData:this.data.getPhoneObj.encryptedData,
            iv:this.data.getPhoneObj.iv
        }
    },
    // 
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    // 列表详情
    positiondetail:function(el){
        console.log(el.currentTarget.dataset.posid);
        if(!this.data.showDialog){
            this.setData({
                showDialog:true 
            })
        }
        // wx.navigateTo({
        //     // 拼接传参，标签上通过data-xxx="0000"，接收在onload里面0000
        //     // 通过option.传递的参数名
        //     url: '/pages/position_detail/position_detail?posiId=' + el.currentTarget.dataset.posid,
        //     success: (result) => {

        //     },
        //     fail: () => {},
        //     complete: () => {}
        // });
    },
    // 地址选择
    goregion:function(){
        wx.navigateTo({
            url:"/pages/regionselect/regionselect",
            success: (result) => {

            },
            fail: () => {},
            complete: () => {}
        });
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