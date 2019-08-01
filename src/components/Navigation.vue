<template>
  <div>
    <nav class="site-nav navbar navbar-expand bg-primary navbar-dark">
      <div class="container-fluid">
        <router-link
          class="navbar-brand"
          to="/"
        >Meeting Log</router-link>
        <div class="navbar-nav ml-auto">
          <router-link
            class="nav-item nav-link"
            to="/meetings"
            v-if="user"
          >meetings</router-link>
          <router-link
            class="nav-item nav-link"
            to="/login"
            v-if="!user"
          >log in</router-link>
          <router-link
            class="nav-item nav-link"
            to="/register"
            v-if="!user"
          >register</router-link>
          <button
            class="nav-item nav-link btn btn-link"
            @click="$emit('logout')"
          >
            logout
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "navigation",
  props: ["user"]
};
</script>
