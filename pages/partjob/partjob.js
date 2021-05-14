// pages/partjob/partjob.js
import {
    getJoblist
} from '../../api/api'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        citys: "",
        // 薪资选择类型
        intertype: '',
        citytype: '',
        // 兼职列表
        partjoblist: [],
        totalpage: '',
        pagenum: 1,
        showmore: false,
        islogin: false,
        showDialog: false,
        // 没有数据
        nomsg: false,
        hyxzid: '',
        slaryid: '',
        searvalue:''
    },
    // 薪资选择
    salaryselect: function (el) {
        let _this = this;
        if (_this.data.islogin) {
            _this.setData({
                showDialog: false
            })
            wx.navigateTo({
                url: "/pages/salaryselect/salaryselect",
                success: (result) => {

                },
                fail: () => {},
                complete: () => {}
            });
        } else {
            _this.setData({
                showDialog: true
            })
        }
    },
    // 地区选择
    regionselect: function (el) {
        let _this = this;
        if (_this.data.islogin) {
            _this.setData({
                showDialog: false
            })
            wx.navigateTo({
                url: "/pages/regionselect/regionselect",
                success: (result) => {

                },
                fail: () => {},
                complete: () => {}
            });
        } else {
            _this.setData({
                showDialog: true
            })
        }
    },
    // 行业选择
    workselect: function () {
        let _this = this;
        if (_this.data.islogin) {
            _this.setData({
                showDialog: false
            })
            wx.navigateTo({
                url: "/pages/industrysel/industrysel",
                success: (result) => {

                },
                fail: () => {},
                complete: () => {}
            });
        } else {
            _this.setData({
                showDialog: true
            })
        }

    },
    // 跳兼职详情
    gopartdetail: function (el) {
        let _this = this;
        if (_this.data.islogin) {
            _this.setData({
                showDialog: false
            })
            wx.navigateTo({
                url: '/pages/position_detail/position_detail?posiId=' + el.currentTarget.dataset.posid,
                success: (result) => {

                },
                fail: () => {},
                complete: () => {}
            });
        } else {
            this.setData({
                showDialog: true
            })
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 获取城市名
        this.setData({
            citys: wx.getStorageSync('showsheng'),
        });
        // 获取
        this.getJoblist(1);
    },
    alljob: function () {
        let _this = this;
        if (_this.data.islogin) {
            _this.setData({
                showDialog: false
            })
            this.setData({
                pagenum: 1,
                citytype: '',
                hyxzid: '',
                slaryid: '',
                partjoblist: []
            })
            _this.getJoblist(1);
        } else {
            _this.setData({
                showDialog: true
            })
        }
    },
    // 获取列表信息
    getJoblist: function (parms, list) {
        let _this = this;
        getJoblist({
            page: _this.data.pagenum,
            city_id: _this.data.citytype,
            cate2_id: _this.data.hyxzid,
            slary_id: _this.data.slaryid,
            search:_this.data.searvalue
        }).then(res => {
            if (res.code == 0) {
                _this.setData({
                    totalpage: res.data.totalpage
                })
                if (res.data.totalpage > 1) {
                    this.setData({
                        showmore: true,
                        nomsg: false
                    })
                } else if (res.data.totalpage <= 0) {
                    this.setData({
                        nomsg: true,
                        showmore: false
                    })
                } else {
                    this.setData({
                        showmore: false,
                        nomsg: false
                    })
                }
                if (parms == 1) {
                    _this.setData({
                        totalpage: res.data.totalpage,
                        partjoblist: res.data.list
                    })
                }
                if (parms == 2) {
                    let datalist = res.data.list;
                    datalist.forEach((item, index) => {
                        list.push(item)
                    })
                    _this.setData({
                        partjoblist: list
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
    // 弹框去登录
    gologins: function (e) {
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
    // 地址选择
    goregion: function () {
        wx.navigateTo({
            url: "/pages/regionselect/regionselect",
            success: (result) => {

            },
            fail: () => {},
            complete: () => {}
        });
    },
    // 搜索input框内容
    searvalue:function(e){
        this.setData({
            searvalue:e.detail.value
        })
    },
    searchlist:function(){
        if (this.data.islogin) {
            this.getJoblist(1)
        }else{
            this.setData({
                showDialog: true
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
        // 获取intertype值 如果没有赋值-1
        // console.log(wx.getStorageSync('showsheng'))
        // 获取城市名
        this.setData({
            citys: wx.getStorageSync('showsheng'),
            // 获取登录状态
            islogin: wx.getStorageSync('isloginstaus')
        })
        // 薪资选择
        let intertype = getApp().globalData.intertype;
        // 地区选择
        // let citytype = getApp().globalData.citytype;
        if (this.data.hyxzid) {
            this.getJoblist(1);
        } else if (this.data.slaryid) {
            this.getJoblist(1);
        } else if (this.data.citytype) {
            this.getJoblist(1);
        }
        // 行业选择
        // let hyxz = wx.getStorageSync('workid');
        // if(!intertype){
        //     getApp().globalData.intertype = -1;
        // }else{
        //     this.setData({
        //         intertype:getApp().globalData.intertype
        //     });
        //     console.log(this.data.intertype)
        // }
        // if(!citytype){
        //     getApp().globalData.citytype = '';
        // }else{
        //     this.setData({
        //         citytype:getApp().globalData.citytype
        //     });
        //     this.getJoblist(1);
        // }
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        this.setData({
            showDialog:false
        })
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
            let arrlist = this.data.partjoblist;
            this.getJoblist(2, arrlist);
        }
        // }else{
        //     this.setData({
        //         showmore:false,
        //     })
        // wx.showToast({
        //     title: '没有更多数据了',
        //     icon: 'none',
        //     duration: 2000
        // })
        // }
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})