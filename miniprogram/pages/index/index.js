//index.js
const app = getApp()

Page({
  data: {
   
  },
  toSet:function(){
    console.log("heklo")
    wx.navigateTo({
      url: '../set/set'
    })
  },
  onLoad:function(){
    
  },
})
