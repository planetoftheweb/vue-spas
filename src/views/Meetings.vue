<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-md-8 text-center">
        <h1 class="font-weight-light" v-if="user">Add a Meeting</h1>
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
                  ref="meetingName"
                />
                <div class="input-group-append">
                  <button
                    type="submit"
                    class="btn btn-sm btn-info"
                    id="buttonAdd"
                    @click.prevent="handleAdd"
                  >+</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="col-11 col-md-6">
        <div class="card border-top-0 rounded-0">
          <div class="card-body py-2">
            <h4 class="card-title m-0 text-center">Your Meetings</h4>
          </div>
          <div class="list-group list-group-flush">
            <div class="list-group-item d-flex" v-for="(item) in meetings" :key="item.index">
              <section
                class="btn-group align-self-center"
                role="group"
                aria-label="Meeting Options"
              >
                <button
                  class="btn btn-sm btn-outline-secondary"
                  title="Delete Meeting"
                  :click="handleAdd"
                >
                  <font-awesome-icon icon="trash"></font-awesome-icon>
                </button>
                <button
                  class="btn btn-sm btn-outline-secondary"
                  title="Check In"
                  :click="handleAdd"
                >
                  <font-awesome-icon icon="link"></font-awesome-icon>
                </button>
                <button
                  class="btn btn-sm btn-outline-secondary"
                  title="Attendees List"
                  :click="handleAdd"
                >
                  <font-awesome-icon icon="list-ul"></font-awesome-icon>
                </button>
              </section>

              <section class="pl-3 text-left align-self-center">{{item.name}}</section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  data: function() {
    return {
      meetingName: ""
    };
  },
  components: {
    FontAwesomeIcon
  },
  props: ["user", "meetings"],
  methods: {
    handleAdd: function() {
      this.$emit("addMeeting", this.meetingName);
      this.meetingName = "";
      this.$refs.meetingName.focus();
    }
  }
};
</script>

