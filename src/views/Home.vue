<template>
  <div class="mt-3">
    <div class="text-secondary text-center">
      Welcome back
      <span class="font-weight-bold text-info">{{user}}</span>
    </div>
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-10 col-md-10 col-lg-8 col-xl-7">
          <h4 class="display-4 text-primary mb-2">Meeting Log</h4>
          <p class="lead">
            This simple app creates meetings, allows people to check in, and
            picks random users to award giveaways. It's a good example of a
            Single Page Application which includes connection to a database and
            routing. It's a practical way to learn
            <a
              href="https://vuejs.org/"
            >Vue.js</a>
            with
            <a href="https://firebase.google.com">Firebase</a>.
          </p>

          <router-link class="btn btn-outline-primary mr-2" to="/register">Register</router-link>
          <router-link class="btn btn-outline-primary mr-2" to="/login">Log In</router-link>
          <router-link class="btn btn-primary" to="/meetings">Meetings</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  props: ["user"]
};
</script>
