/*
 * @Author: NewName zhuozhuo.com
 * @Date: 2025-12-05 09:28:32
 * @LastEditors: NewName zhuozhuo.com
 * @LastEditTime: 2025-12-05 09:33:45
 * @FilePath: \piano-school-website\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/courses', name: 'Courses', component: () => import('../views/Courses.vue') },
  { path: '/teachers', name: 'Teachers', component: () => import('../views/Teachers.vue') },
  { path: '/environment', name: 'Environment', component: () => import('../views/Environment.vue') },
  { path: '/students', name: 'Students', component: () => import('../views/Students.vue') },
  { path: '/pricing', name: 'Pricing', component: () => import('../views/Pricing.vue') },
  { path: '/about', name: 'About', component: () => import('../views/About.vue') },
  { path: '/contact', name: 'Contact', component: () => import('../views/Contact.vue') }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router