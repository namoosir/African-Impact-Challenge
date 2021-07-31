import axios from "axios";

import {
  LOAD_MODULE,
  CREATE_MODULE,
  CREATE_MODULE_TRY,
  CANCEL_CREATE_MODULE,
  GET_CLICKED_MODULE,
  RELOAD_MODULE,
  RELOAD_MODULE_SUCCESS,
  RELOAD_STOP_MODULE,
  LOAD_CONTENT,
  LOAD_LECTURES,
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
  alert("HERE");
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

export const instructorUpload = async (moduleEdit) => {};

export const startReload = () => (dispatch) => {
  dispatch({
    type: RELOAD_MODULE,
  });
};

export const reloadModule = (module, history) => (dispatch) => {
  axios
    .get(`http://localhost:3001/getModule/${module._id}`)
    .then((res) => {
      dispatch({
        type: RELOAD_MODULE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((e) => {
      console.log(e);
      history.push("/home");
    });
};

export const stopReload = () => (dispatch) => {
  dispatch({
    type: RELOAD_STOP_MODULE,
  });
};

export const loadContent = (id, history) => (dispatch) => {
  axios
    .get(`http://localhost:3001/modules/${id}`)
    .then((res) => {
      dispatch({
        type: LOAD_CONTENT,
        payload: res.data,
      });
    })
    .catch((e) => {
      console.log(e);
      history.push("/module");
    });
};

export const loadLecture = (id, history) => (dispatch) => {
  axios
    .get(`http://localhost:3001/lectures/${id}`)
    .then((res) => {
      dispatch({
        type: LOAD_LECTURES,
        payload: res.data,
      });
    })
    .catch((e) => {
      console.log(e);
      history.push("/module");
    });
};
