<template>
  <div id="app">
    <Navigation />
    <router-view class="container" />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
export default {
  name: "app",
  components: {
    Navigation
  }
};
</script>


<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
</style>
