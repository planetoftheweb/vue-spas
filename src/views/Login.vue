<template>
  <form class="mt-3" @submit.prevent="login">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="card bg-light">
            <div class="card-body">
              <h3 class="font-weight-light mb-3">Log in</h3>
              <section class="form-group">
                <div v-if="error" class="col-12 alert alert-danger px-3">{{error}}</div>
                <label class="form-control-label sr-only" for="Email">Email</label>
                <input
                  required
                  class="form-control"
                  type="email"
                  id="email"
                  placeholder="Email"
                  v-model="email"
                />
              </section>
              <section class="form-group">
                <input
                  required
                  class="form-control"
                  type="password"
                  placeholder="Password"
                  v-model="password"
                />
              </section>
              <div class="form-group text-right mb-0">
                <button class="btn btn-primary" type="submit">Log in</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
import db from "../db.js";
import Firebase, { functions } from "firebase";
import router from "../router.js";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    login: function() {
      const info = {
        email: this.email,
        password: this.password
      };

      Firebase.auth()
        .signInWithEmailAndPassword(info.email, info.password)
        .then(
          user => {
            this.$router.replace("meetings");
          },
          error => {
            this.error = error.message;
          }
        );
    }
  }
};
</script>
