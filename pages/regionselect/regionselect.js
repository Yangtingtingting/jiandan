// pages/regionselect/regionselect.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        mainActiveIndex: 0,
        activeId: null,
        isSelect:'false',
        areaitems: [{
                // 导航名称
                text: '北京',
                // 导航名称右上角徽标，1.5.0 版本开始支持
                badge: "",
                // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
                dot: false,
                // 禁用选项
                disabled: false,
                // 该导航下所有的可选项
                children: [{
                        // 名称
                        text: '全城',
                        // id，作为匹配选中状态的标识
                        id: 0,
                        // 禁用选项
                        disabled: false,
                    },
                    {
                        // 名称
                        text: '东城区',
                        // id，作为匹配选中状态的标识
                        id: 1,
                        // 禁用选项
                        disabled: false,
                    },
                    {
                        text: '西城区',
                        id: 2,
                    },
                    {
                        text: '通州区',
                        id: 3,
                    },
                ],
            },
            {
                // 导航名称
                text: '天津',
                // 导航名称右上角徽标，1.5.0 版本开始支持
                badge: "",
                // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
                dot: false,
                // 禁用选项
                disabled: false,
                // 该导航下所有的可选项
                children: [{
                        // 名称
                        text: '南开区',
                        // id，作为匹配选中状态的标识
                        id: 5,
                        // 禁用选项
                        disabled: true,
                    },
                    {
                        text: '滨河',
                        id: 56,
                    },
                    {
                        text: '新区',
                        id: 7,
                    },
                ],
            },
            {
                // 导航名称
                text: '天津',
                // 导航名称右上角徽标，1.5.0 版本开始支持
                badge: "",
                // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
                dot: false,
                // 禁用选项
                disabled: false,
                // 该导航下所有的可选项
                children: [{
                        // 名称
                        text: '南开区',
                        // id，作为匹配选中状态的标识
                        id: 5,
                        // 禁用选项
                        disabled: true,
                    },
                    {
                        text: '滨河',
                        id: 56,
                    },
                    {
                        text: '新区',
                        id: 7,
                    },
                ],
            },
            {
                // 导航名称
                text: '天津',
                // 导航名称右上角徽标，1.5.0 版本开始支持
                badge: "",
                // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
                dot: false,
                // 禁用选项
                disabled: false,
                // 该导航下所有的可选项
                children: [{
                        // 名称
                        text: '南开区',
                        // id，作为匹配选中状态的标识
                        id: 5,
                        // 禁用选项
                        disabled: true,
                    },
                    {
                        text: '滨河',
                        id: 56,
                    },
                    {
                        text: '新区',
                        id: 7,
                    },
                ],
            },
            {
                // 导航名称
                text: '天津',
                // 导航名称右上角徽标，1.5.0 版本开始支持
                badge: "",
                // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
                dot: false,
                // 禁用选项
                disabled: false,
                // 该导航下所有的可选项
                children: [{
                        // 名称
                        text: '南开区',
                        // id，作为匹配选中状态的标识
                        id: 5,
                        // 禁用选项
                        disabled: true,
                    },
                    {
                        text: '滨河',
                        id: 56,
                    },
                    {
                        text: '新区',
                        id: 7,
                    },
                ],
            },
            {
                // 导航名称
                text: '天津',
                // 导航名称右上角徽标，1.5.0 版本开始支持
                badge: "",
                // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
                dot: false,
                // 禁用选项
                disabled: false,
                // 该导航下所有的可选项
                children: [{
                        // 名称
                        text: '南开区',
                        // id，作为匹配选中状态的标识
                        id: 5,
                        // 禁用选项
                        disabled: true,
                    },
                    {
                        text: '滨河',
                        id: 56,
                    },
                    {
                        text: '新区',
                        id: 7,
                    },
                ],
            },
            {
                // 导航名称
                text: '天津',
                // 导航名称右上角徽标，1.5.0 版本开始支持
                badge: "",
                // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
                dot: false,
                // 禁用选项
                disabled: false,
                // 该导航下所有的可选项
                children: [{
                        // 名称
                        text: '南开区',
                        // id，作为匹配选中状态的标识
                        id: 5,
                        // 禁用选项
                        disabled: true,
                    },
                    {
                        text: '滨河',
                        id: 56,
                    },
                    {
                        text: '新区',
                        id: 7,
                    },
                ],
            },
            {
                // 导航名称
                text: '天津',
                // 导航名称右上角徽标，1.5.0 版本开始支持
                badge: "",
                // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
                dot: false,
                // 禁用选项
                disabled: false,
                // 该导航下所有的可选项
                children: [{
                        // 名称
                        text: '南开区',
                        // id，作为匹配选中状态的标识
                        id: 5,
                        // 禁用选项
                        disabled: true,
                    },
                    {
                        text: '滨河',
                        id: 56,
                    },
                    {
                        text: '新区',
                        id: 7,
                    },
                ],
            },
            {
                // 导航名称
                text: '天津',
                // 导航名称右上角徽标，1.5.0 版本开始支持
                badge: "",
                // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
                dot: false,
                // 禁用选项
                disabled: false,
                // 该导航下所有的可选项
                children: [{
                        // 名称
                        text: '南开区',
                        // id，作为匹配选中状态的标识
                        id: 5,
                        // 禁用选项
                        disabled: true,
                    },
                    {
                        text: '滨河',
                        id: 56,
                    },
                    {
                        text: '新区',
                        id: 7,
                    },
                ],
            },
            {
                // 导航名称
                text: '天津',
                // 导航名称右上角徽标，1.5.0 版本开始支持
                badge: "",
                // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
                dot: false,
                // 禁用选项
                disabled: false,
                // 该导航下所有的可选项
                children: [{
                        // 名称
                        text: '南开区',
                        // id，作为匹配选中状态的标识
                        id: 5,
                        // 禁用选项
                        disabled: true,
                    },
                    {
                        text: '滨河',
                        id: 56,
                    },
                    {
                        text: '新区',
                        id: 7,
                    },
                ],
            },
            {
                // 导航名称
                text: '天津',
                // 导航名称右上角徽标，1.5.0 版本开始支持
                badge: "",
                // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
                dot: false,
                // 禁用选项
                disabled: false,
                // 该导航下所有的可选项
                children: [{
                        // 名称
                        text: '南开区',
                        // id，作为匹配选中状态的标识
                        id: 5,
                        // 禁用选项
                        disabled: true,
                    },
                    {
                        text: '滨河',
                        id: 56,
                    },
                    {
                        text: '新区',
                        id: 7,
                    },
                ],
            },
            {
                // 导航名称
                text: '天津',
                // 导航名称右上角徽标，1.5.0 版本开始支持
                badge: "",
                // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
                dot: false,
                // 禁用选项
                disabled: false,
                // 该导航下所有的可选项
                children: [{
                        // 名称
                        text: '南开区',
                        // id，作为匹配选中状态的标识
                        id: 5,
                        // 禁用选项
                        disabled: true,
                    },
                    {
                        text: '滨河',
                        id: 56,
                    },
                    {
                        text: '新区',
                        id: 7,
                    },
                ],
            },
            {
                // 导航名称
                text: '天津',
                // 导航名称右上角徽标，1.5.0 版本开始支持
                badge: "",
                // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
                dot: false,
                // 禁用选项
                disabled: false,
                // 该导航下所有的可选项
                children: [{
                        // 名称
                        text: '南开区',
                        // id，作为匹配选中状态的标识
                        id: 5,
                        // 禁用选项
                        disabled: true,
                    },
                    {
                        text: '滨河',
                        id: 56,
                    },
                    {
                        text: '新区',
                        id: 7,
                    },
                ],
            },
            {
                // 导航名称
                text: '天津',
                // 导航名称右上角徽标，1.5.0 版本开始支持
                badge: "",
                // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
                dot: false,
                // 禁用选项
                disabled: false,
                // 该导航下所有的可选项
                children: [{
                        // 名称
                        text: '南开区',
                        // id，作为匹配选中状态的标识
                        id: 5,
                        // 禁用选项
                        disabled: true,
                    },
                    {
                        text: '滨河',
                        id: 56,
                    },
                    {
                        text: '新区',
                        id: 7,
                    },
                ],
            }
        ]
    },
    // 左侧导航栏
    onClickNav({detail = {}}){
        this.setData({
            mainActiveIndex: detail.index || 0,
        });
        console.log(this.data.mainActiveIndex)
    },
    // 右侧导航栏
    onClickItem({detail = {}})  {
        const activeId = this.data.activeId === detail.id ? null : detail.id;
        getApp().globalData.citytype =activeId;
        this.setData({
            activeId,
            isSelect:'true',
        });
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
        //         let province_temp = {};
        // let province = msg.row_data.record；
        // province.forEach(item => {
        //         province_temp[item.i] = item.n;//属性名 = 属性值
        // })
        // this.areaList['province_list'] = province_temp;
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
        let _this = this
        if(!(_this.data.isSelect)){
            getApp().globalData.citytype = -1;
            this.setData({
                isSelect:false
            })
            // getApp().globalData.intertype = "默认杭州的id,前一个页面不刷新..."
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