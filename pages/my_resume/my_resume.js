// pages/my_resume/my_resume.js
let app = getApp();
const BASE_URL = app.globalData.BASE_URL;
import {
    saveResume,
    checkLogin,getResumeInfo
} from '../../api/api'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        checkLogin: true,
        sexshow: false,
        ageshow: false,
        diseaseshow: false,
        bodyshow: false,
        sickhis: '',
        columns: ['请选择', '男', '女'],
        agelist: ['请选择', '16-26', '27-37', '38-48'],
        diseaselist: ['请选择', '是', '否'],
        bodylist: ['请选择', '体弱', '正常', '良好', '非常好'],
        //选择性别
        changesex: '',
        confirmsex: '',
        changeage: '',
        confirmage: '',
        changebody: '',
        confirmbody: '',
        changedisea: '',
        confirmdisea: '',
        name: '',
        sex: '',
        sextext: '',
        disestext: '',
        agetext: '',
        bodytext: '',
        stature: "",
        perweight: '',
        phonenumber: '',
        byphonenumber: '',
        // 是否显示多选框
        ishistory: false,
        // 是否编辑信息
        isedit: false,
        option1: [{
                text: '全部商品',
                value: 0
            },
            {
                text: '新款商品',
                value: 1
            },
            {
                text: '活动商品',
                value: 2
            },
        ],
    },
    // 判断是否正常登录
    checkLogin: function () {
        let _this = this;
        checkLogin().then(res => {
            if (res.code == 0) {
                _this.setData({
                    checkLogin: true
                })
            } else {
                _this.setData({
                    checkLogin: false
                })
                wx.showToast({
                    title: res.msg,
                    icon: 'error',
                    duration: 2000
                })
                wx.navigateTo({
                    url: '/pages/loginpage/loginpage',
                    success: (result) => {

                    },
                    fail: () => {},
                    complete: () => {}
                });
            }
        })
    },
    // 选择性别
    sexPopup(event) {
        console.log(event.value)
        this.setData({
            sexshow: true,
            isedit: true
        });
    },
    // 选择年龄
    agePopup() {
        this.setData({
            ageshow: true,
            isedit: true
        });
    },
    // 选择身体状况
    bodyPopup() {
        this.setData({
            bodyshow: true,
            isedit: true
        });
    },
    // 疾病选择
    diseasePopup() {
        this.setData({
            diseaseshow: true,
            isedit: true
        });
    },
    // 年龄关闭
    ageClose: function () {
        this.setData({
            ageshow: false,
        });
    },
    // 疾病关闭
    diseaseClose: function () {
        this.setData({
            diseaseshow: true
        });
    },
    // 选择性别确定
    sexConfirm() {
        let confirmsexs = this.data.changesex;
        this.setData({
            sexshow: false,
            confirmsex: confirmsexs
        });
        switch (confirmsexs) {
            case 0:
                this.setData({
                    sextext: ''
                });
                break;
            case 1:
                this.setData({
                    sextext: '男'
                });
                break;
            case 2:
                this.setData({
                    sextext: '女'
                });
            default:
        }
    },
    // 性别取消
    sexCancel() {
        this.setData({
            sexshow: false,
            changesex: 0
        })
    },
    // 疾病取消
    diseasecancel(event) {
        this.setData({
            diseaseshow: false
        })
    },
    // 疾病确定
    diseaseconfirm() {
        let confirmdiseas = this.data.diseaseChange;
        this.setData({
            diseaseshow: false,
            confirmdisea: confirmdiseas
        })
        if (this.data.confirmdisea == '0') {
            this.setData({
                ishistory: true,
                disestext: '请选择'
            })
        
        }else if (this.data.confirmdisea == '1') {
            this.setData({
                ishistory: true,
                disestext: '是'
                // diseasevalue: '是'
            })
        } else if (this.data.confirmdisea == '2') {
            this.setData({
                ishistory: false,
                disestext: '否'
                // diseasevalue: '否'
            })
        }
    },
    // 年龄确定
    ageconfirm(event) {
        let confirmages = this.data.changeage;
        this.setData({
            ageshow: false,
            confirmage: confirmages
        })
        switch (confirmages) {
            case 0:
                this.setData({
                    agetext: ''
                });
                break;
            case 1:
                this.setData({
                    agetext: '16-26'
                });
                break;
            case 2:
                this.setData({
                    agetext: '27-37'
                });
                break;
            case 3:
                this.setData({
                    agetext: '38-48'
                });
                break;
            default:
        }
    },
    // 年龄取消
    agecancel() {
        this.setData({
            ageshow: false
        })
    },
    // 身体状况取消
    bodycancel() {
        this.setData({
            bodyshow: false,
            changebody: ''
        })
    },
    // 身体状况确定
    bodyconfirm() {
        let confirmbodys = this.data.changebody;
        this.setData({
            bodyshow: false,
            confirmbody: confirmbodys
        })
        switch (confirmbodys) {
            case 0:
                this.setData({
                    bodytext: ''
                });
                break;
            case 1:
                this.setData({
                    bodytext: '体弱'
                });
                break;
            case 2:
                this.setData({
                    bodytext: '正常'
                });
                break;
            case 3:
                this.setData({
                    bodytext: '良好'
                });
                break;
            case 2:
                this.setData({
                    bodytext: '非常好'
                });
                break;
            default:
        }
    },
    // 性别改变发生的变化
    sexChange(event) {
        const {
            picker,
            value,
            index
        } = event.detail;
        this.setData({
            changesex: event.detail.index,
        })
    },
    // 年龄选择
    ageChange(event) {
        const {
            picker,
            value,
            index
        } = event.detail;
        this.setData({
            changeage: event.detail.index
        })
    },
    // 身体状况改变
    bodyChange(event) {
        const {
            picker,
            value,
            index
        } = event.detail;
        this.setData({
            changebody: event.detail.index
        })
    },
    // 姓名改变
    nameChange: function (event) {
        this.setData({
            name: event.detail
        })
    },
    // 手机号改变
    phoneChange: function (event) {
        this.setData({
            phonenumber: event.detail
        })
    },
    // 备用手机号改变
    byphoneChange: function (event) {
        this.setData({
            byphonenumber: event.detail
        })
    },
    // 身高改变
    statureChange: function (event) {
        this.setData({
            stature: event.detail
        })
    },
    // 是否疾病史
    sickhisChange:function(event){
        this.setData({
            sickhis: event.detail
        });
    },
    // 体重改变
    weightChange: function (event) {
        this.setData({
            perweight: event.detail
        })
    },
    // 疾病改变
    diseaseChange: function (event) {
        this.setData({
            diseaseChange: event.detail.index
        });
    },
    // 保存信息
    savemsg: function () {
        let _this = this;
        // 验证是否登录
        _this.checkLogin();
        console.log(_this.data.sextext)
        if (!_this.data.name) {
            console.log(123)
            wx.showToast({
                title: '请填写姓名',
                icon: 'error',
                duration: 2000
            })
            return;
        } else if (!_this.data.sextext) {
            wx.showToast({
                title: '请选择性别',
                icon: 'error',
                duration: 2000
            })
            return;
        } else if (!_this.data.agetext) {
            wx.showToast({
                title: '请选择年龄',
                icon: 'error',
                duration: 2000
            })
            return;
        } else if (!_this.data.phonenumber) {
            wx.showToast({
                title: '请填写联系方式',
                icon: 'error',
                duration: 2000
            })
            return;
        } else if (!_this.data.byphonenumber) {
            wx.showToast({
                title: '请填写备用手机号',
                icon: 'error',
                duration: 2000
            })
            return;
        }else if(_this.data.ishistory){
            console.log(_this.data.sickhis)
            if(!_this.data.sickhis){
                wx.showToast({
                    title: '请输入疾病史',
                    icon: 'error',
                    duration: 2000
                })
                return;
            }
        }
        saveResume({
            realname: _this.data.name,
            sex: _this.data.sextext,
            age: _this.data.agetext,
            mobile: _this.data.phonenumber,
            mobile_backups: _this.data.byphonenumber,
            height: _this.data.stature,
            weight: _this.data.perweight,
            disease: _this.data.disestext,
            health:_this.data.bodytext,
            disease_detail:_this.data.sickhis
        }).then(res => {
            if(res.code == 0){
                wx.showToast({
                    title:'保存成功',
                    icon: 'success',
                    duration: 1000
                })
                wx.switchTab({
                    url: '/pages/mypersonal/mypersonal',
                    success: (result) => {

                    },
                    fail: () => {},
                    complete: () => {}
                });
            }else{
                wx.showToast({
                    title:res.msg,
                    icon: 'error',
                    duration: 2000
                })
            }
            
        })
    },
    //获取简历信息
    getmsg: function () {
        let _this = this;
        // 验证是否登录
        _this.checkLogin();
        getResumeInfo().then(res => {
            if(res.code == 0){
                 // 性别
                 if (!res.data.sex) {
                    _this.setData({
                        confirmsex: 0,
                        sextext:'请选择'
                    })
                } else if (res.data.sex == "男") {
                    _this.setData({
                        confirmsex: 1,
                        sextext:'男'
                    })
                } else if (res.data.sex == "女") {
                    _this.setData({
                        confirmsex: 2,
                        sextext:'女'
                    })
                }
                // 年龄
                if (!res.data.age) {
                    _this.setData({
                        confirmage: 0,
                        agetext:'请选择'
                    })
                } else if (res.data.age == '16-26') {
                    _this.setData({
                        confirmage: 1,
                        agetext:'16-26'
                    })
                } else if (res.data.age == '27-37') {
                    _this.setData({
                        confirmage: 2,
                        agetext:'27-37'
                    })
                } else if (res.data.age == '38-48') {
                    _this.setData({
                        confirmage: 3,
                        agetext:'38-48'
                    })
                }
                // 体重
                if (!res.data.weight || res.data.weight <= 0){
                    _this.setData({
                        perweight:''
                    })
                }
                // 身高
                if (!res.data.height || res.data.height < 0 ||res.data.height == 0){
                    console.log(res.data.height)
                    _this.setData({
                        stature:''
                    })
                }
                // 身体状况
                if (!res.data.health || res.data.health == 0) {
                    _this.setData({
                        confirmbody: 0,
                        bodytext:'请选择'
                    })
                } else if (res.data.health == '体弱') {
                    _this.setData({
                        confirmbody: 1,
                        bodytext:'体弱'
                    })
                } else if (res.data.health == '正常') {
                    _this.setData({
                        confirmbody: 2,
                        bodytext:'正常'
                    })
                } else if (res.data.health == '良好') {
                    _this.setData({
                        confirmbody: 3,
                        bodytext:'正常'
                    })
                }
                else if (res.data.health == '非常好') {
                    _this.setData({
                        confirmbody: 4,
                        bodytext:'正常'
                    })
                }
                // 疾病
                if (!res.data.disease || res.data.disease == 0) {
                    _this.setData({
                        confirmdisea: 0,
                        disestext:'请选择',
                    })
                } else if (res.data.disease == '是') {
                    _this.setData({
                        confirmdisea: 1,
                        disestext:'是',
                        ishistory:true
                    })
                } else if (res.data.disease == '否') {
                    _this.setData({
                        confirmdisea: 2,
                        disestext:'否'
                    })
                }
                _this.setData({
                    name: res.data.realname,
                    phonenumber: res.data.mobile,
                    byphonenumber: res.data.mobile_backups,
                    stature: res.data.height,
                    perweight: res.data.weight,
                    sickhis: res.data.disease_detail,
                })
            }else{
                wx.showToast({
                    title: res.msg,
                    icon: 'error',
                    duration: 2000
                })
            }
        })
        // wx.request({
        //     url: BASE_URL + '/api/Ucenter/getResumeInfo',
        //     header: {
        //         'Content-Type': 'application/x-www-form-urlencoded',
        //         'Jwttoken': wx.getStorageSync('logindata') // 默认值
        //     },
        //     success(res) {
        //         if (res.data.code == 0) {
        //             // 性别
        //             if (!res.data.data.sex) {
        //                 _this.setData({
        //                     confirmsex: 0,
        //                     sextext:'请选择'
        //                 })
        //             } else if (res.data.data.sex == "男") {
        //                 _this.setData({
        //                     confirmsex: 1,
        //                     sextext:'男'
        //                 })
        //             } else if (res.data.data.sex == "女") {
        //                 _this.setData({
        //                     confirmsex: 2,
        //                     sextext:'女'
        //                 })
        //             }
        //             // 年龄
        //             if (!res.data.data.age) {
        //                 _this.setData({
        //                     confirmage: 0,
        //                     agetext:'请选择'
        //                 })
        //             } else if (res.data.data.age == '16-26') {
        //                 _this.setData({
        //                     confirmage: 1,
        //                     agetext:'16-26'
        //                 })
        //             } else if (res.data.data.age == '27-37') {
        //                 _this.setData({
        //                     confirmage: 2,
        //                     agetext:'27-37'
        //                 })
        //             } else if (res.data.data.age == '38-48') {
        //                 _this.setData({
        //                     confirmage: 3,
        //                     agetext:'38-48'
        //                 })
        //             }
        //             // 体重
        //             if (!res.data.data.weight || res.data.data.weight <= 0){
        //                 _this.setData({
        //                     perweight:''
        //                 })
        //             }
        //             // 身高
        //             if (!res.data.data.height || res.data.data.height < 0 ||res.data.data.height == 0){
        //                 console.log(res.data.data.height)
        //                 _this.setData({
        //                     stature:''
        //                 })
        //             }
        //             // 身体状况
        //             if (!res.data.data.health || res.data.data.health == 0) {
        //                 _this.setData({
        //                     confirmbody: 0,
        //                     bodytext:'请选择'
        //                 })
        //             } else if (res.data.data.health == '体弱') {
        //                 _this.setData({
        //                     confirmbody: 1,
        //                     bodytext:'体弱'
        //                 })
        //             } else if (res.data.data.health == '正常') {
        //                 _this.setData({
        //                     confirmbody: 2,
        //                     bodytext:'正常'
        //                 })
        //             } else if (res.data.data.health == '良好') {
        //                 _this.setData({
        //                     confirmbody: 3,
        //                     bodytext:'正常'
        //                 })
        //             }
        //             else if (res.data.data.health == '非常好') {
        //                 _this.setData({
        //                     confirmbody: 4,
        //                     bodytext:'正常'
        //                 })
        //             }
        //             // 疾病
        //             if (!res.data.data.disease || res.data.data.disease == 0) {
        //                 _this.setData({
        //                     confirmdisea: 0,
        //                     disestext:'请选择',
        //                 })
        //             } else if (res.data.data.disease == '是') {
        //                 _this.setData({
        //                     confirmdisea: 1,
        //                     disestext:'是',
        //                     ishistory:true
        //                 })
        //             } else if (res.data.data.disease == '否') {
        //                 _this.setData({
        //                     confirmdisea: 2,
        //                     disestext:'否'
        //                 })
        //             }
        //             _this.setData({
        //                 name: res.data.data.realname,
        //                 phonenumber: res.data.data.mobile,
        //                 byphonenumber: res.data.data.mobile_backups,
        //                 stature: res.data.data.height,
        //                 perweight: res.data.data.weight,
        //                 sickhis: res.data.data.disease_detail,
        //             })
        //         } else {
        //             wx.showToast({
        //                 title: res.msg,
        //                 icon: 'error',
        //                 duration: 2000
        //             })
        //         }
        //     }
        // })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        if (this.data.diseaselist[0] == "是") {
            this.setData({
                ishistory: true,
                diseasevalue: '是'
            })
        };
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
        this.checkLogin();
        this.getmsg();
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
        var _this = this; //必须代码；
        if (_this.data.isedit) {
            wx.showModal({
                title: '提示',
                content: '是否保存修改信息？',
                success: function (res) {
                    if (res.confirm) {
                        // 调取保存简历
                        _this.savemsg();
                        var pages = getCurrentPages(); //当前页面栈
                        if (pages.length > 0) {
                            var beforePage = pages[pages.length - 1]; //获取上一个页面实例对象                      
                            // beforePage.reloadData(); //触发父页面中的方法 
                            _this.setData({
                                isedit: false
                            })
                        } else if (res.cancel) {
                            console.log('用户点击取消')
                        }
                    }
                }
            })
        };
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