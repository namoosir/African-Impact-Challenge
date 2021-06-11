import { LOADING_USER, LOADING_USER_SUCCESSFUL, UPDATE_USER_SUCCESFUL} from "../actions/types";

  const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false
  };

  export default function(state = initialState, action) {
    const{type, payload} = action;
    switch (type) {
      case LOADING_USER_SUCCESSFUL:
        return {
          ...state,
          isAuthenticated: true,
          user: payload
        };
      case LOADING_USER:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }