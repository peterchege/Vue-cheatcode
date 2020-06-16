import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'
import globalAxios from 'axios'
import router from './router'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        idToken: null,
        userId: null,
        user: null
    },
    mutations: {
        authUser (state, userData) {
            state.idToken = userData.token
            state.userId = userData.userId
        },
        storeUser(state, user) {
            state.user = user
        },
        clearAuthData(state) {
          state.idToken = null
          state.userId =null
        }

    },
    actions: {
        setLogoutTimer({commit}, expirationTIme){
          setTimeout(() => {
            commit('clearAuthData')
          } ,expirationTIme * 1000)
        },
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
                    dispatch('setLogoutTimer', res.data.expiresIn)
                })
                .catch(err => console.log(err))
        },
        login({ commit, dispatch }, authData) {
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
                     router.replace('/dashboard')
                     dispatch('setLogoutTimer', res.data.expiresIn)
                })
                .catch(err => console.log(err))
        },
        logout({commit}) {
            commit('clearAuthData')
            router.replace('/signin')
        },
        storeUser ({ commit, state }, userData) {
          if (!state.idToken){
            return
          }
          globalAxios.post('/user.json' + '?auth=' + state.idToken, userData)
            .then(res => console.log(res))
            .catch(error => console.log(error))
        },

        fetchUser({ commit, state }){
         if (!state.idToken) {
           return
         }
         globalAxios.get('/user.json' + '?auth=' + state.idToken)
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
              commit('storeUser', users[0])

            })
            .catch(err => console.log(err))
        }

    },
    getters: {
      user (state){
        return state.user
      },
      isAuthenticated (state) {
        return state.idToken !== null
      }
    }
})