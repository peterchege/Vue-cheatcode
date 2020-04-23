import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        
        value: 0
    },
    getters:{
        
        value: state =>{
            return state.value;
        }
    },
    mutations: {
        
        updateValue: (state, payload) =>{
            state.value = payload;
        }
    },
    actions: {
        increment: ({ commit }, payload) => {
            commit('increment', payload);
        },
        decrement: ({ commit }, payload) => {
            commit('decrement', payload);
        },
        asyncIncrement: ({ commit }, payload) => {
            setTimeout(() =>{
                commit('increment ', payload.by)
            }, payload.duration)
        },
        asyncDecrement: ({ commit }, payload) => {
            setTimeout(() =>{
                commit('decrement', payload.by)
            }, payload.duration)
        },
        updateValue: ({ commit }, payload) =>{
            commit('updateValue', payload);
        }
    }
});