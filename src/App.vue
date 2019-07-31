<template>
  <div id="app">
    <Navigation />
    <router-view
      class="container"
      :user="user"
    />
  </div>
</template>
<script>
import Navigation from "@/components/Navigation.vue";
import Firebase from "firebase";
import db from "./db.js";

export default {
  name: "App",
  data: function() {
    return {
      user: null
    };
  },
  mounted() {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user.email;
      }
    });
  },
  components: {
    Navigation
  }
};
</script>

<style lang="scss">
$primary: #05b2dd;
$info: #65be1c;
@import "node_modules/bootstrap/scss/bootstrap";
</style>
