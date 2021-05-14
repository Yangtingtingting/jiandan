const app = getApp(); 
const requestFun = require('../utils/request.js'); 
const BASE_URL =  app.globalData.BASE_URL;
// const Jwttoken = wx.getStorageSync('logindata');
// console.log(Jwttoken)
//获取获奖列表
export function getgift (data) {
  return requestFun.request({
    url:BASE_URL+ '/api/Prize/getPrizeparam',
    method: 'get' ,
    data
  })
}
//获取获奖列表
export function winresult (data) {
  return requestFun.request({
    url:BASE_URL+ '/api/Prize/winPrize',
    method: 'get' ,
    data
  })
}
// 获取验证码
export function getmarknum (data) {
  return requestFun.request({
    url:BASE_URL+ '/api/Sendmsg/sendCode',
    method: 'get',
    data
  })
}
// 登录接口
export function login (data) {
  return requestFun.request({
    url:BASE_URL+ '/api/login/loginOn',
    method: 'post',
    data 
  })
}
//保存简历
export function saveResume (data) {
  return requestFun.request({
    url:BASE_URL+ '/api/Ucenter/saveResume',
    method: 'post',
    // Jwttoken:Jwttoken,
    data 
  })
}
// 获取简历信息
export function getResumeInfo (data) {
  return requestFun.request({
    url:BASE_URL + '/api/Ucenter/getResumeInfo',
    method: 'get',
    // Jwttoken:Jwttoken,
    data 
  })
}
// 是否正常登录
export function checkLogin (data) {
  return requestFun.request({
    url:BASE_URL+ '/api/login/checkLogin',
    method: 'post',
    // Jwttoken:Jwttoken,
    data 
  })
}
// 获取首页的页面推荐列表
export function getIndexData (data) {
  return requestFun.request({
    url:BASE_URL+ '/api/Job/getIndexData',
    method: 'get',
    data 
  })
}
// /api/Ucenter/getUserInfo
// 获取个人中心页面信息
// 兼职详情
export function getUserInfo (data) {
  return requestFun.request({
    url:BASE_URL+ '/api/Ucenter/getUserInfo',
    method: 'get',
    data 
  })
}
// 兼职详情
export function jobDetail (data) {
  return requestFun.request({
    url:BASE_URL+ '/api/Job/jobDetail',
    method: 'get',
    data 
  })
}
// 报名兼职
export function saveOrder (data) {
  return requestFun.request({
    url:BASE_URL+ '/api/order/saveOrder',
    method: 'get',
    // Jwttoken:Jwttoken,
    data 
  })
}
// 兼职列表
export function getJoblist (data) {
  return requestFun.request({
    url:BASE_URL+ '/api/Job/getJobByCondition',
    method: 'get',
    data 
  })
}
//获取地区名
// /api/Job/getSelectCondition
// 兼职列表
export function getSelectCondition (data) {
  return requestFun.request({
    url:BASE_URL+ '/api/Job/getSelectCondition',
    method: 'get',
    data 
  })
}
// 邀请列表
export function getRecommend (data) {
  return requestFun.request({
    url:BASE_URL+ '/api/ucenter/getRecommend',
    method: 'get',
    // Jwttoken:Jwttoken,
    data 
  })
}
// 收支明细列表
export function getfitList (data) {
  return requestFun.request({
    url:BASE_URL+ '/api/Ucenter/getProfitList',
    method: 'get',
    // Jwttoken:Jwttoken,
    data 
  })
}
// 提现接口 /api/Ucenter/tixian
export function tixian (data) {
  return requestFun.request({
    url:BASE_URL+ '/api/Ucenter/tixian',
    method: 'post',
    // Jwttoken:Jwttoken,
    data 
  })
}
// 订单列表
export function getOrder (data) {
  return requestFun.request({
    url:BASE_URL+ '/api/order/getOrder',
    method: 'get',
    // Jwttoken:Jwttoken,
    data 
  })
}
// 兼职订单的详细列表 /api/Order/getOrderDetail
export function getOrderDetail (data) {
  return requestFun.request({
    url:BASE_URL+ '/api/Order/getOrderDetail',
    method: 'get',
    // Jwttoken:Jwttoken,
    data 
  })
}
// 通过职位id获取经纬度
export function getAddressCode (data) {
  return requestFun.request({
    url:BASE_URL+ '/api/Job/getAddressCode',
    method: 'get',
    data 
  })
}
// 获取分享二维码
export function getUserQcodePic (data) {
  return requestFun.request({
    url:BASE_URL+ '/api/Ucenter/getUserQcodePic',
    method: 'get',
    data 
  })
}
// 获取客服信息
export function getServiceData (data) {
  return requestFun.request({
    url:BASE_URL+ '/api/Service/getServiceData',
    method: 'post',
    data 
  })
}