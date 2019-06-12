//custom-tab-bar.js
const app = getApp();
Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#ff6700",
    list: [
      {
        "iconPath":"/static/imgs/tabBar/1.jpeg",
        "selectedIconPath":"/static/imgs/tabBar/1selected.jpeg",
        "pagePath": "/pages/index/index",
        "text": "首页",
        // selected: true
      },
      {
        "iconPath":"/static/imgs/tabBar/2.jpeg",
        "selectedIconPath":"/static/imgs/tabBar/2selected.jpeg",
        "pagePath": "/pages/logs/logs",
        "text": "已购",
        // selected: false
      },
      {
        "iconPath":"/static/imgs/tabBar/3.jpeg",
        "selectedIconPath":"/static/imgs/tabBar/3selected.jpeg",
        "pagePath": "/pages/mine/index",
        "text": "我",
        // selected: false
      }
    ]
    
  },
  lifetimes: {
  
  },
  // getTabBar(data){
  //   console.log(data);
  // },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset;
      console.log(data);
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  },
  onLoad: function () {
  
  }
})
