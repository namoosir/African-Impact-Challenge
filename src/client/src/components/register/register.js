import Header from "../header";
import Selection from "./selection";
import { useEffect, useState } from "react";

import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register1 } from "../../actions/userAction";

import register from "../stylesheets/register.css";

const Register = ({ history, register1, user, isAuthenticated }) => {

  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    typeOfUser: "",
  });

  useEffect(() => {
    console.log(user);
   if(isAuthenticated) {
     history.push("/login");
   }
  }, [isAuthenticated])

  const { name, username, email, password, typeOfUser } = newUser;

  const onChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };



  const onSubmit = (e) => {
    e.preventDefault();

    const { name, username, email, password, typeOfUser } = newUser;

    if (
      name === "" ||
      username === "" ||
      email === "" ||
      password === "" ||
      typeOfUser === ""
    ) {
      alert("Please fill all the fields to be able to register");
    } else {
      const user = {
        name: newUser.name,
        username: newUser.username,
        email: newUser.email,
        password: newUser.password,
        typeOfUser: newUser.typeOfUser,
      };

      setNewUser({
        name: "",
        username: "",
        email: "",
        password: "",
        typeOfUser: "",
      });

      register1(user, history);
    }
  };

  return (
    <div>
      <Header/>
      <div className="container d-flex justify-content-center align-items-center mt-4">
        <Selection />

        <div className="row d-flex align-items-center mt-5">
          <div className="col-md-12">
            <div className="card my-auto">
              <div className="card-body">
                <h1 className="card-title text-center">
                  African Impact Challenge
                </h1>
                <div className="form-container">
                  <form onSubmit={onSubmit}>
                    <div className="my-3">
                      <label className="form-label" htmlFor="name">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={name}
                        placeholder="Name"
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
                        placeholder="123@abc.com"
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
                        placeholder="Username"
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
                    <div className="mb-3">
                      <label className="form-label" htmlFor="typeOfUser">
                        Type of User
                      </label>
                      <select
                        className="d-block form-control"
                        name="typeOfUser"
                        id="typeOfUser"
                        onChange={onChange}
                        value={typeOfUser}
                      >
                        <option value="">Please Select a Role</option>
                        <option value="Entrepreneur">Entrepreneur</option>
                        <option value="Partner">Partner</option>
                        <option value="Company">Company</option>
                        <option value="Instructor">Instructor</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-block btn-success d-block mx-auto"
                    >
                      Register
                    </button>
                  </form>
                </div>
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
};

const mapStateToProps = (state) => ({
  user: state.user.user.sentUser,
  isAuthenticated: state.user.isAuthenticated,
});

Register.propTypes = {
  register1: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { register1 })(withRouter(Register));
