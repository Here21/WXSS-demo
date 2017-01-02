// pages/index/index.js
Page({
  data:{},
  onWrapTap: function(event){
    console.log('wrap click!');
  },
  onInnerTextTap: function(event){
    // catch事件绑定可以阻止冒泡事件向上冒泡
    wx.redirectTo({
      url: '/pages/posts/post',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
    console.log('inner click!')
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})