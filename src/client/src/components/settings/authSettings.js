import { Component, useState } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login2 } from "../../actions/userAction";

const settings = require("../stylesheets/settings.css");

class AuthSettings extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  UNSAFE__componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/update/settings"); // push user to the update settings page when done
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.email === "" || this.state.password === "") {
      alert("Please fill all the fields to be able to update your information");
    } else {
      const user = {
        email: this.state.email,
        password: this.state.password,
      };

      this.state.email = "";
      this.state.password = "";

      this.props.login2(user, this.props.history);
    }
  };

  render() {
    return (
      <div className="container mx-auto d-flex justify-content-center align-items-center mt-5">
        <div className="row">
          <div className="card settings mt-5">
            <div className="card-body mt-5">
              <h1 className="card-title heading mt-2">
                Account Authentication
              </h1>

              <form onSubmit={this.onSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={this.state.email}
                      placeholder="123@abc.com"
                      onChange={this.onChange}
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
                      value={this.state.password}
                      placeholder="Password"
                      onChange={this.onChange}
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
}

AuthSettings.propTypes = {
  login2: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { login2 })(AuthSettings);
