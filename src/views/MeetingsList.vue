<template>
  <div class="list-group-item d-flex">
    <section class="btn-group align-self-center" role="group" aria-label="Meeting Options">
      <router-link
        title="Delete Meeting"
        class="btn btn-sm btn-outline-secondary"
        to="/checkin/${this.props.userID}/${item.meetingID}"
      >delete</router-link>

      <router-link
        title="Check In"
        class="btn btn-sm btn-outline-secondary"
        to="/checkin/${this.props.userID}/${item.meetingID}"
      >check-in</router-link>

      <router-link
        title="Attendees List"
        class="btn btn-sm btn-outline-secondary"
        to="/attendees/${this.props.userID}/${item.meetingID}"
      >list</router-link>>
    </section>

    <section class="pl-3 text-left align-self-center">{{meetingName}}</section>
  </div>
</template>
