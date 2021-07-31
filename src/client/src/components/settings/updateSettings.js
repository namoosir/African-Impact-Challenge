import { Component, useState } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateUser } from "../../actions/settingAction";
import { useEffect } from "react";
import HeaderAuth from "../AuthHeader";

import { updateProfileSuccessful } from "../../actions/userAction";
import {
  loadSelfProfile,
  loadSelfProfileAfterEdit,
} from "../../actions/profileAction";

const settings = require("../stylesheets/settings.css");

const UpdateSettings = ({
  user,
  isAuthenticated,
  updateUser,
  history,
  updateProfileSuccessful,
  loadSelfProfileAfterEdit
}) => {
  const [userUpdate, setUserUpdate] = useState({
    id: user.id,
    name: user.name,
    email: user.email,
    username: user.username,
    typeOfUser: user.typeOfUser,
    typeUser: user.typeUser,
  });

  const { name, email, username } = userUpdate;

  const onChange = (e) => {
    setUserUpdate({
      ...userUpdate,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    if (name === "" || email === "" || username === "") {
      alert(
        "You need to fill all the fields to update your account information"
      );
    } else {
      updateUser(userUpdate, history);
      loadSelfProfileAfterEdit(user);
      updateProfileSuccessful();
      history.push("/profile");
    }
  };

  return (
    <>
      <HeaderAuth
        user={user}
        isAuthenticated={isAuthenticated}
        history={history}
      />
      <div className="container mx-auto d-flex justify-content-center align-items-center mt-5">
        <div className="row">
          <div className="card settings mt-5">
            <div className="card-body mt-5">
              <h1 className="card-title heading mt-2">Account Settings</h1>
              <form onSubmit={onSubmit}>
                <div className="my-3">
                  <label className="form-label" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control d-inline"
                    id="name"
                    name="name"
                    value={name}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="username">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={username}
                    onChange={onChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-block btn-light d-block mx-auto"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

UpdateSettings.propTypes = {
  updateUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user.user.sentUser,
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps, {
  updateUser,
  updateProfileSuccessful,
  loadSelfProfile,
  loadSelfProfileAfterEdit,
})(UpdateSettings);
