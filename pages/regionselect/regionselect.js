// pages/regionselect/regionselect.js
import {
  getSelectCondition
} from '../../api/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mainActiveIndex: 0,
    activeId: null,
    isSelect: 'false',
    areaitems: []
  },
  // 左侧导航栏
  onClickNav({ detail = {} }) {
    this.setData({
      mainActiveIndex: detail.index || 0,
    });
  },
  // 右侧导航栏
  onClickItem({ detail = {} }) {
    const activeId = this.data.activeId === detail.id ? null : detail.id;
    let pages = getCurrentPages();
    let prevPage = pages[pages.length - 2];
    prevPage.setData({ // 将我们想要传递的参数在这里直接setData。上个页面就会执行这里的操作。
        citys:detail.text,
        citytype:activeId
    })
    wx.setStorageSync('showsheng',detail.text);
    wx.navigateBack({
        delta: 1  // 返回上一级页面。
    })
    // getApp().globalData.citytype = activeId;
    // this.setData({
    //   activeId,
    //   isSelect: 'true',
    // });
    // wx.switchTab({
    //   // 拼接传参，标签上通过data-xxx="0000"，接收在onload里面0000
    //   // 通过option.传递的参数名
    //   url: '/pages/partjob/partjob',
    //   success: (result) => {

    //   },
    //   fail: () => { },
    //   complete: () => { }
    // });
  },
  // 获取地区列表
  getSelectCondition: function () {
    let _this = this;
    getSelectCondition().then(res => {
      if (res.code == 0) {
        let arrlist = res.data.area;
        let newarr = [];
        let cityarr = [];
          arrlist.forEach((item, i) => {
            var obj = {};
            obj.text = item.text;
            obj.id = item.id;
            obj.dot = false;
            obj.disabled = false;
            if (item.city[0].length > 0){ 
              obj.children = item.city[0];
            }
            newarr.push(obj);
          })
        _this.setData({
          areaitems: newarr
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSelectCondition()
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
    if (!(_this.data.isSelect)) {
      getApp().globalData.citytype = '';
      this.setData({
        isSelect: false
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