//purchase.js

Component({
  data: {

  },
  pageLifetimes: {
      show() {
          if (typeof this.getTabBar === 'function' &&
          this.getTabBar()) {
          this.getTabBar().setData({
              selected: 1
          })
          }
      }
  },
  onLoad: function () {
   
  }
})
