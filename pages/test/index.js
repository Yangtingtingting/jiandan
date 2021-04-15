// pages/test/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    awardsConfig : {  
      chance: true,  
      awards: [  
      { index: 0, name: '10元红包',type:0 },  
      { index: 1, name: '谢谢参与',type:1},  
      { index: 2, name: '50元红包',type:0},  
      { index: 3, name: '谢谢参与',type:1},  
      { index: 4, name: '100元话费',type:0},  
      { index: 5, name: '谢谢参与',type:1},  
      ]  
    },  
    awardsList: [],  
    animationData: {},  
    btnDisabled: '',  
    chishu:3
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onShow: function () {
    this.drawAwardRoundel()//初始化
  },
  //画抽奖圆盘  
  drawAwardRoundel() {               
    let awards = this.data.awardsConfig.awards;  
    let awardsList = [];  
    let turnNum = 1 / awards.length*360;  // 文字旋转 turn 值
    // 奖项列表  
    awards.forEach((item,i)=>{
      awardsList.push({ turn: i * turnNum + 'deg', lineTurn: i * turnNum + turnNum / 2 + 'deg', award:item.name }); 
    }) 
    this.setData({
      btnDisabled:this.data.awardsConfig.chance ? '' : 'disabled',
      awardsList:awardsList
    }) 
  },  
  //发起抽奖  
  playReward () {  
    if (this.data.chishu == 0) {  
      wx.showToast({  
        title:'抽奖次数已经用完',  
        icon:'none'  
      })  
      return  
    }  
    //中奖index  
    var awardsNum = this.data.awardsConfig.awards;  
    var awardIndex =4;//此处为中奖index  
    var runNum = 8;//旋转8周  
    var duration = 4000;//时长  

    // 旋转角度    
    let runDeg = this.data.runDeg || 0;  
    this.setData({
      runDeg:runDeg + (360 - runDeg % 360) + (360 * runNum - awardIndex * (360 / awardsNum.length))
    })  
    //创建动画  
    var animationRun = wx.createAnimation({  
      duration: duration,  
      timingFunction: 'ease'  
    })  
    animationRun.rotate(this.data.runDeg).step();  
    this.setData({
      animationData: animationRun.export(),
      btnDisabled:'disabled'
    })  

    // 中奖提示  
    var awardsConfig = this.data.awardsConfig;  
    var awardType = awardsConfig.awards[awardIndex].type;   
    this.setData({
      chishu:this.data.chishu - 1
    })     
    if (awardType == 0) {
      setTimeout(function () {  
        wx.showModal({  
          title: '恭喜',  
          content: '获得' + (awardsConfig.awards[awardIndex].name),  
          showCancel: false  
        }); 
        this.setData({
          btnDisabled:''
        })                              
      }.bind(this), duration);  
    }else{
      setTimeout(function () {  
        wx.showModal({  
          title: '很遗憾',  
          content: '没中奖 ' + (awardsConfig.awards[awardIndex].name),  
          showCancel: false  
        });  
        this.setData({
          btnDisabled:''
        })  
      }.bind(this), duration);  
    } 
  } 
})