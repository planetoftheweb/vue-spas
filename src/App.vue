<template>
  <div id="app">
    <Navigation :user="user" @logout="logout" />
    <router-view class="container" :user="user" />
  </div>
</template>
<script>
import Navigation from "./components/Navigation.vue";
import db from "./db.js";
import Firebase from "firebase";

export default {
  data: function() {
    return {
      user: null
    };
  },
  components: {
    Navigation
  },
  methods: {
    logout: function() {
      Firebase.auth()
        .signOut()
        .then(user => {
          this.user = null;
          this.$router.push("login");
        });
    }
  },
  mounted() {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }
};
</script>

<style lang="scss">
$primary: #0771d4;
@import "node_modules/bootstrap/scss/bootstrap";
</style>
