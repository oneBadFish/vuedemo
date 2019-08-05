import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main/Main'
import Meg from '@/components/Meg/Meg'
import Search from '@/components/Search/Search'
import Shop from '@/components/Shop/Shop'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Meg',
      name: 'Meg',
      component: Meg
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: Shop
    },
  ]
})
