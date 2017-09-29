import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Profile from '@/components/Profile'
import Login from '@/components/Login'
import AllPost from '@/components/AllPost'
// import DetailPost from '@/components/DetailPost'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          component: AllPost
        }
        // ,
        // {
        //   path: ':id',
        //   component: DetailPost
        // }
      ]
    }
  ]
})
