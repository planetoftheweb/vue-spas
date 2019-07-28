<template>
  <div id="app">
    <Navigation :user="user" @logout="logout" />
    <router-view
      class="container"
      :user="user"
      :meetings="meetings"
      @addMeeting="addMeeting"
      @deleteMeeting="deleteMeeting"
    />
  </div>
</template>
<script>
import Navigation from "./components/Navigation.vue";
import Firebase from "firebase";
import db from "./db.js";

export default {
  data: function() {
    return {
      user: null,
      meetings: []
    };
  },
  components: {
    Navigation
  },
  methods: {
    logout: function() {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.user = null;
          this.$router.push("login");
        });
    },
    addMeeting: function(payload) {
      db.collection("users")
        .doc(this.user.uid)
        .collection("meetings")
        .add({
          name: payload,
          createdAt: Firebase.firestore.FieldValue.serverTimestamp()
        });
      this.meetingName = "";
    },
    deleteMeeting: function(payload) {
      db.collection("users")
        .doc(this.user.uid)
        .collection("meetings")
        .doc(payload)
        .delete();
    }
  },

  mounted() {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
        db.collection("users")
          .doc(this.user.uid)
          .collection("meetings")
          .onSnapshot(snapshot => {
            const snapData = [];
            snapshot.forEach(doc => {
              snapData.push({ id: doc.id, name: doc.data().name });
            });
            this.meetings = snapData.sort((a, b) => {
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
              }
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              }
              return 0;
            });
          });
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
