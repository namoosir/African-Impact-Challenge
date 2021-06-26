import axios from "axios";

import {
  CREATING_POSTS_SUCCESSFUL,
  LOADING_POSTS_SUCCESSFUL,
  EDIT_POSTS_SUCCESSFUL,
  DELETE_POSTS_SUCCESSFUL,
} from "./types";

export const createPost = (user, post, history) => (dispatch) => {
  axios
    .put(`http://localhost:3001/post`, {user, post})
    .then((res) => {
      dispatch({
        type: CREATING_POSTS_SUCCESSFUL,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      history.push("/home", user);
    });
};

export const loadPosts = (user, history) => (dispatch) => {
    axios
      .get(`http://localhost:3001/getrec`, user)
      .then((res) => {
        dispatch({
          type: LOADING_POSTS_SUCCESSFUL,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        // history.push("/home", user);
      });
  };

  export const editPost = (user, history) => (dispatch) => {
    axios
      .put(`http://localhost:3001/editpost`, user)
      .then((res) => {
        dispatch({
          type: EDIT_POSTS_SUCCESSFUL,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        history.push("/home", user);
      });
  };

  export const deletePost = (user, history) => (dispatch) => {
    axios
      .put(`http://localhost:3001/deletepost`, user)
      .then((res) => {
        dispatch({
          type: DELETE_POSTS_SUCCESSFUL,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        history.push("/home", user);
      });
  };
