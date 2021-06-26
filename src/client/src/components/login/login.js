import Header from "../header";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login1 } from "../../actions/userAction";

import login from "../stylesheets/login.css";

const Login = ({user, history, isAuthenticated, login1, isLoggedOut}) => {
  const [existUser, setExistUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log("HERE");
    if(isAuthenticated) {
      history.push("/home");
    }
  }, [isAuthenticated])

  const { email, password } = existUser;

  const onChange = (e) => {
    setExistUser({
      ...existUser,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = existUser;

    if (email === "" || password === "") {
      alert("Please fill all the fields to be able to log in");
    } else {
      const user = {
        email: existUser.email,
        password: existUser.password,
      };

      existUser.email = "";
      existUser.password = "";

      login1(user, history);
    }
  };

  return (
    <div>
      <Header/>
      <div className="container d-flex justify-content-center align-items-center mt-4">
        <div className="row mt-5">
          <div className="card my-auto">
            <div className="card-body">
              <h1 className="card-title text-center">
                African Impact Challenge
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
                <button
                  type="submit"
                  className="btn btn-block btn-success d-block mx-auto"
                >
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
};

Login.propTypes = {
  login1: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user.user.sentUser,
  isAuthenticated: state.user.isAuthenticated,
  isLoggedOut: state.user.isLoggedOut
});

export default connect(mapStateToProps, { login1 })(Login);
