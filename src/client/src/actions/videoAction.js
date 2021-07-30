import axios from "axios";

import { LOAD_ROOMS } from "./types";

export const createConference = (video) => (dispatch) => {
  axios
    .post("http://localhost:3001/room/create", video)
    .then()
    .catch((e) => {
      console.log(e);
    });
};

export const loadRooms = () => (dispatch) => {
  axios
    .get("http://localhost:3001/rooms")
    .then((result) => {
      dispatch({
        type: LOAD_ROOMS,
        payload: result.data,
      });
    })
    .catch((e) => {
      console.log(e);
    });
};
