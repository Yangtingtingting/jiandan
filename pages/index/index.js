// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    areaitems: [
      {
          // 导航名称
          text: '所有城市',
          // 导航名称右上角徽标，1.5.0 版本开始支持
          badge: "",
          // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
          dot: false,
          // 禁用选项
          disabled: false,
          // 该导航下所有的可选项
          children: [
              {
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
          text: '所有城市',
          // 导航名称右上角徽标，1.5.0 版本开始支持
          badge: "",
          // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
          dot: false,
          // 禁用选项
          disabled: false,
          // 该导航下所有的可选项
          children: [
              {
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
          text: '所有城市',
          // 导航名称右上角徽标，1.5.0 版本开始支持
          badge: "",
          // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
          dot: false,
          // 禁用选项
          disabled: false,
          // 该导航下所有的可选项
          children: [
              {
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
          text: '所有城市',
          // 导航名称右上角徽标，1.5.0 版本开始支持
          badge: "",
          // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
          dot: false,
          // 禁用选项
          disabled: false,
          // 该导航下所有的可选项
          children: [
              {
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
          text: '所有城市',
          // 导航名称右上角徽标，1.5.0 版本开始支持
          badge: "",
          // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
          dot: false,
          // 禁用选项
          disabled: false,
          // 该导航下所有的可选项
          children: [
              {
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
          text: '所有城市',
          // 导航名称右上角徽标，1.5.0 版本开始支持
          badge: "",
          // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
          dot: false,
          // 禁用选项
          disabled: false,
          // 该导航下所有的可选项
          children: [
              {
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
          text: '所有城市',
          // 导航名称右上角徽标，1.5.0 版本开始支持
          badge: "",
          // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
          dot: false,
          // 禁用选项
          disabled: false,
          // 该导航下所有的可选项
          children: [
              {
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
  ],
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
    
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
