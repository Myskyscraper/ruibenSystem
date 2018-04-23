import Vue from 'vue'
import Router from 'vue-router'


import HelloWorld from '@/components/HelloWorld'

import Test from '@/components/test'

import Login from '@/page/login'

import Home from '@/page/home'



Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			redirect: '/Home'
		}, {
			path: '/02',
			name: 'Test',
			component: Test
		}, {
			path: '/01',
			name: 'HelloWorld',
			component: HelloWorld
		}, {
			path: '/Home',
			component: Home
		},

		{
			path: '/login',
			name: 'Login',
			component: Login
		}

	],
	mode: 'hash' //哈希和基础的
	//linkActiveClass:
	//linkExactActiveClass:
	/*scrollBehavior(to,from,savePosition){
		if(savePosition){
			return savePosition;
		}else{
			return {x:0,y:0}
		}
	}
	parseQuery(){
	
	},
	stringifyQuery(){}
	*/
})