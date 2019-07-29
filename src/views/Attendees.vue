<template>
  <div class="container mt-4">
    <div class="row justify-content-center" v-if="user">
      <div class="col-md-8">
        <h1 class="font-weight-light text-center">Attendees</h1>

        <div class="card bg-light mb-4">
          <div class="card-body text-center">
            <div class="input-group input-group-lg">
              <input
                type="text"
                name="searchQuery"
                placeholder="Search Attendees"
                class="form-control"
              />
              <div class="input-group-append">
                <button class="btn btn-sm btn-outline-info" title="Pick a random attendee">
                  <font-awesome-icon icon="random"></font-awesome-icon>
                </button>
                <button class="btn btn-sm btn-outline-info" title="Reset Search">
                  <font-awesome-icon icon="undo"></font-awesome-icon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-center">
      <div
        class="col-8 col-sm-6 col-md-4 col-lg-3 mb-2 p-0 px-1"
        v-for="item in attendees"
        :key="item.id"
      >
        <div class="card">
          <div class="card-body px-3 py-2 d-flex align-items-center justify-content-center">
            <div class="btn-group pr-2" v-if="user">
              <button class="btn btn-sm btn-outline-secondary" title="Give user a star">
                <font-awesome-icon icon="star"></font-awesome-icon>
              </button>
              <a
                :href="'mailto:'+item.eMail"
                class="btn btn-sm btn-outline-secondary"
                :title="item.eMail"
              >
                <font-awesome-icon icon="envelope"></font-awesome-icon>
              </a>
              <button class="btn btn-sm btn-outline-secondary" tite="Delete Attendee">
                <font-awesome-icon icon="trash"></font-awesome-icon>
              </button>
            </div>

            <div>{{item.displayName}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Firebase from "firebase";
import db from "../db.js";

export default {
  name: "Attendees",
  data: function() {
    return {
      user: null,
      attendees: [],
      userID: this.$route.params.userID,
      meetingID: this.$route.params.meetingID
    };
  },
  mounted() {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });

    db.collection("users")
      .doc(this.userID)
      .collection("meetings")
      .doc(this.meetingID)
      .collection("attendees")
      .orderBy("createdAt", "desc")
      .onSnapshot(snapshot => {
        const snapData = [];
        snapshot.forEach(doc => {
          snapData.push({
            id: doc.id,
            eMail: doc.data().eMail,
            displayName: doc.data().displayName
          });
        });
        this.attendees = snapData;
      });
  },
  components: {
    FontAwesomeIcon
  }
};
</script>
