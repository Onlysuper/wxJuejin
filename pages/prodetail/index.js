// pages/prodetail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    proData:{
      img:'http://pic9.nipic.com/20100923/2531170_140325352643_2.jpg',
      title:'[视频]实战讲解：企业级移动电商开发',
      describel:'手把手叫你学会',
      author:'一直老萌',
      sections:'22',//小结
      price:120,
      ConsumerNum:10//购买人数
    },
    currentTab: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
 //滑动切换
 swiperTab: function (e) {
  var that = this;
  that.setData({
    currentTab: e.detail.current
  });
},
//点击切换
clickTab: function (e) {
  var that = this;
  if (this.data.currentTab === e.target.dataset.current) {
    return false;
  } else {
    that.setData({
      currentTab: e.target.dataset.current
    })
  }
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