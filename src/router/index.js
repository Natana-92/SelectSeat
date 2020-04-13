import Vue from 'vue'
import VueRouter from 'vue-router'

import IndexPage from '../views/IndexPage.vue'
import SelectSeatPage from '../components/StartSelectSeat.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'IndexPage',
    component: IndexPage
  },
  {
    path: '/selectSeat',
    name: 'SelectSeat',
    component: SelectSeatPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router