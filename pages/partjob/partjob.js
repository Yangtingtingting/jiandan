// pages/partjob/partjob.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        citys:"杭州",
        // 薪资选择类型
        intertype:'',
        citytype:'',
        // 兼职列表
        partjoblist:[
            {
                title:'餐饮小时工',
                salary:'310/天',
                parttime:'03.30-04.01',
                partadress:'望京soho'
            },
            {
                title:'外卖小哥',
                salary:'340/天',
                parttime:'03.30-04.01',
                partadress:'望京soho'
            },
            {
                title:'超市售货员',
                salary:'310/天',
                parttime:'03.30-04.01',
                partadress:'望京soho'
            },
            {
                title:'北京百丽鞋业导购员',
                salary:'600/天',
                parttime:'03.30-04.01',
                partadress:'望京soho'
            },
            {
                title:'北京百丽鞋业导购员',
                salary:'900/天',
                parttime:'03.30-04.01',
                partadress:'鹿港小镇北京中海...'
            },
            {
                title:'打包装袋小时工',
                salary:'200/天',
                parttime:'03.30-04.01',
                partadress:'望京soho'
            },
            

        ]
    },
    // 薪资选择
    salaryselect:function(el){
        wx.navigateTo({
            url:"/pages/salaryselect/salaryselect",
            success: (result) => {

            },
            fail: () => {},
            complete: () => {}
        });
    },
    // 地区选择
    regionselect:function(el){
        wx.navigateTo({
            url:"/pages/regionselect/regionselect",
            success: (result) => {

            },
            fail: () => {},
            complete: () => {}
        });
    },
    // 行业选择
    workselect:function(){
        wx.navigateTo({
            url:"/pages/industrysel/industrysel",
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
        // 获取intertype值 如果没有赋值-1
        // 薪资选择
        let intertype = getApp().globalData.intertype;
        // 地区选择
        let citytype = getApp().globalData.citytype;
        if(!intertype){
            getApp().globalData.intertype = -1;
        }else{
            this.setData({
                intertype:getApp().globalData.intertype
            });
            console.log(this.data.intertype)
        }
        if(!citytype){
            getApp().globalData.citytype = -1;
        }else{
            this.setData({
                citytype:getApp().globalData.citytype
            });
            console.log(this.data.citytype)
        }
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
        // 页面卸载时赋值-1,让intertype回归最初的值
        getApp().globalData.intertype = -1;
        getApp().globalData.citytype = -1;
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