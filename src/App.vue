<template>
  <div id="app">
    <Navigation />
    <router-view class="container" />
  </div>
</template>
<script>
import Navigation from "@/components/Navigation.vue";

export default {
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
