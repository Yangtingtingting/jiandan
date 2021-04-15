 
Page({
 
	/**
	 * 页面的初始数据
	 */
	data: {
		zpData:{
			//转盘主图图片url
			zpImg:'../../../images/zp.png',
			
			equalParts:null, //一共多少等份
			oneAngle:null, //每一等份多少度
			
			// ******** 转盘奖品数据：后台获取数据 ********
			//注：根据转盘图片对应的值（转盘图片指针处顺时针向右数，起始1，奖品对应的格子数【第几等份上】）
			awardSetting:[
				'第1个格子对应内容',
				'第2个格子对应内容',
				'第3个格子对应内容',
				'第4个格子对应内容',
				'第5个格子对应内容',
				'第6个格子对应内容',
			],
		},
		
		ifRoate:false, //转盘是否在转动（判断阻止多次点击）
		zpRotateDeg:'', //旋转角度
		
		// ******** 抽奖结果数据：后台获取数据 ********
		curKey:null, //抽奖结果 ： 取值范围 1 至 总格子数
		ifWinning:null, //是否中奖
	},
 
 
 
 
	// 获取转盘初始数据
	getZpData(){
		let zpImg = 'zpData.zpImg';
		let awardSetting = 'zpData.awardSetting';
		this.setData({
			[zpImg]:'../../../images/zp.png',
			[awardSetting]:[
				'再接再厉',
				'300',
				'88',
				'188',
				'再接再厉',
				'888',
			],
		});
		
		this.setZpDefault();
	},
	// 根据转盘初始数据设置转盘初始关键参数
	setZpDefault(){
		let equalPartsNum = this.data.zpData.awardSetting.length;
		let oneAngleNum = 360 / equalPartsNum;
		let equalParts = 'zpData.equalParts';
		let oneAngle = 'zpData.oneAngle';
		this.setData({
			//一共多少等份
			[equalParts] : equalPartsNum,
			// 根据转盘得等份数设置 每一等份多少度
			[oneAngle] : oneAngleNum,
		});
	},
 
 
	// 设置旋转动效
	setToRotate(degNum){
		this.setData({
			zpRotateDeg : '-webkit-transform: rotate(' + degNum + 'deg);transform: rotate(' + degNum + 'deg);-webkit-transition: all 5s ease;transition: all 5s ease;',
		});
	},
	//根据 设置的 指针停止时指向的格子（中奖结果），设置其旋转角度区间
	setRotate(awardSettingNumber){ //awardSettingNumber  取值范围 1 至 总格子数
		setTimeout(() => {
			// //转盘停止时 指针 指向的格子 最小角度
			let minAngle = 360 - awardSettingNumber * this.data.zpData.oneAngle + 5;
			// //转盘停止时 指针 指向的格子 最大角度
			let maxAngle = 360 - (awardSettingNumber - 1) * this.data.zpData.oneAngle - 5;
			// //旋转区间
            let newAngle = Math.floor(minAngle + Math.random() * (maxAngle - minAngle)) + 360 * 15;
            
			this.setToRotate(newAngle);
			
			setTimeout(() => {
				this.roateEnd(awardSettingNumber);
			}, 5150);
		},50);
	},
	//旋转结束执行
	roateEnd(awardSettingNumber){
		console.log('当前指向格子数 -- ' + awardSettingNumber , this.data.curKey);
		console.log('当前指向格子数对应内容 -- ' + this.data.zpData.awardSetting[awardSettingNumber - 1] , this.data.zpData.awardSetting[this.data.curKey - 1]);
		
		// 是否中奖
		if(this.data.ifWinning){
			console.log('中奖');
		}else{
			console.log('未中奖');
		}
		
		setTimeout(() => {
			this.setData({
				ifRoate : false, //转盘是否在转动
			});
		}, 100);
	},
 
 
	//点击抽奖
	getLucky(){
		if(this.data.ifRoate){
			return false;
		}
		
		this.setData({
			ifRoate : true, //转盘是否在转动
			zpRotateDeg : ''
		});
				
		// 请求后台获取抽奖结果中...
		
		/*test*/
		var res = {
			status:1,
			curKey:Math.floor(1 + Math.random() * this.data.zpData.equalParts), //抽奖结果 ： 取值范围 1 至 总格子数
			ifWinning:true, //是否中奖
			info:'没机会或什么什么'
		}
		/*test*/
			if(res.status == 1){
				this.setData({
					curKey : res.curKey,
					ifWinning : res.ifWinning
				});
				console.log(this.data.curKey)
				this.setRotate(this.data.curKey);
			}else{
				this.setData({
					ifRoate : false, //转盘是否在转动
				});
				wx.showModal({
					title: '温馨提示',
					showCancel:false,
					content: res.info,
				})
			}
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
		this.getZpData();
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