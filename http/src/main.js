import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.http.options.root = 'https://vuejs-http-80597.firebaseio.com/'
// vue.http.interceptors.push((request, next)=> {
//     console.log(request);
//     if(request.method == 'POST'){
//       request.method = 'PUT';
//     }
//     next();
// });

new Vue({
  el: '#app',
  render: h => h(App)
})
