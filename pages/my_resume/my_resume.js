// pages/my_resume/my_resume.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        sexshow: false,
        ageshow:false,
        diseaseshow:false,
        bodyshow:false,
        sickhis:'糖尿病',
        columns: ['男', '女'],
        agelist: ['16-20', '21-35','25-30'],
        diseaselist: ['是', '否'],
        bodylist: ['健康', '不健康'],
        changesel:'',
        changeage:'',
        name: '张潇潇',
        sex: '男',
        stature:"182cm",
        perweight:'56kg',
        phonenumber: 12345678945,
        // 是否显示多选框
        ishistory:false,
        diseasevalue:"",
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
    // 
    agePopup() {
        this.setData({
            sexshow: true
        });
    },
    showPopup() {
        this.setData({
            ageshow: true
        });
    },
    bodyPopup() {
        this.setData({
            bodyshow: true
        });
    },
    // 疾病
    diseasePopup(){
        this.setData({
            diseaseshow: true
        });
    },
    ageClose:function(){
        this.setData({
            ageshow: false
        });
    },
    diseaseClose:function(){
        this.setData({
            diseaseshow: true
        });
    },
    // 选择性别确定
    sexConfirm(event) {
        const {
            picker,
            value,
            index
        } = event.detail;

    },
    // 性别取消
    sexcancel() {
        console.log(123);
        this.setData({
            sexshow:false
        })
    },
    // 性别确定
    sexconfirm() {
        console.log(this.data.changesel);
        this.setData({
            sexshow:false
        })
    },
     // 性别取消
     diseasecancel() {
        console.log(123);
        this.setData({
            diseaseshow:false
        })
    },
    // 性别确定
    diseaseconfirm() {
        console.log(this.data.changesel);
        this.setData({
            diseaseshow:false
        })
    },
    // 年龄确定
    ageconfirm() {
        this.setData({
            ageshow:false
        })
    },
     // 年龄取消
     agecancel() {
        this.setData({
            ageshow:false
        })
    },
    // 年龄确定
    bodycancel() {
        this.setData({
            bodyshow:false
        })
    },
     // 年龄取消
     bodyconfirm() {
        this.setData({
            bodyshow:false
        })
    },
    // 性别改变发生的变化
    onChange(event) {
        const {
            picker,
            value,
            index
        } = event.detail;
        this.setData({
            changesel:event.detail.index
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
            changeage:event.detail.index
        })
    },
    // 姓名改变
    nameChange:function(event){
        console.log(event.detail);
    },
    // 手机号改变
    nameChange:function(event){
        console.log(event.detail);
    },
    // 备用手机号改变
    byChange:function(event){
        console.log(event.detail);
    },
    // 身高改变
    statureChange:function(event){
        console.log(event.detail);
    },
    // 体重改变
    weightChange:function(event){
        console.log(event.detail);
    },
    // 疾病改变
    diseaseChange:function(event){
        this.setData({
            diseasevalue:event.detail.index
        });
        if(this.data.diseasevalue == '0'){
            this.setData({
                ishistory:true,
                diseasevalue:'是'
            })
        }else{
            this.setData({
                ishistory:false,
                diseasevalue:'否'
            })
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        if(this.data.diseaselist[0] == "是"){
            this.setData({
                ishistory:true,
                diseasevalue:'是'
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