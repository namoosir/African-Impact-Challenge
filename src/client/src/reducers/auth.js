import { CURR_USER, USER_WAIT} from "../actions/types";

const isEmpty = require("is-empty");

  const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false
  };

  export default function(state = initialState, action) {
    switch (action.type) {
      case CURR_USER:
        return {
          ...state,
          isAuthenticated: !isEmpty(action.payload),
          user: action.payload
        };
      case USER_WAIT:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }