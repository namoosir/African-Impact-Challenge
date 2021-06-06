import Header from "../header";
import Selection from "./selection";

import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import register from "../stylesheets/register.css";

const Register = ({}) => {

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });
  const {firstName, lastName, username, email, password} = user

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  const onSubmit = (e) => {
    axios.post('/register', user)
    .then(() => console.log('User information sent'))
    .catch((e) => console.log(e))
  };

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

                <form onSubmit={onSubmit}>
                  <div className="my-3">
                  <label className="form-label" for="firstName">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      value = {firstName}
                      placeholder = "First Name"
                      onChange = {onChange}
                    />
                    </div>
                    <div className='mb-3'>
                    <label className="form-label" for="lastName">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      value = {lastName}
                      placeholder = "Last Name"
                      onChange = {onChange}
                    />
                  </div>
                    <div className='mb-3'>
                    <label className="form-label" for="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value = {email}
                      placeholder = "123@abc.com"
                      onChange = {onChange}
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
                      value = {username}
                      placeholder = "Username"
                      onChange = {onChange}
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
                      value = {password}
                      placeholder = "Password"
                      onChange = {onChange}
                    />
                  </div>
                  <button className="btn btn-block btn-success d-block mx-auto">
                    Register
                  </button>
                  <hr className="mt-3" />
                  <div className="d-flex justify-content-center">
                    <div className="card-text text-center">Already have an account? <Link className='d-block link-light' to="/login">Login</Link></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
