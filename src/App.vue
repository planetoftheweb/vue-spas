<template>
  <div id="app">
    <Navigation />
    <router-view class="container" />
  </div>
</template>
<script>
import Navigation from "./components/Navigation.vue";

export default {
  components: {
    Navigation
  }
};
</script>

<style lang="scss">
$primary: #05b2dd;
@import "node_modules/bootstrap/scss/bootstrap";
</style>
