import axios from "axios";
import authToken from "../utils/authToken";
import jwtDecode from "jwt-decode";

import {CURR_USER, USER_WAIT} from "./types";


export const registerUser = (user, history) => dispatch => {
  console.log(user);
  axios
    .post("http://localhost:5000/register", user)
      .then(res => history.push("/login"))
      .catch(err => {
        console.log(err, "couldn't connect to server");
      })
};


export const loginUser = (user, history) => dispatch => {
  console.log(history);
  axios
    .post("http://localhost:5000/login", user)
    .then(res => history.push('/home'))
    .catch(err => {
      console.log(err);
      history.push('/login');
    });
};

export const setCurrentUser = (decoded) => {
  return {
    type: CURR_USER,
    payload: decoded
  };
};

export const setUserWait= () => {
  return {
    type: USER_WAIT
  };
};

export const logoutUser = () => dispatch => {

  localStorage.removeItem("jwtToken");
  authToken(false);
  dispatch(setCurrentUser({}));
};

      // const { token } = res.data;

      // localStorage.setItem("jwtToken", token);
      // authToken(token);
      // const decoded = jwtDecode(token);
      // dispatch(setCurrentUser(decoded));