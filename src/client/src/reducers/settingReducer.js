import { UPDATE_USER_SUCCESSFUL } from "../actions/types";

  const initialState = {
    isUpdated: false,
    user: {},
  };

  export default function(state = initialState, action) {
    const{type, payload} = action;
    switch (type) {
      case UPDATE_USER_SUCCESSFUL:
        return {
          ...state,
          isUpdated: true,
          user: payload
        };
      default:
        return state;
    }
  }