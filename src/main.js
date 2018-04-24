import Vue from 'vue'
import App from './App'
import router from './router'
import './config/rem'

// import Mint from 'mint-ui'
// import 'mint-ui/lib/style.css'

import store from "./store/store"

import axios from 'axios';

import qs from 'qs';

import './style/common.css'

Vue.prototype.$axios = axios;


var VueValidator = require('vue-validator');

// Vue.use(Mint);

Vue.use(VueValidator);


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