// pages/indexnew/indexnew.js
import {
    getIndexData,
    getJoblist
} from '../../api/api'
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        /**
         * 是否定位我的位置
         */
        myCity: {
            type: Boolean,
            value: false,
        },
        isUserLocation: '',
        citys: '',
        citytt: '',
        shengpro: '',
        citypro: '',
        // 是否垂直滑动
        vertical: false,
        // 自动播放
        autoplay: true,
        // 滑动间隔时长
        interval: 2000,
        // 滑动动画时长
        duration: 500,
        circular: true,
        // 是否展示未登录弹框
        showDialog: false,
        listerro: '',
        slisterro: '',
        getPhoneObj: {},
        addr: "",
        // 轮播图
        bannerlist: [{
                srcpath: "../../images/bannerimg.png"
            },
            {
                srcpath: "../../images/bannerimg.png"
            },
            {
                srcpath: "../../images/bannerimg.png"
            }
        ],
        // 兼职列表
        partjoblist: [],
        // 授权遮罩层
        shouquanDialog: false,
        userInfo: {},
        cityName: '',
        pagenum: 1,
        // 展示的省份
        showsheng:'',
        searchvalue:'',
        ishowchange:true,
        spagenum:1,
        snomsg:false,
        ishowchanges:false,
        totalpsge:'',
        islogin:false
    },
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
    // 解析经纬度
    getDistrict(latitude, longitude) {
        let _this = this;
        let keys = 'OE3BZ-2JIKD-RIP4C-P66GG-SMGWF-WOFXU'
        wx.request({
            url: `https://apis.map.qq.com/ws/geocoder/v1/?location=${latitude},${longitude}&key=${keys}`,
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            success: function (res) {
                // 省
                let province = res.data.result.address_component.province;
                // // 市
                let city = res.data.result.address_component.city;
                // // 区
                let district = res.data.result.address_component.district;
                wx.setStorageSync('shprovince', province);
                wx.setStorageSync('citypro', province);
                let sheng = '';
                if (province.length > 3) {
                    sheng = shprovince.slice(0, 3);
                    _this.setData({
                        showsheng:sheng
                    })
                    _this.setData({
                        citys:shprovince.slice(0, 3)
                    })
                    wx.setStorageSync('showsheng', sheng);
                    
                } else {
                    _this.setData({
                        citys: province,
                        citytt:province
                    })
                    wx.setStorageSync('showsheng', province);
                }
                _this.setData({
                    citys: province
                })
            }
        })
    },
    // 获取首页列表
    getindexlist: function () {
        let _this = this;
        getIndexData({
            province: wx.getStorageSync('showsheng'),
            page: _this.data.pagenum
        }).then(res => {
            if (res.code == 0) {
                _this.setData({
                    partjoblist: res.data
                })
            }else if(res.code == 43){
                _this.setData({
                    listerro: res.msg
                })
            } else {
                wx.showToast({
                    title: res.msg,
                    icon: 'none',
                    duration: 2000
                })
            }
        })
    },
    // 加载更多换一换
    loadmore: function () {
        let pagenum = this.data.pagenum;
        if (this.data.listerro == '没有新数据了') {
            wx.showToast({
                title: '没有更多数据了',
                icon: 'none',
                duration: 2000
            })
        } else {
            pagenum++;
            this.setData({
                province: wx.getStorageSync('shprovince'),
                pagenum: pagenum
            });
            this.getindexlist();
        }
    },
    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getSetting();
        this.setData({
            citys:wx.getStorageSync('showsheng')
        })
        this.getindexlist();
    },
    // 列表详情
    positiondetail: function (el) {
        let isloginstaus = wx.getStorageSync('isloginstaus');
        if (isloginstaus) {
            this.setData({
                showDialog: false
            });
            wx.navigateTo({
                // 拼接传参，标签上通过data-xxx="0000"，接收在onload里面0000
                // 通过option.传递的参数名
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
    goregion: function () {
        wx.navigateTo({
            url: "/pages/regionselect/regionselect",
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
    getSetting() {
        let that = this
        // 查看是否授权
        wx.getSetting({
            success(res) {
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                    wx.getUserInfo({
                        success: function (res) {
                            wx.setStorageSync('userInfo', res.userInfo)
                            that.setData({
                                shouquanDialog: false,
                                userInfo: res.userInfo
                            })
                        }
                    })
                }
                // console.log(res.authSetting['scope.userLocation'])
                that.setData({
                    isUserLocation: res.authSetting['scope.userLocation']
                })
                if (!res.authSetting['scope.userLocation']) {
                    // console.log(res.authSetting['scope.userLocation'])
                    // 2.如果接口不能调用，请求调用
                    // 3.获取当前的地理位置、速度
                    wx.getLocation({
                        type: 'wgs84',
                        success: function (getLocationRes) {
                            that.getDistrict(getLocationRes.latitude, getLocationRes.longitude);
                            that.setData({
                                cityName: '',
                                isUserLocation: true
                            });
                        },
                        fail: function (getLocationRes) {
                            wx.showModal({
                                title: '猜您位置88',
                                content: '北京',
                                cancelText: '手动定位',
                                confirmText: '继续使用',
                                success(result) {
                                    if (result.confirm) {
                                        // wx.setStorageSync('currentAddress', {
                                        //     latitude: 39.90998,
                                        //     longitude: 116.65714,
                                        //     address: '北京',
                                        //     showsheng
                                        // })
                                        wx.setStorageSync('showsheng','北京'),
                                        that.setData({
                                            province: wx.getStorageSync('showsheng'),
                                            pagenum: pagenum
                                        });
                                        this.getindexlist();
                                        // that.setData({
                                        //     cityName: '北京',
                                        //     cityObj: {
                                        //         latitude: 39.90998,
                                        //         longitude: 116.65714,
                                        //         address: '北京'
                                        //     },
                                        //     isUserLocation: true
                                        // })
                                        that.teacherInfoList()
                                    } else if (result.cancel) {
                                        wx.navigateTo({
                                            url: '/pages/regionselect/regionselect'
                                        })
                                    }
                                }
                            })

                        }
                    })
                }
            }
        })
    },
    searchvalue:function(e){
        this.setData({
            searchvalue:e.detail.value
        })
    },
    // 加载更多换一换sousuo
    sloadmore: function () {
        let spagenum = this.data.spagenum;
        if (this.data.totalpage >= 0) {
            wx.showToast({
                title: '没有更多数据了',
                icon: 'none',
                duration: 2000
            })
        } else {
            spagenum++;
            this.setData({
                // province: wx.getStorageSync('shprovince'),
                spagenum: spagenum
            });
            this.searchlist();
        }
    },
    searchlist:function(){
        let _this = this;
        if (_this.data.islogin) {
            _this.setData({
                ishowchange:false
            })
            getJoblist({
                page: _this.data.spagenum,
                search: _this.data.searchvalue,
            }).then(res => {
                if (res.code == 0) {
                    _this.setData({
                        totalpage:res.data.totalpage,
                        partjoblist: res.data.list
                    })
                    if(res.data.list.length < 1){
                        _this.setData({
                            snomsg:true,
                            ishowchange:false
                        })
                    }else{
                        _this.setData({
                            // 换一换搜索
                            ishowchanges:true,
                            ishowchange:false,
                            snomsg:false
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
        }else{
            _this.setData({
                showDialog: true
            })
        }
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        this.setData({
            citys:wx.getStorageSync('showsheng'),
            islogin: wx.getStorageSync('isloginstaus')
        });
        this.getindexlist();
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