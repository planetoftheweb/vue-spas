import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";

import {library} from "@fortawesome/fontawesome-svg-core";
import { firestorePlugin } from 'vuefire'

import {
  faShoppingCart, faDollarSign
} from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart, faDollarSign);

Vue.use(firestorePlugin)


Vue.config.productionTip = false;


router.beforeEach((to, from, next) => {

  if(!to.meta.protected) {
      next()
  } else {
      firebase.auth().onAuthStateChanged((user) => {
          if(user) {
              next()
          } else {
              router.push('/login')
          } 
      })
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
