import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Meetings from "./views/Meetings.vue";
import Register from "./views/Register.vue";
import CheckIn from "./views/CheckIn.vue";
import Attendees from "./views/Attendees.vue";

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
      name: "login",
      component: Login
    },
    {
      path: "/meetings",
      name: "meetings",
      component: Meetings
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/checkin/:userID/:meetingID",
      name: "CheckIn",
      component: CheckIn
    },
    {
      path: "/attendees/:userID/:meetingID",
      name: "Attendees",
      component: Attendees
    },
    {
      path: "*",
      redirect: '/'
    }

  ]
});
