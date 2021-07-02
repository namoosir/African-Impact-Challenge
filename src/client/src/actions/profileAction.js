import axios from "axios";

import { LOAD_PROFILE, LOAD_SELF_PROFILE } from "./types";

export const getProfile = (profiler, history) => (dispatch) => {
  let imageRes;
  axios
    .get(`http://localhost:3001/profile/${profiler._id}`)
    .then((res) => {
      console.log(res);
      axios.get().then((res2) => {
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
        image: `http://localhost:3001/profile/getImage/${res.data._id}`,
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

export const loadSelfProfile = (profile) => (dispatch) => {
  console.log("BEINGCALLED",profile);
  let user;
  axios.get(`http://localhost:3001/profile/${profile.id}`).then((res) => {
    user = {
      id: res.data._id,
      name: res.data.name,
      email: res.data.email,
      username: res.data.username,
      password: res.data.password,
      typeOfUser: res.data.typeOfUser,
      biography: res.data.biography,
      typeUser: res.data.typeUser,
      image: `http://localhost:3001/profile/getImage/${res.data._id}`,
    };
    console.log("THIS IS USERLOAD",user);
    dispatch({
      type: LOAD_SELF_PROFILE,
      payload: user,
    });
  });
};


