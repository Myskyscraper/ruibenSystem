import Vue from "vue"
import Vuex from "vuex";


import state from "./state.js"


import defaultMutations from "./mutations.js"

import getters from './getters.js'

Vue.use(Vuex)


const store = new Vuex.Store({

	state,
	mutations: defaultMutations,
	getters,
	modules: {
		a: {
			state: {
				text: 5
			}
		},

		b: {
			state: {
				text: 2
			}
		}
	}

})

export default store;