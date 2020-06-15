import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'
import globalAxios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        idToken: null,
        userId: null
    },
    mutations: {
        authUser (state, userData) {
            state.idToken = userData.token
            state.userId = userData.userId
        }

    },
    actions: {
        signup({ commit, dispatch }, authData) {
            axios.post('/accounts:signUp?key=AIzaSyAmx5ysQ5qwambuHqYwaQ37834Fuar52H4', {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true
                })
                .then(res => {
                    console.log(res)
                    commit('authUser',{
                        token : res.data.idToken,
                        userId : res.data.localId
                    })
                    dispatch('storeUser', authData)
                })
                .catch(err => console.log(err))
        },
        login({ commit }, authData) {
            axios.post('/accounts:signInWithPassword?key=AIzaSyAmx5ysQ5qwambuHqYwaQ37834Fuar52H4', {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true
                })
                .then(res => {
                    console.log(res)
                    commit('authUser', {
                        token: res.data.idToken,
                        userId: res.data.localId
                    })
                })
                .catch(err => console.log(err))
        },

        storeUser ({ commit }, userData) {
          globalAxios.post('/user.json', userData)
            .then(res => console.log(res))
            .catch(error => console.log(error))
        },

        fetchUser({ commit }){
          axios.get('/user.json')
            .then(res => {
              console.log(res)
              const data = res.data
              const users = []
              for (let key in data) {
                const user = data[key]
                user.id = key
                users.push(user)
              }
              console.log(users)
              this.email = users[0].email

            })
            .catch(err => console.log(err))
        }

    },
    getters: {

    }
})