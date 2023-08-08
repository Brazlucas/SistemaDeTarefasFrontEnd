import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Users from '../components/modules/Users/Users.vue';
import Home from '../components/modules/Home/Home.vue';
import Tasks from "@/components/modules/Tasks/Tasks.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/users',
    name: 'users',
    component: Users
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: Tasks
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
