import {
  LOADING_POSTS_SUCCESSFUL,
  CREATING_POSTS_SUCCESSFUL,
  DELETE_POSTS_SUCCESSFUL,
  EDIT_POSTS_SUCCESSFUL,
} from "../actions/types";

const initialState = {
  isCreated: false,
  isLoaded: false,
  isDeleted: false,
  isEdited: false,
  posts: {},
  user: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATING_POSTS_SUCCESSFUL:
      return {
        ...state,
        isCreated: true,
        user: payload,
      };
    case LOADING_POSTS_SUCCESSFUL:
      return {
        ...state,
        isLoaded: true,
        user: payload,
        posts: payload
      };
    default:
      return state;
  }
}
