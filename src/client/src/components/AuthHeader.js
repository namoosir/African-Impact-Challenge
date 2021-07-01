import nav from "./stylesheets/nav.css";

import { useEffect } from "react";

import { logout } from "../actions/userAction";

import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const HeaderAuth = (props, {logout, user, history, isLoggedOut}) => {


  useEffect(() => {
    if (props.isLoggedOut || !props.isAuthenticated) {

      props.history.push("/login");
    }
  }, [props.isLoggedOut]);

  const onClickLogout = (e) => {
    e.preventDefault();
    props.logout(props.user, history);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
          <img
            src="https://static1.squarespace.com/static/5959429eff7c50228e412bf1/t/5fd172998185f4776a0278f2/1622856161424/"
            width="60"
            height="50"
          ></img>
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav">
            <Link className="nav-link" to="/home">
              Home
            </Link>
            <Link className="nav-link" to="/calendar">
              Calendar
            </Link>
            <Link className="nav-link" to="/lectures">
              Lectures
            </Link>
            <Link className="nav-link" to="/messages">
              Messages
            </Link>
          </div>
        </div>
        <div className="navbar-nav mx-5 offset-3">
          <img
            className="profilepic"
            src="https://thispersondoesnotexist.com/image"
            width="50"
          ></img>
          <li className="nav-item dropdown me-5">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {props.user ? props.user.username : ""}
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={onClickLogout}>
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </div>
      </div>
    </nav>
  );
};

HeaderAuth.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user.user.sentUser,
  isLoggedOut: state.user.isLoggedOut,
});

export default connect(mapStateToProps, { logout })(HeaderAuth);
