import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import transition from '@/components/transition'
import Error from '@/components/Error'
import app from '@/components/app'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
      path: '/transition',
      name: 'h1',
      component: transition,
      beforeEnter:(to,from,next)=>{
      	console.log('进入路由前执行');
      	console.log(to);
      	console.log(from);
      	next();
      }
    },{
    	path:'*',
    	component:Error
    },{
    	path:'/app',
    	name:"app",
    	component:app
    }
  ]
})
