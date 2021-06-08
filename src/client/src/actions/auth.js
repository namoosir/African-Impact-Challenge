import axios from "axios";
import setAuthToken from "../utils/authToken";
import jwtDecode from "jwt-decode";

import {CURR_USER, USER_WAIT} from "./types";

export const registerUser = (user, history) => dispatch => {
  axios
    .post("http://localhost:3000/register", user)
      .then(res => history.push("/login"))
      .catch(err => console.log(err));
};


export const loginUser = userData => dispatch => {
  axios
    .post("http://localhost:3000/login", userData)
    .then(res => {
      const { token } = res.data;

      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwtDecode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => console.log(err));
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
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};