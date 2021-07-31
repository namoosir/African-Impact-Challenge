import { Component, useState, useEffect } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login2 } from "../../actions/userAction";

const settings = require("../stylesheets/settings.css");

const AuthSettings = ({history, login2, isAuthenticated}) => {
  
  const [userAuth, setUserAuth] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {

    if(isAuthenticated) {
      history.push('/update/settings');
    }
  }, [isAuthenticated])

  const {email, password} = userAuth;

  const onChange = (e) => {
    setUserAuth({
      ...userAuth,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Please fill all the fields to be able to update your information");
    } else {
      login2(userAuth, history);
    }
  };

    return (
      <div className="container mx-auto d-flex justify-content-center align-items-center mt-5">
        <div className="row">
          <div className="card settings mt-5">
            <div className="card-body mt-5">
              <h1 className="card-title heading mt-2">
                Account Authentication
              </h1>

              <form onSubmit={onSubmit}>
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
                      placeholder="123@abc.com"
                      onChange={onChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={password}
                      placeholder="Password"
                      onChange={onChange}
                    />
                  </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-light mt-4">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}

AuthSettings.propTypes = {
  login2: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps, { login2 })(AuthSettings);
