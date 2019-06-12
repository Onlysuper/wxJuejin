//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        navData:[
            {
                text: '首页'
            },
            {
                text: '健康'
            },
            {
                text: '情感'
            },
            {
                text: '职场'
            },
            {
                text: '育儿'
            },
            {
                text: '纠纷'
            },
            {
                text: '青葱'
            },
            {
                text: '上课'
            },
            {
                text: '下课'
            }
        ],
        currentTab: 0,
        navScrollLeft: 0,

        //内容
        articeList:[
            {
                img:'/static/imgs/1560216029033.jpg',
                title:'',
                describel:' [视频]实战讲解：企业级移动电商开发',
                author:'一直老萌',
                sections:'22',//小结
                price:120,
                ConsumerNum:10//购买人数
            },
            {
                img:'http://pic9.nipic.com/20100923/2531170_140325352643_2.jpg',
                title:'',
                describel:' [视频]实战讲解：企业级移动电商开发',
                author:'一直老萌',
                sections:'22',//小结
                price:120,
                ConsumerNum:10//购买人数
            },
            {
                img:'/static/imgs/1560216029033.jpg',
                title:'',
                describel:' [视频]实战讲解：企业级移动电商开发',
                author:'一直老萌',
                sections:'22',//小结
                price:120,
                ConsumerNum:10//购买人数
            },
            {
                img:'/static/imgs/1560216029033.jpg',
                title:'',
                describel:' [视频]实战讲解：企业级移动电商开发',
                author:'一直老萌',
                sections:'22',//小结
                price:120,
                ConsumerNum:10//购买人数
            },
            {
                img:'/static/imgs/1560216029033.jpg',
                title:'',
                describel:' [视频]实战讲解：企业级移动电商开发',
                author:'一直老萌',
                sections:'22',//小结
                price:120,
                ConsumerNum:10//购买人数
            },
            {
                img:'/static/imgs/1560216029033.jpg',
                title:'',
                describel:' [视频]实战讲解：企业级移动电商开发',
                author:'一直老萌',
                sections:'22',//小结
                price:120,
                ConsumerNum:10//购买人数
            },
            {
                img:'/static/imgs/1560216029033.jpg',
                title:'',
                describel:' [视频]实战讲解：企业级移动电商开发',
                author:'一直老萌',
                sections:'22',//小结
                price:120,
                ConsumerNum:10//购买人数
            },
            {
                img:'/static/imgs/1560216029033.jpg',
                title:'',
                describel:' [视频]实战讲解：企业级移动电商开发',
                author:'一直老萌',
                sections:'22',//小结
                price:120,
                ConsumerNum:10//购买人数
            }
        ]
    },
    //事件处理函数
    onLoad: function () {
           
    },
    switchNav(event){
        var cur = event.currentTarget.dataset.current; 
        //每个tab选项宽度占1/5
        var singleNavWidth = this.data.windowWidth / 5;
        //tab选项居中                            
        this.setData({
            navScrollLeft: (cur - 2) * singleNavWidth
        })      
        if (this.data.currentTab == cur) {
            return false;
        } else {
            this.setData({
                currentTab: cur
            })
        }
    },
    switchTab(event){
        var cur = event.detail.current;
        var singleNavWidth = this.data.windowWidth / 5;
        this.setData({
            currentTab: cur,
            navScrollLeft: (cur - 2) * singleNavWidth
        });
    }
})