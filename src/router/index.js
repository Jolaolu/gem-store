import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home.vue'

const Orders = () => import('@/views/orders.vue')
const SendGift = () => import('@/views/send-gift.vue')
const Users = () => import('@/views/users.vue')
const Integrations = () => import('@/views/integrations.vue')
const Settings = () => import('@/views/settings.vue')

const Dashboard = () => import('@/views/dashboard')
Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
  redirect: { name: 'Dashboard' },
  children: [
    {
      path: 'dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: 'orders',
      name: 'Orders',
      component: Orders
    },
    {
      path: 'send-gift',
      name: 'SendGift',
      component: SendGift
    },
    {
      path: 'users',
      name: 'Users',
      component: Users
    },
    {
      path: 'integrations',
      name: 'Integrations',
      component: Integrations
    },
    {
      path: 'settings',
      name: 'Settings',
      component: Settings
    }
  ]
}
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
