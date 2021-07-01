import { LOADING_USER, LOADING_USER_SUCCESSFUL, LOGOUT_USER_SUCCESSFUL } from "../actions/types";

  const initialState = {
    isAuthenticated: false,
    isLoggedOut: false,
    user: {},
    loading: false
  };

  export default function(state = initialState, action) {
    const{type, payload} = action;
    switch (type) {
      case LOADING_USER_SUCCESSFUL:
        localStorage.setItem('token', payload.token);
        return {
          ...state,
          isAuthenticated: true,
          isLoggedOut: false,
          user: payload
        };
      case LOGOUT_USER_SUCCESSFUL:
        localStorage.removeItem('token');
        return{
          ...state,
          isAuthenticated: false,
          isLoggedOut: true,
          user: {},
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