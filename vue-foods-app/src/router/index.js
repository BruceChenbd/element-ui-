import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import FL  from '../components/FoodList'
import D from '../components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', // 首页
      name: 'Home',
      component: Home,
    }, {
      path: 'f_list', // 列表页数据
      name: 'FoodList',
      component: FL,
    }, {
      path: 'f_detail',
      name: 'Detail',
      component: D,
    }
  ]
})
