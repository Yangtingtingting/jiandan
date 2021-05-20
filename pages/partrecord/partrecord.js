// pages/partrecord/partrecord.js
import {
    getOrder
} from '../../api/api'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        active: 0,
        recordlist: [],
        pagenum: 1,
        listindex:1,
        totalpage:'',
        isdatashow:true
    },
    // 获取数据
    getlist: function (listindex,parms,list) {
        let _this = this;
        getOrder({
            status: listindex,
            page: _this.data.pagenum
        }).then(res => {
            if (res.code == 0) {
                _this.setData({
                    totalpage:res.data.totalpage
                })
                if(res.data.list.length == 0 && res.data.totalpage == 0){
                    _this.setData({
                        isdatashow:false
                    })
                }else if(res.data.totalpage > 1){
                    _this.setData({
                        showmore:true,
                        nomsg:false
                    })
                }else if(res.data.totalpage <= 1){
                    _this.setData({
                        // nomsg:true,
                        showmore:false
                    })
                }else{
                    _this.setData({
                        showmore:false,
                        // nomsg:false
                    })
                }
                if(parms == 1){
                    _this.setData({
                        totalpage:res.data.totalpage,
                        recordlist:res.data.list,
                    })
                }if(parms == 2){
                    let datalist = res.data.list;
                    datalist.forEach((item,index) => {
                        list.push(item)
                    })
                    _this.setData({
                        recordlist:list
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
    // tab切换
    onChange(event) {
        let index = (event.detail.index) + 1;
        this.setData({
            listindex:index,
            pagenum:1,
            totalpage:'',
            isdatashow:true
        })
        this.getlist(this.data.listindex,1);
    },
    // 详情页
    recorddetail: function (el) {
        wx.navigateTo({
            // 拼接传参，标签上通过data-xxx="0000"，接收在onload里面0000
            // 通过option.传递的参数名
            url: '/pages/partrecord_deatil/partrecord_deatil?recordid=' + el.currentTarget.dataset.recordid+'&jobid='+el.currentTarget.dataset.jobid,
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
        this.getlist(this.data.listindex,1);
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
        let pagenum = this.data.pagenum;
        console.log(pagenum, this.data.totalpage)
        // if(this.data.totalpage <= 1)
        if (pagenum >= this.data.totalpage) {
            this.setData({
                showmore: false,
            })
        }
        if (pagenum >= this.data.totalpage) {
            wx.showToast({
                title: '加载到底了哦',
                icon: 'none',
                duration: 2000
            })
        } else {
            pagenum++;
            this.setData({
                pagenum: pagenum,
            })
            let arrlist = this.data.recordlist;
            this.getlist(1,2, arrlist);
        }
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})