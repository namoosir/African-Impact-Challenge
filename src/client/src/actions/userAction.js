import axios from "axios";

import {CURR_USER, USER_WAIT} from "./types";

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

export const login2 = (user, history) => dispatch => {
  const {id} = user
  axios
    .post(`http://localhost:3001/profile/${id}/auth/settings`, user)
    .then(res => history.push('/update/settings'))
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
