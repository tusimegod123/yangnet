import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false



// router.beforeEnter((to, from, next) => {
//   // check vuex store //
//   if(to.matched.some(record => record.meta.requireSellerRole)){
//   if (store.getters.isSeller && store.getters.isCertifiedSeller) {
//     next('/register')
//   } else {
//     next('/property-requirement');
//   }
// } 
// })

new Vue({
  router,
  
  vuetify,
  render: h => h(App)
}).$mount('#app')

