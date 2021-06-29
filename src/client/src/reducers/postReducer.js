import {
  LOADING_POSTS_SUCCESSFUL,
  CREATING_POSTS_SUCCESSFUL,
  DELETE_POSTS_SUCCESSFUL,
  CREATING_COMMENT_SUCCESSFUL,
  EDIT_POSTS_SUCCESSFUL,
  EDITING_POST,
  CANCEL_EDIT
} from "../actions/types";

const initialState = {
  isCreated: false,
  isLoaded: false,
  isDeleted: false,
  isEditing: false,
  hasCommented: false,
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
        posts: payload,
      };
    case DELETE_POSTS_SUCCESSFUL:
      return {
        ...state,
        isDeleted: true,
      };
    case CREATING_COMMENT_SUCCESSFUL:
      return {
        ...state,
        isEditing: false
      }
    case EDITING_POST:
      return {
        ...state, 
        isEditing: true
      }
    case EDIT_POSTS_SUCCESSFUL: 
      return  {
        ...state,
        isEditing: false
      }
    case CANCEL_EDIT:
      return {
        ...state,
        isEditing: false
      }
    default:
      return state;
  }
}
