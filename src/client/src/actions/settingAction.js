import axios from "axios";

import { UPDATE_USER_SUCCESSFUL } from "./types";

export const updateUser = (user, history) => (dispatch) => {
  axios
    .put(`http://localhost:3001/profile/update/settings`, user)
    .then(res => {
      dispatch({
        type: UPDATE_USER_SUCCESSFUL,
        payload: res.data.user,
      });
    })
    .catch((err) => {
      console.log(err);
      history.push("/auth/settings", user);
    });
};
