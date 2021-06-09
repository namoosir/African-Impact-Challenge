import Header from "../header";

import { Component } from "react";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/auth";

import login from "../stylesheets/login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/home"); // push user to dashboard when they login
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    this.state.email = '';
    this.state.password = '';

    this.props.loginUser(user, this.props.history);
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container d-flex justify-content-center align-items-center mt-4">
          <div className="row mt-5">
            <div className="card my-auto">
              <div className="card-body">
                <h1 className="card-title text-center">
                  African Impact Challenge
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
                  <button type='submit' className="btn btn-block btn-success d-block mx-auto">
                    Login
                  </button>
                  </form>
                  <hr className="mt-3" />
                  <div className="d-flex justify-content-center">
                    <div className="card-text text-center">
                      Don't have an account?
                      <Link className="d-block link-light" to="/register">
                        Register
                      </Link>
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loginUser })(Login);
