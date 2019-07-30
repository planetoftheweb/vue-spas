<template>
  <nav class="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Meeting Log</router-link>
      <div class="navbar-nav ml-auto">
        <router-link class="nav-item nav-link" to="/meetings">
          meetings
        </router-link>
        <router-link class="nav-item nav-link" to="/login">log in</router-link>
        <router-link class="nav-item nav-link" to="/register">register</router-link>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "navigation",
  props: ["user", "meetingsQty"]
};
</script>