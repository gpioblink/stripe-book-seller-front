import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BookList from '../views/BookList';
import Buy from '../views/Buy';
import BookDetail from '../views/BookDetail';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/books',
    name: 'Books',
    component: BookList,
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: BookDetail,
    props: (route) => ({
      id: route.params.id,
      name: route.params.name,
      detail: route.params.detail,
      price: route.params.price,
      src: route.params.src,
    })
  },
  {
    path: '/buy',
    name: 'Buy',
    component: Buy,
    props: (route) => ({
      id: route.params.id,
    })
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
