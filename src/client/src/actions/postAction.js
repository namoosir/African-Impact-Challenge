import axios from "axios";

import {
  CREATING_POSTS_SUCCESSFUL,
  LOADING_POSTS_SUCCESSFUL,
  EDIT_POSTS_SUCCESSFUL,
  DELETE_POSTS_SUCCESSFUL,
  CREATING_COMMENT_SUCCESSFUL,
  EDITING_POST,
  CANCEL_EDIT,
} from "./types";

export const createPost = (user, post, history) => (dispatch) => {
  axios
    .put(`http://localhost:3001/post`, { user, post })
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
    .get("http://localhost:3001/getrec", user)
    .then((res) => {
      dispatch({
        type: LOADING_POSTS_SUCCESSFUL,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      history.push("/home", user);
    });
};

export const editPost = (post, history) => (dispatch) => {
  axios
    .put(`http://localhost:3001/editpost`, post)
    .then((res) => {
      dispatch({
        type: EDIT_POSTS_SUCCESSFUL,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      history.push("/home");
    });
};

export const addComment = (commentInfo, history) => (dispatch) => {
  axios
    .put("http://localhost:3001/comment", commentInfo)
    .then((res) => {
      dispatch({
        type: CREATING_COMMENT_SUCCESSFUL,
      });
    })
    .catch((err) => {
      console.log(err);
      history.push("/home");
    });
};

export const deletePost = (id, history) => (dispatch) => {
  axios
    .put(`http://localhost:3001/deletepost`, { id: id })
    .then((res) => {
      dispatch({
        type: DELETE_POSTS_SUCCESSFUL,
      });
    })
    .catch((err) => {
      console.log(err);
      history.push("/home");
    });
};

export const editingPost = () => (dispatch) => {
  dispatch({
    type: EDITING_POST,
  });
};

export const cancelEdit = () => (dispatch) => {
  dispatch({
    type: CANCEL_EDIT,
  });
};
