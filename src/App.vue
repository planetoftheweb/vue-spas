<template>
  <div id="app">
    <Navigation :user="user" />
    <router-view class="container" :user="user" @login="login" />
  </div>
</template>
<script>
import Navigation from "./components/Navigation.vue";
import db from "./db.js";
import Firebase from "firebase";
import router from "./router";

export default {
  data: function() {
    return {
      user: null
    };
  },
  components: {
    Navigation
  },
  mounted() {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = {};
        router.push("/login");
      }
    });
  }
};
</script>

<style lang="scss">
$primary: #0771d4;
@import "node_modules/bootstrap/scss/bootstrap";
</style>
