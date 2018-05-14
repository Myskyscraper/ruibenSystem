import Vue from 'vue'
import Router from 'vue-router'


import HelloWorld from '@/components/HelloWorld'

import Test from '@/components/test'

import Login from '@/page/login'


import Home from '@/page/home'

import Financial from '@/page/financial'

import Find from '@/page/find'

import User from '@/page/user'

import Register from '@/page/register'

import BiaoDetail from '@/page/biaoDetail'



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
			path: '/Financial',
			component: Financial
		},

		{
			path: '/Find',
			component: Find
		},

		{
			path: '/User',
			component: User
		},

		{
			path: '/login',
			name: 'Login',
			component: Login
		}, {
			path: '/Register',
			component: Register
		},

		{
			path: '/BiaoDetail',
			component: BiaoDetail
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