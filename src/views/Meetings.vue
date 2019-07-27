<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-md-8 text-center">
        <h1 class="font-weight-light" v-if="user">Add a {{user.uid}}</h1>
        <div class="card bg-light">
          <div class="card-body text-center">
            <form class="formgroup">
              <div class="input-group input-group-lg">
                <input
                  type="text"
                  class="form-control"
                  name="meetingName"
                  placeholder="Meeting name"
                  aria-describedby="buttonAdd"
                  v-model="meetingName"
                />
                <div class="input-group-append">
                  <button
                    type="submit"
                    class="btn btn-sm btn-info"
                    id="buttonAdd"
                    @click.prevent="addMeeting"
                  >+</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="col-11 col-md-6 text-center">
        <div class="card border-top-0 rounded-0">
          <div class="card-body py-2">
            <h4 class="card-title font-weight-light m-0">Your Meetings</h4>
          </div>

          <div
            class="list-group list-group-flush"
            v-for="(item, idx) in meetings"
            :key="idx"
          >{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Firebase from "firebase";
import db from "../db.js";
export default {
  data: function() {
    return {
      meetings: [],
      meetingName: ""
    };
  },
  props: ["user"],
  methods: {
    addMeeting: function() {
      db.collection("users")
        .doc(this.user.uid)
        .collection("meetings")
        .add({
          name: this.meetingName,
          createdAt: Firebase.firestore.FieldValue.serverTimestamp()
        });
      this.meetingName = "";
    }
  },
  firestore() {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        db.collection("users/WGuVFdc8EJhVnSvgKhsVlt9fDzx2/meetings")
          .get()
          .then(snapshot => {
            console.log(snapshot);
          });
      }
    });
  }
};
</script>

