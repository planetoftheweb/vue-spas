import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Meetings from "./views/Meetings";
import CheckIn from "./views/CheckIn";

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
      component: Meetings
    },
    {
      path: "/checkin/:userID/:meetingID",
      name: "Checkin",
      component: CheckIn
    }, 
    { 
      path: '*',
      redirect: '/'
    }


  ]
});
