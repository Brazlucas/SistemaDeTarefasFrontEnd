import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Users from '../components/modules/Users/Users.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Users
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
