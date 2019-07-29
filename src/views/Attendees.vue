<template>
  <div class="container mt-4">
    <div class="row justify-content-center" v-if="user && user.uid == userID">
      <div class="col-md-8">
        <h1 class="font-weight-light text-center">Attendees</h1>

        <div class="card bg-light mb-4">
          <div class="card-body text-center">
            <div class="input-group input-group-lg">
              <input
                type="text"
                placeholder="Search Attendees"
                class="form-control"
                v-model="searchQuery"
                ref="searchQuery"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-sm btn-outline-info"
                  title="Pick a random attendee"
                  @click="chooseRandom"
                >
                  <font-awesome-icon icon="random"></font-awesome-icon>
                </button>
                <button
                  class="btn btn-sm btn-outline-info"
                  title="Reset Search"
                  @click="resetQuery"
                >
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
        v-for="item in filteredAttendees"
        :key="item.id"
      >
        <div class="card">
          <div class="card-body px-3 py-2 d-flex align-items-center justify-content-center">
            <div class="btn-group pr-2" v-if="user && (user.uid == userID)">
              <button
                class="btn btn-sm"
                :class="[item.star ? 'text-danger' : '', 'btn-outline-secondary']"
                title="Give user a star"
                @click="toggleStar(item.id)"
              >
                <font-awesome-icon icon="star"></font-awesome-icon>
              </button>
              <a
                :href="'mailto:'+item.eMail"
                class="btn btn-sm btn-outline-secondary"
                :title="item.eMail"
              >
                <font-awesome-icon icon="envelope"></font-awesome-icon>
              </a>
              <button
                class="btn btn-sm btn-outline-secondary"
                tite="Delete Attendee"
                @click="deleteAttendee(item.id)"
              >
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
      displayAttendees: [],
      searchQuery: "",
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
            displayName: doc.data().displayName,
            star: doc.data().star
          });
        });
        this.attendees = snapData;
        this.displayAttendees = this.attendees;
      });
  },
  components: {
    FontAwesomeIcon
  },
  computed: {
    filteredAttendees: function() {
      const dataFilter = item =>
        item.displayName.toLowerCase().match(this.searchQuery.toLowerCase()) &&
        true;

      return this.displayAttendees.filter(dataFilter);
    }
  },
  methods: {
    deleteAttendee: function(attendeeID) {
      if (this.user && this.user.uid == this.userID) {
        db.collection("users")
          .doc(this.user.uid)
          .collection("meetings")
          .doc(this.meetingID)
          .collection("attendees")
          .doc(attendeeID)
          .delete();
      }
    },
    chooseRandom() {
      const randomAttendee = Math.floor(Math.random() * this.attendees.length);
      this.resetQuery();
      this.displayAttendees = [this.attendees[randomAttendee]];
    },

    resetQuery() {
      (this.displayAttendees = this.attendees), (this.$refs.searchQuery = "");
      this.searchQuery = "";
    },
    toggleStar: function(attendeeID) {
      if (this.user && this.user.uid == this.userID) {
        const ref = db
          .collection("users")
          .doc(this.user.uid)
          .collection("meetings")
          .doc(this.meetingID)
          .collection("attendees")
          .doc(attendeeID);
        ref.get().then(doc => {
          const star = doc.data().star;
          if (star) {
            ref.update({
              star: !star
            });
          } else {
            ref.update({
              star: true
            });
          }
        });
      }
    }
  }
};
</script>
