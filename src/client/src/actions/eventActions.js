import axios from "axios";

import {
  CREATE_EVENT,
  CREATE_EVENT_SUCCESSFUL,
  AFTER_CREATE_EVENT_SUCCESSFUL,
} from "./types";

export const createEvent = (event) => (dispatch) => {
  axios
    .post("http://localhost:3001/event/add", event)
    .then((res) => {
      axios
        .get(`http://localhost:3001/getModule/${event.moduleId}`)
        .then((res2) => {
          dispatch({
            type: CREATE_EVENT,
          });
        })
        .catch((e) => {
          console.log(e);
        });
    })
    .catch((e) => {
      console.log(e);
    });
};

export const createEventUser = (event) => (dispatch) => {
  axios
    .post("http://localhost:3001/user/event/add", event)
    .then((res) => {
      dispatch({
        type: CREATE_EVENT,
      });
    })
    .catch((e) => {
      console.log(e);
    });
};

export const createCompanyEvent = (event) => (dispatch) => {
  axios
    .post("http://localhost:3001/event/addCompany", event)
    .then((res) => {
      axios
        .get(`http://localhost:3001/profile/${event.userId}`)
        .then((res2) => {
          dispatch({
            type: CREATE_EVENT,
          });
        })
        .catch((e) => {
          console.log(e);
        });
    })
    .catch((e) => {
      console.log(e);
    });
};

export const createEventSuccessful = () => (dispatch) => {
  dispatch({
    type: CREATE_EVENT_SUCCESSFUL,
  });
};

export const afterCreateEvent = () => (dispatch) => {
  dispatch({
    type: AFTER_CREATE_EVENT_SUCCESSFUL,
  });
};
