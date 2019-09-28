// pages/index/index.js
Page({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    msg: '我是初始化的数据'
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(this)
    // 修改状态数据
    // React: this.setState()
    // Vue: this.xxx = value
    // 小程序: this.setData();
    setTimeout(() => {
      this.setData({
        msg: '修改以后的数据'
      })
    }, 1500)
  },

  handleParent() {
    console.log('parent')
  },

  handleChild() {
    console.log('child')
  },


  /**
   * 组件的方法列表
   */
  methods: {

  }
})