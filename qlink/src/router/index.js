import Vue from 'vue'
import Router from 'vue-router'

import home from '@/pages/main'
import loan from '@/pages/loan'
import back from '@/pages/back'
import aboutwe from '@/pages/aboutwe'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/loan',
      name: 'loan',
      component: loan
    },
    {
      path: '/back',
      name: 'back',
      component: back
    },
    {
      path: '/aboutwe',
      name: 'aboutwe',
      component: aboutwe
    },

  ]
})
