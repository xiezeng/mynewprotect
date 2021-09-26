import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieRounter from './movie'
import CinemaRounter from './cinema'
import MineRounter from './mine'

Vue.use(VueRouter)

const routes = [


  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },//不太好
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [ //路线
    MovieRounter,
    CinemaRounter,
    MineRounter,
    {
      path:'/*',
      redirect: '/movie'   //重定向
    }
  ]
})

export default router
