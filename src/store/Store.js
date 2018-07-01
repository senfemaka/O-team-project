import Vue from 'vue'
import Vuex from 'vuex'
import Products from './Products'
import Reciepts from './Reciepts'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		Products: Products,
		Reciepts: Reciepts
	},

	getters: {
		Products(state) {
			return state.Products
		},
		Reciepts(state) {
			return state.Reciepts
		}
	},

	actions: {
		addProduct({commit}, n) {
            commit('ADD_PRODUCT', n)
        },
        setcommentPlace({commit}, n) {
        	commit('SET_COMMENT_PLACE', n)
        }
	},

	mutations: {
		ADD_PRODUCT(state, n) {
            state.scholarship = n
        },
        SET_COMMENT_PLACE(state, n) {
        	state.comment_place = n
        }
	}
})