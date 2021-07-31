import React from "react";
import { Component, useState, useEffect } from "react";

import GeneralCard from "./GeneralCard/GeneralCard";
import Biography from "./Biography/Biography";
import Employees from "./Employees/Employees";
import Documents from "./Documents/Documents";
import CompanyCalendar from "./Calendar/companyCalendar";
import Calendar from "./Calendar/calendar";
import { connect } from "react-redux";
import AuthHeader from "../AuthHeader";
import { reloadAfterEdit } from "../../actions/profileAction";
import { updateUser } from "../../actions/userAction";

import PropTypes from "prop-types";

const ProfilePage = ({
  userProfile,
  loggedInUser,
  isAuthenticated,
  isLoggedOut,
  history,
  toReload,
  reloadAfterEdit,
  updateUser,
}) => {

  const [display, setDisplay] = useState({
    displayCalendar: false,
  });

  const { displayCalendar } = display;

  const [events, setEvents] = useState({
    currEvents: userProfile ? userProfile.events : "",
  });

  useEffect(() => {
    if (!isAuthenticated) {
      history.push("/login");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (toReload) {
      reloadAfterEdit();
      updateUser(loggedInUser, history);
      window.location.reload();
    }
  }, [toReload]);

  return (
    <>
      <AuthHeader
        user={loggedInUser}
        isAuthenticated={isAuthenticated}
        history={history}
      />


      {!displayCalendar ? (
        <div className="profile_edit_page mt-4">
          <GeneralCard user={userProfile} loggedInUser={loggedInUser} />
          <Biography bioText={userProfile.biography} />
          {loggedInUser &&
          userProfile.typeUser &&
          userProfile.typeOfUser === "Company" ? (
            <Documents documents={userProfile.typeUser.documents} />
          ) : (
            <h3></h3>
          )}

          {userProfile.typeOfUser === "Company" ? (
            <div className="container margins">
              <div className="container">
                <CompanyCalendar user={userProfile} setDisplay={setDisplay} />
              </div>
            </div>
          ) : (
            <h1></h1>
          )}
        </div>
      ) : (
        <Calendar
          user={userProfile}
          loggedInUser={loggedInUser}
          setDisplay={setDisplay}
          history={history}
          events={events}
          setEvents={setEvents}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  loggedInUser: state.user.user.sentUser,
  isAuthenticated: state.user.isAuthenticated,
  isLoggedOut: state.user.isLoggedOut,
  userProfile: state.profile.profile,
  toReload: state.profile.toReload,
  state: state,
});

export default connect(mapStateToProps, { reloadAfterEdit, updateUser })(
  ProfilePage
);

// export default ProfilePage
