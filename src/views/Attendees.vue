<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div
        class="col-8 col-sm-6 col-md-4 col-lg-3 mb-2 p-0 px-1"
        v-for="item in attendees"
        :key="item.id"
      >
        <div class="card">
          <div class="card-body px-3 py-2 d-flex align-items-center justify-content-center">
            <div
              class="btn-group pr-2"
              v-if="user !== null && user.uid == userID"
            >
              <button
                class="btn btn-sm"
                :class="[
                  item.star ? 'text-danger': '', 'btn-outline-secondary'
                ]"
                title="Give user a Star"
                @click="toggleStar(item.id)"
              >
                <font-awesome-icon icon="star"></font-awesome-icon>
              </button>
              <a
                class="btn btn-sm btn-outline-secondary"
                title="Send user an email"
              >
                <font-awesome-icon icon="envelope"></font-awesome-icon>
              </a>
              <button
                class="btn btn-sm btn-outline-secondary"
                title="Delete Attendee"
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
import db from "../db.js";

export default {
  name: "Attendees",
  data: function() {
    return {
      attendees: [],
      userID: this.$route.params.userID,
      meetingID: this.$route.params.meetingID
    };
  },
  components: {
    FontAwesomeIcon
  },
  methods: {
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
  },
  props: ["user"],
  mounted() {
    db.collection("users")
      .doc(this.userID)
      .collection("meetings")
      .doc(this.meetingID)
      .collection("attendees")
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
      });
  }
};
</script>
