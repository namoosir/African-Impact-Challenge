import Header from "../header";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

import login from '../stylesheets/login.css'

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

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

                <form>
                  <div className="mb-3">
                    <label className="form-label" for="email">
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
                    <label className="form-label" for="password">
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
                  <button className="btn btn-block btn-success d-block mx-auto">
                    Login
                  </button>
                  <hr className="mt-3" />
                  <div className="d-flex justify-content-center">
                    <div className="card-text text-center">
                      Don't have an account?
                      <Link className="d-block link-light" to="/register">
                        Register
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
