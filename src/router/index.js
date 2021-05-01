import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import SetlistsIndex from '../views/SetlistsIndex.vue'
// import EventsIndex from '../views/EventsShow.vue'
// import EventsNew from '../views/EventsNew.vue'
import EventsIndex from '../views/EventsIndex.vue'
// import Events from '../views/EventsEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/setlists',
    name: 'SetlistsIndex',
    component: SetlistsIndex
  },
  // {
  //   path: '/events',
  //   name: 'EventsIndex',
  //   component: EventsIndex
  // },
  // {
  //   path: '/events/new',
  //   name: 'EventsNew',
  //   component: EventsNew
  // },
  {
    path: '/events',
    name: 'EventsIndex',
    component: EventsIndex
  },
  // {
  //   path: '/events/:id/edit',
  //   name: 'EventsEdit',
  //   component: EventsEdit
  // },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
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