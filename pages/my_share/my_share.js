// pages/my_share/my_share.js
import {
    getRecommend,
    getUserQcodePic
} from '../../api/api'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        sharelist: [],
        inperson: '',
        inmoney: '',
        listerro: '',
        pagenum: 1,
        totalpage: '',
        isshowmsg: false,
        sharesrc: '',
        showdia: false,
        shareshow: false,
        invitexode: ''
    },
    // 取消二维码
    cancelcon: function () {
        this.setData({
            shareshow: false
        })
    },
    // 获取分享二维码
    getUserQcodePic: function () {
        getUserQcodePic({}).then(res => {
            if (res.code == 0) {
                // console.log(res.data.invite_img)
                this.setData({
                    sharesrc: res.data.invite_img,
                    invitexode: res.data.invite_code
                })
            } else {

            }
        })
    },
    // 点击出图片保存二维码
    savecodeimg: function () {
        let that = this;
        // let imgsrc = 'https:///www.' + (that.data.sharesrc).slice(7);
        let imgsrc = that.data.sharesrc;
        // console.log(imgsrc)
        //获取相册授权
        wx.getSetting({
            success(res) {
                if (!res.authSetting['scope.writePhotosAlbum']) {
                    wx.authorize({
                        scope: 'scope.writePhotosAlbum',
                        success() {
                            console.log('授权成功');
                            that.downloadimg(imgsrc)
                        }
                    })
                } else {
                    that.downloadimg(imgsrc)
                }
            }
        })
        // 保存图片通过长按图片
        // if(this.data.shareshow){
        //     this.setData({
        //         shareshow:false
        //     })
        // }else{
        //     this.setData({
        //         shareshow:true
        //     })
        // }
    },
    // 点击保存图片
    downloadimg: function (){
        var imgslice = (this.data.sharesrc).slice(7);
        var imgSrc = 'https://www.' +imgslice;
        wx.downloadFile({
          url: imgSrc,
          success: function (res) {
            console.log(res); //图片保存到本地
            wx.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success: function (data) {
                console.log(data);
                wx.showToast({
                  title: '保存成功，快去朋友圈分享吧！',
                  icon: 'none',
                  duration: 1000
                })
              },
              fail: function (err) {
                console.log(err);
                if (err.errMsg === "saveImageToPhotosAlbum:fail auth deny") {
                  wx.openSetting({
                    success(settingdata) {
                      console.log(settingdata)
                      if (settingdata.authSetting['scope.writePhotosAlbum']) {
                        wx.showToast({
                          title: '图片已保存',
                          icon:'none',
                          duration:1000
                        })
                        console.log('获取权限成功，给出再次点击图片保存到相册的提示。')
                      } else {
                        console.log('获取权限失败，给出不给权限就无法正常使用的提示')
                      }
                    }
                  })
                }
              }
            })
          }
        })
      
      },
    // 长按保存图片（暂未使用）
    saveImage(e) {
        let url = this.data.sharesrc
        // let url = 'http://jtegger.com/public/upload/qcode_3.png'
        // console.log(sharesrc)
        //用户需要授权
        wx.getSetting({
            success: (res) => {
                if (!res.authSetting['scope.writePhotosAlbum']) {
                    wx.authorize({
                        scope: 'scope.writePhotosAlbum',
                        success: () => {
                            // 同意授权
                            this.saveImg1(url);
                        },
                        fail: (res) => {
                            console.log(res);
                        }
                    })
                } else {
                    // 已经授权了
                    this.saveImg1(url); //用户授权后，调用saveImg()方法，进行图片的保存
                }
            },
            fail: (res) => {
                console.log(res);
            }
        })
    },
    // 长按保存图片（暂未使用）
    saveImg1(url) {
        wx.getImageInfo({
            src: url,
            success: (res) => {
                let path = res.path;
                wx.saveImageToPhotosAlbum({
                    filePath: path,
                    success: (res) => {
                        console.log(res);
                    },
                    fail: (res) => {
                        console.log(res);
                    }
                })
            },
            fail: (res) => {
                console.log(res);
            }
        })
    },
    getsharelist: function () {
        let _this = this;
        getRecommend({
            page: _this.data.pagenum
        }).then(res => {
            if (res.code == 0) {
                if (res.data.total_page < 1) {
                    _this.setData({
                        isshowmsg: true
                    })
                } else {
                    _this.setData({
                        sharelist: res.data.list,
                        inperson: res.data.yaoqing,
                        inmoney: res.data.fanli,
                        totalpage: res.data.total_page
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
    // 加载更多
    loadmore: function () {
        let pagenum = this.data.pagenum;
        if (pagenum >= this.data.totalpage) {
            wx.showToast({
                title: '没有更多数据了',
                icon: 'none',
                duration: 2000
            })
        } else {
            pagenum++;
            this.setData({
                pagenum: pagenum
            });
            this.getsharelist();
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getsharelist();
        this.getUserQcodePic()
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
    onShareAppMessage: function (res) {
        if(res.from == 'button'){
            // console.log(res.target,res)
        }
        return{
            title:'煎蛋小程序',
            path:'pages/indexnew/indexnew',
            imageUrl:'../../images/imgshare.png'
        }
    }
})