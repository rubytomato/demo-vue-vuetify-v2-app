import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index.vue'
import { setTitle, setDescription } from '@/mixins'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    meta: { title: 'home', description: 'welcome' }
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: () => import(/* webpackChunkName: "favorites" */ '@/views/Favorites.vue'),
    meta: { title: 'favorites', description: '' }
  },
  {
    path: '/friends',
    name: 'Friends',
    component: () => import(/* webpackChunkName: "friends" */ '@/views/Friends.vue'),
    meta: { title: 'friends', description: '' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    meta: { title: 'about', description: '' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  setTitle(to.meta.title)
  setDescription(to.meta.description)
  next()
})

export default router
