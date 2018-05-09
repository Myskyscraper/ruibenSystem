import Vue from 'vue'
import App from './App'
import router from './router'
import './config/rem'

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

import store from "./store/store"

import axios from 'axios';

import qs from 'qs';

import './style/common.css'



Vue.prototype.$axios = axios;


import VeeValidate from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN'; //引入中文包，提示信息可以以中文形式显示

import {
	Validator
} from 'vee-validate';


//Validator.addLocale(zh_CN);


Vue.use(Mint);



Vue.config.productionTip = false

/* eslint-disable no-new */


new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>'
})