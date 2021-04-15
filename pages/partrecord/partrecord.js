// pages/partrecord/partrecord.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        active:0,
        recordlist:[
            {
                retime:"2021-03-31 09：21",
                restatucs:1,
                retitle:"四元桥宜家家居电话联络兼职...",
                reprice:'300/天',
                readress:"北京市顺义区东兴第一社区 21号",
                detailid:'12335'
            },
            {
                retime:"2021-03-31 09：21",
                restatucs:2,
                retitle:"四元桥宜家家居电话联络兼职...",
                reprice:'300/天',
                readress:"北京市顺义区东兴第一社区 21号",
                detailid:'12335'
            },
            {
                retime:"2021-03-31 09：21",
                restatucs:3,
                retitle:"京东超市送货员...",
                reprice:'300/天',
                readress:"北京市顺义区东兴第一社区 21号",
                detailid:'1233533'
            },
            {
                retime:"2021-03-31 09：21",
                restatucs:4,
                retitle:"四元桥宜家家居电话联络兼职...",
                reprice:'300/天',
                readress:"北京市顺义区东兴第一社区 21号",
                detailid:'124335'
            },
            {
                retime:"2021-03-31 09：21",
                restatucs:4,
                retitle:"四元桥宜家家居电话联络兼职...",
                reprice:'300/天',
                readress:"北京市顺义区东兴第一社区 21号",
                detailid:'612335'
            },
            {
                retime:"2021-03-31 09：21",
                restatucs:4,
                retitle:"四元桥宜家家居电话联络兼职...",
                reprice:'300/天',
                readress:"北京市顺义区东兴第一社区 21号",
                detailid:'1238735'
            },
            {
                retime:"2021-03-31 09：21",
                restatucs:4,
                retitle:"四元桥宜家家居电话联络兼职...",
                reprice:'300/天',
                readress:"北京市顺义区东兴第一社区 21号",
                detailid:'1235635'
            },
        ]
    },
    // tab切换
    onChange(event) {
        console.log(event.detail.index)
        // wx.showToast({
        //   title: `切换到标签 ${event.detail.name}`,
        //   icon: 'none',
        // });
      },
      recorddetail:function(el){
        console.log(el.currentTarget.dataset.recordid);
        wx.navigateTo({
            // 拼接传参，标签上通过data-xxx="0000"，接收在onload里面0000
            // 通过option.传递的参数名
            url: '/pages/partrecord_deatil/partrecord_deatil?recordid=' + el.currentTarget.dataset.recordid,
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