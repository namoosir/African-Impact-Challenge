import axios from "axios";

import {
  LOAD_MODULE,
  CREATE_MODULE,
  CREATE_MODULE_TRY,
  CANCEL_CREATE_MODULE,
  GET_CLICKED_MODULE,
} from "./types";

export const loadModules = (history) => (dispatch) => {
  axios
    .get("http://localhost:3001/getrecmodules")
    .then((res) => {
      dispatch({
        type: LOAD_MODULE,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      history.push("/home");
    });
};

export const createModules = (module, user, history) => (dispatch) => {
  axios
    .post(`http://localhost:3001/createModule/${user.id}`, module)
    .then((res) => {
      dispatch({
        type: CREATE_MODULE,
      });
    })
    .catch((err) => {
      console.log(err);
      history.push("/home");
    });
};

export const clickedModule = (module) => (dispatch) => {
  dispatch({
    type: GET_CLICKED_MODULE,
    payload: module,
  });
};

export const isCreating = () => (dispatch) => {
  dispatch({
    type: CREATE_MODULE_TRY,
  });
};

export const cancelCreatingModule = () => (dispatch) => {
  dispatch({
    type: CANCEL_CREATE_MODULE,
  });
};

export const instructorUpload = async(moduleEdit) => {

};
