import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main/Main'
import Meg from '@/components/Meg/Meg'
import Search from '@/components/Search/Search'
import Shop from '@/components/Shop/Shop'
import Newlist from '@/components/Main/Newlist'
import Newsinfo from '@/components/Main/Newsinfo'
import Photolist from '@/components/Main/Photolist'
import Photoinfo from '@/components/Main/Photoinfo'
import Shoplist from '@/components/Main/Shoplist'
import Shopinfo from '@/components/Main/Shopinfo'
import Shopdesc from '@/components/Main/Shopdesc'
import Shopcomment from '@/components/Main/Shopcomment'







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
    {
      path: '/Main/Newlist',
      name: 'Newlist',
      component: Newlist
    },
    {
      path: '/Main/Newsinfo/:id',
      name: 'Newsinfo',
      component: Newsinfo
    },
    {
      path: '/Main/Photolist',
      name: 'Photolist',
      component: Photolist
    },
    {
      path: '/Main/Photoinfo/:id',
      name: 'Photoinfo',
      component: Photoinfo
    },
    {
      path: '/Main/Shoplist',
      name: 'Shoplist',
      component: Shoplist
    },
    {
      path: '/Main/Shopinfo/:id',
      name: 'Shopinfo',
      component: Shopinfo
    },
    {
      path: '/Main/Shopdesc/:id',
      name: 'Shopdesc',
      component: Shopdesc
    },
    {
      path: '/Main/Shopcomment/:id',
      name: 'Shopcomment',
      component: Shopcomment
    },
  ]
})
