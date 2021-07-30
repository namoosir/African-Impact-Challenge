import { useState, useEffect } from "react";

import { connect } from "react-redux";

import AuthHeader from "../AuthHeader";
import CreateMeeting from "./CreateMeeting";
import ModuleCreate from "../displayModule";

import { loadRooms } from "../../actions/videoAction";

const MeetingView = ({ user, isAuthenticated, history, loadRooms }) => {
  useEffect(() => {
    loadRooms();
  }, [])

  return (
    <>
      <AuthHeader
        user={user}
        isAuthenticated={isAuthenticated}
        history={history}
      />

      <div className="row d-flex justify-content-center">
        <div className="col-lg-3">
          <div className="mt-4">
            <ModuleCreate user={user} history={history} component="home" />
          </div>
        </div>

        <div className="col-lg-5">
          <div className="container d-flex justify-content-center mt-4">
            <div className="card">
              <div className="card-body">
                <h1 className="card-text text-center">Meetings</h1>
                <hr></hr>
                <blockquote
                  className="bg-light px-2 py-2"
                  style={{ borderRadius: "15px" }}
                >
                  <h5 className="text-dark mb-3">
                    A place where you can create meetings and catchup with
                    possible partners, instructors, or fellow entrepreneurs
                  </h5>
                  <footer className="blockquote-footer mb-0">
                    Team of African Impact Challenge
                  </footer>
                </blockquote>

                <div className="text-center">
                  <CreateMeeting user={user} history={history} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
        
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user.sentUser,
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps, {loadRooms})(MeetingView);
