// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  goToDirectory() {
    wx.navigateTo({
      url: '/pages/directory/index'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
 
})
