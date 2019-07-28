import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import {library} from "@fortawesome/fontawesome-svg-core";
import { firestorePlugin } from 'vuefire'

import {
  faTrash, faLink, faListUl
} from "@fortawesome/free-solid-svg-icons";

library.add(faTrash, faLink, faListUl);

Vue.use(firestorePlugin)


Vue.config.productionTip = false;


router.beforeEach((to, from, next) => {

  if(!to.meta.protected) { next() } 
})

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
