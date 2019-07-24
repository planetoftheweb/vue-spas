import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Meetings from "./views/Meetings.vue";
import firebase from "firebase";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/meetings",
      name: "Meetings",
      component: Meetings,
      meta: {
        protected: true
      }
    }, {
      path: "/logout",
      component: () => {
        firebase.auth().signOut().then(function() {
          this.$router.push("login");
          this.user = {};
        });
      }
    }
  ]
});
