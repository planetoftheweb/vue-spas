<template>
      <div class="container mt-4">
        <div class="row justify-content-center">
          <div class="col-md-8 text-center">
            <h1 class="font-weight-light">Add a Meeting</h1>
            <div class="card bg-light">
              <div class="card-body text-center">
                <form
                  class="formgroup"
                  onSubmit={this.handleSubmit}
                >
                  <div class="input-group input-group-lg">
                    <input
                      type="text"
                      class="form-control"
                      name="meetingName"
                      placeholder="Meeting name"
                      aria-describedby="buttonAdd"
                      value={this.state.meetingName}
                      onChange={this.handleChange}
                    />
                    <div class="input-group-append">
                      <button
                        type="submit"
                        class="btn btn-sm btn-info"
                        id="buttonAdd"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="col-11 col-md-6 text-center">
            <div class="card border-top-0 rounded-0">
              {this.props.meetings && this.props.meetings.length ? (
                <div class="card-body py-2">
                  <h4 class="card-title font-weight-light m-0">
                    Your Meetings
                  </h4>
                </div>
              ) : null}

              {this.props.meetings && (
                <div class="list-group list-group-flush">
                  meetingslist
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
</template>
