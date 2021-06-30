import axios from "axios";

import { LOAD_PROFILE } from "./types";

export const getProfile = (profiler, history) => (dispatch) => {
  let imageRes;
  axios
    .get(`http://localhost:3001/profile/${profiler._id}`)
    .then((res) => {
      console.log(res);
      axios
        .get(`http://localhost:3001/profile/getImage/${res.data.typeUser._id}}`)
        .then((res2) => {
          imageRes = res2;
        });
      const user = {
        id: res.data._id,
        name: res.data.name,
        email: res.data.email,
        username: res.data.username,
        password: res.data.password,
        typeOfUser: res.data.typeOfUser,
        biography: res.data.biography,
        typeUser: res.data.typeUser,
        image: imageRes
      };
      console.log(user);
      dispatch({
        type: LOAD_PROFILE,
        payload: user,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
