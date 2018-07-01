import Vue from 'vue'
import Vuex from 'vuex'
import places from './places'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		scholarship: 12345,
		places: places,
		comment_place: []
	},

	getters: {
		Places(state) {
			return state.places
		},
		Scholarship(state) {
			return state.scholarship
		},
		commentPlace(state) {
			return state.comment_place
		}
	},

	actions: {
		setScholarship({commit}, n) {
            commit('SET_SCHOLARSHIP', n)
        },
        setcommentPlace({commit}, n) {
        	commit('SET_COMMENT_PLACE', n)
        }
	},

	mutations: {
		SET_SCHOLARSHIP(state, n) {
            state.scholarship = n
        },
        SET_COMMENT_PLACE(state, n) {
        	state.comment_place = n
        }
	}
})