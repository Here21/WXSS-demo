Page({
  data:{

  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    console.log('onLoad')
    const data = {
        avatar: '/images/avatar/1.png',
        date: 'Nov 25 2016',
        title: '美味蟹黄',
        cover: '/images/post/crab.png',
        content: '好吃营养又美味的蟹，可惜我只喜欢吃蟹，不喜欢剥蟹',
        stars: '92',
        view: '65'
    }
    this.setData(data)
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    console.log('onReady')
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    console.log('onShow')
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    console.log('onHide')
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    console.log('onUnload')
  },
  onShareAppMessage: function() {
      console.log("onShare")
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})