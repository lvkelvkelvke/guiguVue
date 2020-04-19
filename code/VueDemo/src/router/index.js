/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News'
import Message from '../pages/Message'
import MessageDetail from "../pages/MessageDetail";

// 声明使用vue-router插件
/*
内部定义并注册了2个组件标签(router-link/router-view),
给组件对象添加了2个属性:
  1. $router: 路由器
  2. $route: 当前路由
 */
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    //一般路由
    {
      path:'/about',
      component:About
    },
    {
      path: '/home',
      component:Home,
      children:[
        {
          path:'/home/news',
          component:News
        },
        {
          path:'message',
          component:Message,
          children:[
            {
              path:'/home/message/messageDetail/:id',
              component:MessageDetail
            }
          ]
        },
        {
          path:'',
          component:News
        }
      ]
    },
    //自动跳转路由
    {
      path: '/',
      redirect:'/about'
    }
  ]
})
