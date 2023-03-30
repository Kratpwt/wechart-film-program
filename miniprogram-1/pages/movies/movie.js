// pages/movies/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options.movieId)
    wx.request({
      url: 'http://129.211.169.131:13688/movie/query', //仅为示例，并非真实的接口地址
      data: {
        movieid: options.movieId,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success :(res)=> {
        console.log(res.data.data),
        this.setData({
          list:res.data.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})