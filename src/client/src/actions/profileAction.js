import axios from "axios";

import { LOAD_PROFILE, LOAD_SELF_PROFILE, LOAD_SELF_AFTER_EDIT, RELOAD_PROFILE } from "./types";

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
        image: res.data.image,
        events: res.data.events,
      };
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
      image: res.data.image,
      events: res.data.events,
    };
    dispatch({
      type: LOAD_SELF_PROFILE,
      payload: user,
    });
  });
};

export const loadSelfProfileAfterEdit = (profile) => (dispatch) => {
  console.log(profile);
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
      image: res.data.image,
      events: res.data.events,
    };
    dispatch({
      type: LOAD_SELF_AFTER_EDIT,
      payload: user,
    });
  });
}

export const reloadAfterEdit = () => (dispatch) => {
  dispatch({
    type: RELOAD_PROFILE
  })
}




