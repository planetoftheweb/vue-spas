<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-primary">
      <div class="navbar-nav mr-auto">
        <router-link class="nav-item nav-link" to="/">Home</router-link>
        <router-link class="nav-item nav-link" to="/about">About</router-link>
      </div>
    </nav>
    <router-view class="container" />
  </div>
</template>

<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
</style>
