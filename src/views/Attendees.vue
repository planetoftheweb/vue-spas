<template>
        <div class="container mt-4">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <h1 class="font-weight-light text-center">
              Attendees
            </h1>

            <div class="card bg-light mb-4">
              <div class="card-body text-center">
                <div class="input-group input-group-lg">
                  <input
                    type="text"
                    name="searchQuery"
                    value={this.state.searchQuery}
                    placeholder="Search Attendees"
                    class="form-control"
                    onChange={this.handleChange}
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-sm btn-outline-info "
                      title="Pick a random attendee"
                      onClick={() => this.chooseRandom()}
                    >
                      <FaRandom />
                    </button>
                    <button
                      class="btn btn-sm btn-outline-info "
                      title="Reset Search"
                      onClick={() => this.resetQuery()}
                    >
                      <FaUndo />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AttendeesList
          userID={this.props.userID}
          meetingID={this.props.meetingID}
          adminUser={this.props.adminUser}
          attendees={filteredAttendees}
        />
      </div>
</template>
