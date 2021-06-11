import Header from "../header";
import Selection from "./selection";
import { Component } from "react";

import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register1 } from "../../actions/userAction";

import register from "../stylesheets/register.css";

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

  UNSAFE_componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/home");
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const {name, username, email, password, typeOfUser} = this.state;


    if(name === '' 
    || username === '' 
    || email === '' 
    || password === '' 
    || typeOfUser === '') {
      alert('Please fill all the fields to be able to register')
    } else {
      const user = {
        name: this.state.name,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        typeOfUser: this.state.typeOfUser,
      };
  
      this.state.name = "";
      this.state.username = "";
      this.state.email = "";
      this.state.password = "";
      this.state.typeOfUser = "";
  
      this.props.register1(user, this.props.history);
    }
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container d-flex justify-content-center align-items-center mt-4">
          <Selection />

          <div className="row mt-5">
            <div className='col-md-12'>
              <div className="card my-auto">
                <div className="card-body">
                  <h1 className="card-title text-center">
                    African Impact Challenge
                  </h1>
                  <div className="form-container">
                    <form
                      onSubmit={this.onSubmit}
                    >
                      <div className="my-3">
                        <label className="form-label" htmlFor="name">
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
                        <label className="form-label" htmlFor="username">
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
                      <div className="mb-3">
                        <label className="form-label" htmlFor="typeOfUser">
                          Type of User
                        </label>
                        <select
                          className="d-block form-control"
                          name="typeOfUser"
                          id="typeOfUser"
                          onChange={this.onChange}
                          value={this.state.typeOfUser}
                        >
                          <option value="entrepreneur">Entrepreneur</option>
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
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

Register.propTypes = {
  register1: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { register1 })(withRouter(Register));
