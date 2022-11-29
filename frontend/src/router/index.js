// import Vue from 'vue'
// import VueRouter from 'vue-router'
// // import Home from '../views/Home.vue'
// // import Search from '../component/Search.vue'
// import App from '../views/App.vue'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'App',
//     component: App
//   },
//   {
//     path: '/detail',
//     name: 'detail',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue')
//   }

// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// module.exports = router;

import Vue from 'vue'
import Router from 'vue-router'

import app from '../views/App.vue'
import detail from '../views/Detail.vue'
import home from '../views/Home.vue'
import report from '../views/report.vue'
import test from '../views/test.vue'
Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'app',
      component: app,
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail,
    },
    {
      path: '/home',
      name: 'home',
      component: home,
    },
    {
      path: '/report',
      name: 'report',
      component: report,
    },
    {
      path: '/test',
      name: 'test',
      component: test,
    }

  ]
});
export default router