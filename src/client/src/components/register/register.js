import Header from "../header";
import Selection from "./selection";
import { Component } from "react";

import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { registerUser } from "../../actions/auth";

import register from "../../stylesheets/register.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      username: "",
      email: "",
      password: "",
      typeOfUser: "",
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onClick = (e) => {
    console.log("CLICKED");
  };

  onSubmit = (e) => {
    e.preventDefault();

    const user = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      typeOfUser: this.state.typeOfUser,
    };

    console.log(user);
    this.props.registerUser(user, this.props.history);
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container d-flex justify-content-center align-items-center mt-4">
          <Selection />

          <div className="row mt-5">
            <div>
              <div className="card my-auto">
                <div className="card-body">
                  <h1 className="card-title text-center">
                    African Impact Challenge
                  </h1>

                  <form onSubmit={this.onSubmit}>
                    <div className="my-3">
                      <label className="form-label" for="name">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={this.state.name}
                        placeholder="Name"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" for="email">
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
                      <label className="form-label" for="username">
                        Username
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        value={this.state.username}
                        placeholder="Username"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" for="password">
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
                    <div className="mb-3">
                      <label className="form-label" for="typeOfUser">
                        Type of User
                      </label>
                      <select
                        className="d-block form-control"
                        name="typeOfUser"
                        id="typeOfUser"
                        onChange={this.onChange}
                        value={'entrepreneur'}
                      >
                        <option selected value="entrepreneur">Entrepreneur</option>
                        <option value="partner">Partner</option>
                        <option value="company">Company</option>
                        <option value="instructor">Instructor</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-block btn-success d-block mx-auto"
                    >
                      Register
                    </button>
                  </form>
                  <hr className="mt-3" />
                  <div className="d-flex justify-content-center">
                    <div className="card-text text-center">
                      Already have an account?
                      <Link className="d-block link-light" to="/login">
                        Login
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
