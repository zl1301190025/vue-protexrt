import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Params from '@/components/params'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
    	path:'/params/:newsId(\\d+)/:newsTitle',
     	component:Params,
     	alias:'/bieming/:newsId(\\d+)/:newsTitle'
		},{
			path:'/goback',
			redirect:'/'
		},{
			//重定向
		  path:'/goParams/:newsId(\\d+)/:newsTitle',
		  redirect:'/params/:newsId(\\d+)/:newsTitle'
		}
  ]
})
