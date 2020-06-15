import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth';


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
        signup({ commit }, authData) {
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

        fetchUser({commit}){
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