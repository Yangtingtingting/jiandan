// pages/industrysel/industrysel.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        industlist:[
            {
                title:'专业技能',
                worklist:[
                    {worktype:'快递派发',workId:"1"},
                    {worktype:'理货员',workId:"2"},
                    {worktype:'快递配送',workId:"3"},
                    {worktype:'打包分炼',workId:"4"},
                    {worktype:'地推拉访',workId:"5"},
                    {worktype:'快递配送',workId:"3"},
                    {worktype:'打包分炼',workId:"4"},
                    {worktype:'地推拉访',workId:"5"},
                    {worktype:'快递配送',workId:"3"},
                    {worktype:'打包分炼',workId:"4"},
                    {worktype:'地推拉访',workId:"5"},
                    {worktype:'快递配送',workId:"3"}
                ]
            },
            {
                title:'简单易做',
                worklist:[
                    {worktype:'快递派发',workId:"1"},
                    {worktype:'理货员',workId:"2"},
                    {worktype:'快递配送',workId:"3"},
                    {worktype:'打包分炼',workId:"4"},
                    {worktype:'地推拉访',workId:"5"},
                    {worktype:'快递配送',workId:"3"},
                    {worktype:'打包分炼',workId:"4"},
                    {worktype:'地推拉访',workId:"5"},
                    {worktype:'快递配送',workId:"3"},
                    {worktype:'打包分炼',workId:"4"},
                    {worktype:'地推拉访',workId:"5"},
                    {worktype:'快递配送',workId:"3"}
                ]
            },
            {
                title:'跑腿办事',
                worklist:[
                    {worktype:'快递派发',workId:"1"},
                    {worktype:'理货员',workId:"2"},
                    {worktype:'快递配送',workId:"3"},
                    {worktype:'打包分炼',workId:"4"},
                    {worktype:'地推拉访',workId:"5"},
                    {worktype:'快递配送',workId:"3"},
                    {worktype:'打包分炼',workId:"4"},
                    {worktype:'地推拉访',workId:"5"},
                    {worktype:'快递配送',workId:"3"},
                    {worktype:'打包分炼',workId:"4"},
                    {worktype:'地推拉访',workId:"5"},
                    {worktype:'快递配送',workId:"3"}
                ]
            },
        ]
    },
    selectwork:function(el){
        let workid = el.currentTarget.dataset.workId;
        wx.switchTab({
            // 拼接传参，标签上通过data-xxx="0000"，接收在onload里面0000
            // 通过option.传递的参数名
            url: '/pages/partjob/partjob',
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