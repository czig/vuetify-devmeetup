import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Meetups from '@/components/Meetup/Meetups'
import CreateMeetup from '@/components/Meetup/CreateMeetup'
import Profile from '@/components/User/Profile'
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile 
    },
    {
      path: '/createmeetup',
      name: 'CreateMeetup',
      component: CreateMeetup 
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin 
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup 
    }
  ],
  mode: 'history'
})
