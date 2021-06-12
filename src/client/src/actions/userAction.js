import axios from "axios";

import {LOADING_USER_SUCCESSFUL} from "./types";

export const register1 = (user, history) => dispatch => {
  axios
    .post("http://localhost:3001/register", user)
      .then(res => {
        history.push("/login");
      })
      .catch(err => {
        console.log(err, "couldn't connect to server");
      })
};

export const login1 = (user, history) => dispatch => {
  axios
    .post("http://localhost:3001/login", user)
    .then(res => history.push('/home'))
    .catch(err => {
      console.log(err);
      history.push('/login');
    });
};


