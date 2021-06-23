// pages/salarypage/salarypage.js
// 上下文对象
import {
  getgift,
  winresult,
  getfitList
} from '../../api/api'
let app = getApp(); 
const BASE_URL =  app.globalData.BASE_URL
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 收入明细列表
    salarylist: [],
    // 中奖转盘
    awardsConfig: {
      chance: true,
      awards: [],
    },
    awardsList: [],
    animationData: {},
    btnDisabled: '',
    chishu: 3,
    // 获奖ID
    awrdid:'',
    // 获奖index
    awrdindex:'',
    // 是否登录
    islogin:false,
    pagenum:1,
    incometol:'',
    totalpage:'',
    isshowmsg:false,
    isgift:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // that.luckDrawStart();
    // this.getProfitList();
  },
  getProfitList:function(){
    let _this = this;
    // wx.request({
    //   url: BASE_URL+ '/api/Ucenter/getProfitList',
    //   data:{
    //     page:_this.data.pagenum
    //   },
    //   header: {
    //       'Content-Type': 'application/x-www-form-urlencoded',
    //       'Jwttoken':wx.getStorageSync('logindata') // 默认值
    //   },
    //   success (res) {
    //     console.log(res.data)
    //       if(res.data.code == 0){
    //         console.log(res.data.dat)
    //            _this.setData({
    //             salarylist:res.data.data.list,
    //             incometol:res.data.data.money,
    //             totalpage:res.data.data.totalpage
    //         })
    //       }else{
    //           wx.showToast({
    //               title:res.msg,
    //               icon: 'error',
    //               duration: 2000
    //           })
    //       }
    //   }
    // })
    getfitList({
        page:_this.data.pagenum
    }).then(res => {
        if(res.code == 0){
          if(res.data.totalpage < 1){
            _this.setData({
              isshowmsg:true
            })
          }else{
            _this.setData({
              salarylist:res.data.list,
              incometol:res.data.money,
              totalpage:res.data.totalpage
          })
          }
        }else{
            // wx.showToast({
            //     title: res.msg,
            //     icon: 'none',
            //     duration: 2000
            // })
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
        this.getProfitList();
    }
}, 
  // 获奖结果
  winresult : function(){
    let that = this;
    let awards = this.data.awardsConfig.awards;
    let awardid = "";
    winresult().then(res => {
      if (res.code == 0) {
        awardid = res.data.id;
        this.setData({
            isgift:res.data.status
        })
        awards.forEach((item, i) => {
            if(item.id == awardid){
              this.setData({
                awrdindex:i,
                isgift:''
             })
            }
        })
        that.playReward();
      } else {
        wx.showToast({
          title: res.msg,
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
  // 获奖列表接口
  getgift : function() {
    let that = this;
    getgift().then(res => {
      if (res.code == 0) {
        that.setData({
          "awardsConfig.awards": res.data?res.data:[]
        })
        that.drawAwardRoundel();
      } else {
        wx.showToast({
          title: res.msg,
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
  /**
   * 启动抽奖
   */
  luckDrawStart: function () {
    // 阻止运动中重复点击
    if (!that.data.is_play) {
      // 设置标识在运动中
      that.setData({
        is_play: true
      });
      // 重置参数
      that.luckDrawReset();
      // 几率随机，也可从服务端获取几率
      that.setData({
        random_angle: Math.ceil(Math.random() * 360)
      });
      // 运动函数
      setTimeout(that.luckDrawChange, that.data.use_speed);
    };
  },
  /**
   * 转盘运动
   */
  luckDrawChange: function () {
    // 继续运动
    if (that.data.change_angle >= that.data.base_circle_num * 360 + that.data.random_angle) { // 已经到达结束位置
      // 提示中奖，
      that.getLuckDrawResult();
      // 运动结束设置可用抽奖的次数和激活状态设置可用
      that.luckDrawEndset();
    } else { // 运动
      if (that.data.change_angle < that.data.low_circle_num * 360) { // 正常转速
        // console.log("正常转速")
        that.data.use_speed = that.data.nor_speed
      } else if (that.data.change_angle >= that.data.low_circle_num * 360 && that.data.change_angle <= that.data.base_circle_num * 360) { // 减速圈
        // console.log("减速圈")
        that.data.use_speed = that.data.low_speed
      } else if (that.data.change_angle > that.data.base_circle_num * 360) { // 结束圈
        // console.log("结束圈")
        that.data.use_speed = that.data.end_speed
      }
      // 累加变化计数
      that.setData({
        change_angle: that.data.change_angle + that.data.add_angle >= that.data.base_circle_num * 360 + that.data.random_angle ? that.data.base_circle_num * 360 + that.data.random_angle : that.data.change_angle + that.data.add_angle
      });
      setTimeout(that.luckDrawChange, that.data.use_speed);
    }

  },
  /**
   * 重置参数
   */
  luckDrawReset: function () {
    // 转动开始时首次点亮的位置，可自定义设置
    that.setData({
      start_angle: 0
    });
    // 当前速度，与正常转速值相等
    that.setData({
      use_speed: that.data.nor_speed
    });
    // 中奖索引，也是随机数，也是结束圈停止的位置，这个值采用系统随机或者接口返回
    that.setData({
      random_angle: 0
    });
    // 变化计数，0开始，必须实例有12个奖项，基本是6圈，那么到结束这个值=6*12+random_number；同样change_num/12整除表示走过一整圈
    that.setData({
      change_angle: 0
    });
  },
  /**
   * 获取抽奖结果
   */
  getLuckDrawResult: function () {
    for (var j = 0; j < that.data.Jack_pots.length; j++) {
      if (that.data.random_angle >= that.data.Jack_pots[j].startAngle && that.data.random_angle <= that.data.Jack_pots[j].endAngle) {
        that.setData({
          result_val: that.data.Jack_pots[j].val
        });
        wx.showModal({
          title: '抽奖结果',
          content: that.data.Jack_pots[j].val,
        })
        break;
      };
    };
  },

  /**
   * 更新状态（运动结束设置可用抽奖的次数和激活状态设置可用）
   */
  luckDrawEndset: function () {
    // 是否在运动中，避免重复启动bug
    that.setData({
      is_play: false
    })
    // 可用抽奖的次数，可自定义设置
    that.setData({
      available_num: that.data.available_num - 1
    });
  },
  // 去提现
  gowallet: function () {
    wx.navigateTo({
      url: "/pages/my_wallet/my_wallet",
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
    this.setData({
        islogin:wx.getStorageSync('isloginstaus')
    })
    if(this.data.islogin){
      this.getgift();
      this.getProfitList();
    }
    // this.drawAwardRoundel(); //初始化
  },
  //画抽奖圆盘  
  drawAwardRoundel() {
    let awards = this.data.awardsConfig.awards;
    let awardsList = [];
    let turnNum = 1 / awards.length * 360; // 文字旋转 turn 值
    // 奖项列表  
    awards.forEach((item, i) => {
      awardsList.push({
        turn: i * turnNum + 'deg',
        lineTurn: i * turnNum + turnNum / 2 + 'deg',
        award: item.name
      });
    })
    this.setData({
      btnDisabled: this.data.awardsConfig.chance ? '' : 'disabled',
      awardsList: awardsList
    })
  },
  // 去登陆
  gologin:function(){
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
  //画抽奖圆盘  
  // drawAwardRoundel() {
  //   let awards = this.data.awardsConfig.awards;
  //   let awardsList = [];
  //   let turnNum = 1 / awards.length * 360; // 文字旋转 turn 值
  //   // 奖项列表  
  //   awards.forEach((item, i) => {
  //     awardsList.push({
  //       turn: i * turnNum + 'deg',
  //       lineTurn: i * turnNum + turnNum / 2 + 'deg',
  //       award: item.name
  //     });
  //   })
  //   this.setData({
  //     btnDisabled: this.data.awardsConfig.chance ? '' : 'disabled',
  //     awardsList: awardsList
  //   })
  // },
  //发起抽奖  
  playReward() {
    if (this.data.chishu == 0) {
      wx.showToast({
        title: '抽奖次数已经用完',
        icon: 'none'
      })
      return
    }
    // //中奖index  
    var awardsNum = this.data.awardsConfig.awards;
    var awardIndex = this.data.awrdindex; //此处为中奖index  
    var runNum = 8; //旋转8周  
    var duration = 4000; //时长  

    // 旋转角度    
    let runDeg = this.data.runDeg || 0;
    this.setData({
      runDeg: runDeg + (360 - runDeg % 360) + (360 * runNum - awardIndex * (360 / awardsNum.length))
    })
    //创建动画  
    var animationRun = wx.createAnimation({
      duration: duration,
      timingFunction: 'ease'
    })
    animationRun.rotate(this.data.runDeg).step();
    this.setData({
      animationData: animationRun.export(),
      btnDisabled: 'disabled'
    })

    // 中奖提示  
    var awardsConfig = this.data.awardsConfig;
    // var awardType = awardsConfig.awards[awardIndex].type;
    var awardType = awardsConfig.awards[awardIndex].price;
    this.setData({
      chishu: this.data.chishu - 1
    })
    if(awardType == 0.00){
      setTimeout(function () {
        wx.showModal({
          title: '很遗憾',
          content: '没中奖 ' + (awardsConfig.awards[awardIndex].name),
          showCancel: false
        });
        this.setData({
          btnDisabled: ''
        })
      }.bind(this), duration);
    }else{
      setTimeout(function () {
        wx.showModal({
          title: '恭喜',
          content: '获得' + (awardsConfig.awards[awardIndex].name),
          showCancel: false
        });
        this.getProfitList();
        this.setData({
          btnDisabled: ''
        })
      }.bind(this), duration);
    }
    // if (awardType == 0) {
    //   setTimeout(function () {
    //     wx.showModal({
    //       title: '恭喜',
    //       content: '获得' + (awardsConfig.awards[awardIndex].name),
    //       showCancel: false
    //     });
    //     this.setData({
    //       btnDisabled: ''
    //     })
    //   }.bind(this), duration);
    // } else {
    //   setTimeout(function () {
    //     wx.showModal({
    //       title: '很遗憾',
    //       content: '没中奖 ' + (awardsConfig.awards[awardIndex].name),
    //       showCancel: false
    //     });
    //     this.setData({
    //       btnDisabled: ''
    //     })
    //   }.bind(this), duration);
    // }
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